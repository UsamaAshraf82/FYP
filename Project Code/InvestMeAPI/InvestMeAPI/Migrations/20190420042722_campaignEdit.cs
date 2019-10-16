using Microsoft.EntityFrameworkCore.Migrations;

namespace InvestMeAPI.Migrations
{
    public partial class campaignEdit : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Estimated",
                table: "Campaigns",
                newName: "NeedFundBefore");

            migrationBuilder.RenameColumn(
                name: "Duration",
                table: "Campaigns",
                newName: "EstimatedFirstProfit");

            migrationBuilder.AlterColumn<int>(
                name: "Views",
                table: "Campaigns",
                nullable: false,
                oldClrType: typeof(int),
                oldNullable: true,
                oldDefaultValueSql: "((0))");

            migrationBuilder.AlterColumn<int>(
                name: "Likes",
                table: "Campaigns",
                nullable: false,
                defaultValueSql: "((0))",
                oldClrType: typeof(int),
                oldNullable: true,
                oldDefaultValueSql: "((0))");

            migrationBuilder.AlterColumn<long>(
                name: "Investment",
                table: "Campaigns",
                type: "BIGINT",
                nullable: false,
                defaultValue: 0L,
                oldClrType: typeof(decimal));

            migrationBuilder.AlterColumn<long>(
                name: "Fund",
                table: "Campaigns",
                type: "BIGINT",
                nullable: true,
                oldClrType: typeof(decimal),
                oldType: "decimal(18, 3)",
                oldNullable: true);

            migrationBuilder.AddColumn<string>(
                name: "FundUnit",
                table: "Campaigns",
                nullable: true);

            migrationBuilder.AddColumn<long>(
                name: "TotalCost",
                table: "Campaigns",
                type: "BIGINT",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "TotalCostUnit",
                table: "Campaigns",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "FundUnit",
                table: "Campaigns");

            migrationBuilder.DropColumn(
                name: "TotalCost",
                table: "Campaigns");

            migrationBuilder.DropColumn(
                name: "TotalCostUnit",
                table: "Campaigns");

            migrationBuilder.RenameColumn(
                name: "NeedFundBefore",
                table: "Campaigns",
                newName: "Estimated");

            migrationBuilder.RenameColumn(
                name: "EstimatedFirstProfit",
                table: "Campaigns",
                newName: "Duration");

            migrationBuilder.AlterColumn<int>(
                name: "Views",
                table: "Campaigns",
                nullable: true,
                defaultValueSql: "((0))",
                oldClrType: typeof(int));

            migrationBuilder.AlterColumn<int>(
                name: "Likes",
                table: "Campaigns",
                nullable: true,
                defaultValueSql: "((0))",
                oldClrType: typeof(int),
                oldDefaultValueSql: "((0))");

            migrationBuilder.AlterColumn<decimal>(
                name: "Investment",
                table: "Campaigns",
                nullable: false,
                oldClrType: typeof(long),
                oldType: "BIGINT",
                oldDefaultValue: 0L);

            migrationBuilder.AlterColumn<decimal>(
                name: "Fund",
                table: "Campaigns",
                type: "decimal(18, 3)",
                nullable: true,
                oldClrType: typeof(long),
                oldType: "BIGINT",
                oldNullable: true);
        }
    }
}
