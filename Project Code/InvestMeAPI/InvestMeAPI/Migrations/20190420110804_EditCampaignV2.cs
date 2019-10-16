using Microsoft.EntityFrameworkCore.Migrations;
using System;

namespace InvestMeAPI.Migrations
{
    public partial class EditCampaignV2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<int>(
                name: "Likes",
                table: "Campaigns",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldDefaultValueSql: "((0))");

            migrationBuilder.AddColumn<DateTime>(
                name: "AddedDateTime",
                table: "Campaigns",
                type: "datetime",
                nullable: false,
                defaultValueSql: "CURRENT_TIMESTAMP");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "AddedDateTime",
                table: "Campaigns");

            migrationBuilder.AlterColumn<int>(
                name: "Likes",
                table: "Campaigns",
                nullable: false,
                defaultValueSql: "((0))",
                oldClrType: typeof(int),
                oldDefaultValue: 0);
        }
    }
}
