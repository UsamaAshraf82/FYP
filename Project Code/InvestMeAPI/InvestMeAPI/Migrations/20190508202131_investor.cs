using Microsoft.EntityFrameworkCore.Migrations;
using System;

namespace InvestMeAPI.Migrations
{
    public partial class investor : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<long>(
                name: "Investment",
                table: "Investers",
                type: "BIGINT",
                nullable: false,
                defaultValue: 0L,
                oldClrType: typeof(decimal),
                oldType: "decimal(18, 3)");

            migrationBuilder.AddColumn<DateTime>(
                name: "AddedDateTime",
                table: "Investers",
                type: "datetime",
                nullable: false,
                defaultValueSql: "CURRENT_TIMESTAMP");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "AddedDateTime",
                table: "Investers");

            migrationBuilder.AlterColumn<decimal>(
                name: "Investment",
                table: "Investers",
                type: "decimal(18, 3)",
                nullable: false,
                oldClrType: typeof(long),
                oldType: "BIGINT",
                oldDefaultValue: 0L);
        }
    }
}
