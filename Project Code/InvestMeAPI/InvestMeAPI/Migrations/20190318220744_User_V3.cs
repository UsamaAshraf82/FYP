using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using System;

namespace InvestMeAPI.Migrations
{
    public partial class User_V3 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Categories",
                columns: table => new
                {
                    CategoryId = table.Column<int>(nullable: false),
                    Name = table.Column<string>(unicode: false, maxLength: 20, nullable: true),
                    Description = table.Column<string>(unicode: false, nullable: true),
                    Image = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Categories", x => x.CategoryId);
                });

            migrationBuilder.CreateTable(
                name: "Cities",
                columns: table => new
                {
                    CityId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Name = table.Column<string>(unicode: false, maxLength: 20, nullable: true),
                    State = table.Column<string>(unicode: false, maxLength: 50, nullable: true),
                    Country = table.Column<string>(unicode: false, maxLength: 20, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Cities", x => x.CityId);
                });

            migrationBuilder.CreateTable(
                name: "Stages",
                columns: table => new
                {
                    StageId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Name = table.Column<string>(unicode: false, maxLength: 20, nullable: false),
                    Description = table.Column<string>(unicode: false, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Stages", x => x.StageId);
                });

            migrationBuilder.CreateTable(
                name: "Tags",
                columns: table => new
                {
                    TagId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Name = table.Column<string>(unicode: false, maxLength: 20, nullable: false),
                    Description = table.Column<string>(unicode: false, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Tags", x => x.TagId);
                });

            migrationBuilder.CreateTable(
                name: "Users",
                columns: table => new
                {
                    UserId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    FName = table.Column<string>(unicode: false, maxLength: 20, nullable: false),
                    LName = table.Column<string>(unicode: false, maxLength: 20, nullable: false),
                    Email = table.Column<string>(unicode: false, maxLength: 50, nullable: false),
                    Address = table.Column<string>(unicode: false, nullable: true),
                    PhoneNo = table.Column<string>(unicode: false, maxLength: 20, nullable: true),
                    PasswordHash = table.Column<byte[]>(nullable: false),
                    PasswordSalt = table.Column<byte[]>(nullable: false),
                    ProfilePic = table.Column<string>(nullable: true),
                    CityId = table.Column<int>(nullable: true),
                    Gender = table.Column<string>(unicode: false, maxLength: 10, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Users", x => x.UserId);
                    table.ForeignKey(
                        name: "fk_city_Id",
                        column: x => x.CityId,
                        principalTable: "Cities",
                        principalColumn: "CityId",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Campaigns",
                columns: table => new
                {
                    CampaignId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Title = table.Column<string>(unicode: false, maxLength: 50, nullable: true),
                    Description = table.Column<string>(unicode: false, nullable: true),
                    Cardimage = table.Column<string>(nullable: true),
                    Duration = table.Column<DateTime>(type: "date", nullable: true),
                    Fund = table.Column<decimal>(type: "decimal(18, 3)", nullable: true),
                    Likes = table.Column<int>(nullable: true, defaultValueSql: "((0))"),
                    Views = table.Column<int>(nullable: true, defaultValueSql: "((0))"),
                    CityId = table.Column<int>(nullable: false),
                    StageId = table.Column<int>(nullable: false),
                    CategoryId = table.Column<int>(nullable: false),
                    TagId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Campaigns", x => x.CampaignId);
                    table.ForeignKey(
                        name: "FK_cat_ID_Capmaign",
                        column: x => x.CategoryId,
                        principalTable: "Categories",
                        principalColumn: "CategoryId",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "fkcity_Id",
                        column: x => x.CityId,
                        principalTable: "Cities",
                        principalColumn: "CityId",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_stageId_campaign",
                        column: x => x.StageId,
                        principalTable: "Stages",
                        principalColumn: "StageId",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_tagID_campaign",
                        column: x => x.TagId,
                        principalTable: "Tags",
                        principalColumn: "TagId",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Entrepreneurs",
                columns: table => new
                {
                    EntrepreneurId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    CampaignId = table.Column<int>(nullable: false),
                    UserId = table.Column<int>(nullable: false),
                    Investment = table.Column<decimal>(type: "decimal(18, 3)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Entrepreneurs", x => x.EntrepreneurId);
                    table.ForeignKey(
                        name: "FK_Entrepreneur_campaign",
                        column: x => x.CampaignId,
                        principalTable: "Campaigns",
                        principalColumn: "CampaignId",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Entrepreneur_User",
                        column: x => x.UserId,
                        principalTable: "Users",
                        principalColumn: "UserId",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Investers",
                columns: table => new
                {
                    InvesterId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    CampaignId = table.Column<int>(nullable: false),
                    UserId = table.Column<int>(nullable: false),
                    Investment = table.Column<decimal>(type: "decimal(18, 3)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Investers", x => x.InvesterId);
                    table.ForeignKey(
                        name: "FK_Invester_campaign",
                        column: x => x.CampaignId,
                        principalTable: "Campaigns",
                        principalColumn: "CampaignId",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Invester_User",
                        column: x => x.UserId,
                        principalTable: "Users",
                        principalColumn: "UserId",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Campaigns_CategoryId",
                table: "Campaigns",
                column: "CategoryId");

            migrationBuilder.CreateIndex(
                name: "IX_Campaigns_CityId",
                table: "Campaigns",
                column: "CityId");

            migrationBuilder.CreateIndex(
                name: "IX_Campaigns_StageId",
                table: "Campaigns",
                column: "StageId");

            migrationBuilder.CreateIndex(
                name: "IX_Campaigns_TagId",
                table: "Campaigns",
                column: "TagId");

            migrationBuilder.CreateIndex(
                name: "IX_Entrepreneurs_CampaignId",
                table: "Entrepreneurs",
                column: "CampaignId");

            migrationBuilder.CreateIndex(
                name: "IX_Entrepreneurs_UserId",
                table: "Entrepreneurs",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_Investers_CampaignId",
                table: "Investers",
                column: "CampaignId");

            migrationBuilder.CreateIndex(
                name: "IX_Investers_UserId",
                table: "Investers",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_Users_CityId",
                table: "Users",
                column: "CityId");

            migrationBuilder.CreateIndex(
                name: "IX_Users_Email",
                table: "Users",
                column: "Email",
                unique: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Entrepreneurs");

            migrationBuilder.DropTable(
                name: "Investers");

            migrationBuilder.DropTable(
                name: "Campaigns");

            migrationBuilder.DropTable(
                name: "Users");

            migrationBuilder.DropTable(
                name: "Categories");

            migrationBuilder.DropTable(
                name: "Stages");

            migrationBuilder.DropTable(
                name: "Tags");

            migrationBuilder.DropTable(
                name: "Cities");
        }
    }
}
