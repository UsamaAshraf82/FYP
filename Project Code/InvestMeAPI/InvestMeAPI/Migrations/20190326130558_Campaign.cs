using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using System;

namespace InvestMeAPI.Migrations
{
    public partial class Campaign : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_cat_ID_Capmaign",
                table: "Campaigns");

            migrationBuilder.DropForeignKey(
                name: "fkcity_Id",
                table: "Campaigns");

            migrationBuilder.DropForeignKey(
                name: "FK_stageId_campaign",
                table: "Campaigns");

            migrationBuilder.DropForeignKey(
                name: "FK_tagID_campaign",
                table: "Campaigns");

            migrationBuilder.DropForeignKey(
                name: "fk_city_Id",
                table: "Users");

            migrationBuilder.DropTable(
                name: "Cities");

            migrationBuilder.DropTable(
                name: "Stages");

            migrationBuilder.DropTable(
                name: "Tags");

            migrationBuilder.DropIndex(
                name: "IX_Users_CityId",
                table: "Users");

            migrationBuilder.DropIndex(
                name: "IX_Campaigns_CityId",
                table: "Campaigns");

            migrationBuilder.DropIndex(
                name: "IX_Campaigns_StageId",
                table: "Campaigns");

            migrationBuilder.DropIndex(
                name: "IX_Campaigns_TagId",
                table: "Campaigns");

            migrationBuilder.DropColumn(
                name: "CityId",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "CityId",
                table: "Campaigns");

            migrationBuilder.DropColumn(
                name: "Description",
                table: "Campaigns");

            migrationBuilder.RenameColumn(
                name: "TagId",
                table: "Campaigns",
                newName: "Stage");

            migrationBuilder.RenameColumn(
                name: "StageId",
                table: "Campaigns",
                newName: "Category");

            migrationBuilder.AddColumn<string>(
                name: "City",
                table: "Users",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Country",
                table: "Users",
                nullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "Title",
                table: "Campaigns",
                nullable: true,
                oldClrType: typeof(string),
                oldUnicode: false,
                oldMaxLength: 50,
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "CategoryId",
                table: "Campaigns",
                nullable: true,
                oldClrType: typeof(int));

            migrationBuilder.AddColumn<string>(
                name: "City",
                table: "Campaigns",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Country",
                table: "Campaigns",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Discription",
                table: "Campaigns",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "Estimated",
                table: "Campaigns",
                type: "date",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Headerimage",
                table: "Campaigns",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Summary",
                table: "Campaigns",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Tag1",
                table: "Campaigns",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Tag2",
                table: "Campaigns",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Tag3",
                table: "Campaigns",
                nullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Campaigns_Categories_CategoryId",
                table: "Campaigns",
                column: "CategoryId",
                principalTable: "Categories",
                principalColumn: "CategoryId",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Campaigns_Categories_CategoryId",
                table: "Campaigns");

            migrationBuilder.DropColumn(
                name: "City",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "Country",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "City",
                table: "Campaigns");

            migrationBuilder.DropColumn(
                name: "Country",
                table: "Campaigns");

            migrationBuilder.DropColumn(
                name: "Discription",
                table: "Campaigns");

            migrationBuilder.DropColumn(
                name: "Estimated",
                table: "Campaigns");

            migrationBuilder.DropColumn(
                name: "Headerimage",
                table: "Campaigns");

            migrationBuilder.DropColumn(
                name: "Summary",
                table: "Campaigns");

            migrationBuilder.DropColumn(
                name: "Tag1",
                table: "Campaigns");

            migrationBuilder.DropColumn(
                name: "Tag2",
                table: "Campaigns");

            migrationBuilder.DropColumn(
                name: "Tag3",
                table: "Campaigns");

            migrationBuilder.RenameColumn(
                name: "Stage",
                table: "Campaigns",
                newName: "TagId");

            migrationBuilder.RenameColumn(
                name: "Category",
                table: "Campaigns",
                newName: "StageId");

            migrationBuilder.AddColumn<int>(
                name: "CityId",
                table: "Users",
                nullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "Title",
                table: "Campaigns",
                unicode: false,
                maxLength: 50,
                nullable: true,
                oldClrType: typeof(string),
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "CategoryId",
                table: "Campaigns",
                nullable: false,
                oldClrType: typeof(int),
                oldNullable: true);

            migrationBuilder.AddColumn<int>(
                name: "CityId",
                table: "Campaigns",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<string>(
                name: "Description",
                table: "Campaigns",
                unicode: false,
                nullable: true);

            migrationBuilder.CreateTable(
                name: "Cities",
                columns: table => new
                {
                    CityId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Country = table.Column<string>(unicode: false, maxLength: 20, nullable: true),
                    Name = table.Column<string>(unicode: false, maxLength: 20, nullable: true),
                    State = table.Column<string>(unicode: false, maxLength: 50, nullable: true)
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
                    Description = table.Column<string>(unicode: false, nullable: true),
                    Name = table.Column<string>(unicode: false, maxLength: 20, nullable: false)
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
                    Description = table.Column<string>(unicode: false, nullable: true),
                    Name = table.Column<string>(unicode: false, maxLength: 20, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Tags", x => x.TagId);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Users_CityId",
                table: "Users",
                column: "CityId");

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

            migrationBuilder.AddForeignKey(
                name: "FK_cat_ID_Capmaign",
                table: "Campaigns",
                column: "CategoryId",
                principalTable: "Categories",
                principalColumn: "CategoryId",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "fkcity_Id",
                table: "Campaigns",
                column: "CityId",
                principalTable: "Cities",
                principalColumn: "CityId",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_stageId_campaign",
                table: "Campaigns",
                column: "StageId",
                principalTable: "Stages",
                principalColumn: "StageId",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_tagID_campaign",
                table: "Campaigns",
                column: "TagId",
                principalTable: "Tags",
                principalColumn: "TagId",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "fk_city_Id",
                table: "Users",
                column: "CityId",
                principalTable: "Cities",
                principalColumn: "CityId",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
