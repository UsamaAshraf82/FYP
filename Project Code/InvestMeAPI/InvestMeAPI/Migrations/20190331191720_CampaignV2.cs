using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace InvestMeAPI.Migrations
{
    public partial class CampaignV2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Entrepreneurs");

            migrationBuilder.AlterColumn<string>(
                name: "Stage",
                table: "Campaigns",
                nullable: true,
                oldClrType: typeof(int));

            migrationBuilder.AlterColumn<string>(
                name: "Category",
                table: "Campaigns",
                nullable: true,
                oldClrType: typeof(int));

            migrationBuilder.AddColumn<decimal>(
                name: "Investment",
                table: "Campaigns",
                nullable: false,
                defaultValue: 0m);

            migrationBuilder.AddColumn<int>(
                name: "UserId",
                table: "Campaigns",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_Campaigns_UserId",
                table: "Campaigns",
                column: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_Entrepreneur_User",
                table: "Campaigns",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "UserId",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Entrepreneur_User",
                table: "Campaigns");

            migrationBuilder.DropIndex(
                name: "IX_Campaigns_UserId",
                table: "Campaigns");

            migrationBuilder.DropColumn(
                name: "Investment",
                table: "Campaigns");

            migrationBuilder.DropColumn(
                name: "UserId",
                table: "Campaigns");

            migrationBuilder.AlterColumn<int>(
                name: "Stage",
                table: "Campaigns",
                nullable: false,
                oldClrType: typeof(string),
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "Category",
                table: "Campaigns",
                nullable: false,
                oldClrType: typeof(string),
                oldNullable: true);

            migrationBuilder.CreateTable(
                name: "Entrepreneurs",
                columns: table => new
                {
                    EntrepreneurId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    CampaignId = table.Column<int>(nullable: false),
                    Investment = table.Column<decimal>(type: "decimal(18, 3)", nullable: false),
                    UserId = table.Column<int>(nullable: false)
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

            migrationBuilder.CreateIndex(
                name: "IX_Entrepreneurs_CampaignId",
                table: "Entrepreneurs",
                column: "CampaignId");

            migrationBuilder.CreateIndex(
                name: "IX_Entrepreneurs_UserId",
                table: "Entrepreneurs",
                column: "UserId");
        }
    }
}
