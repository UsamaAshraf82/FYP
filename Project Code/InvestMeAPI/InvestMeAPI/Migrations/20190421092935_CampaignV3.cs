using Microsoft.EntityFrameworkCore.Migrations;

namespace InvestMeAPI.Migrations
{
    public partial class CampaignV3 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "FundUnit",
                table: "Campaigns");

            migrationBuilder.DropColumn(
                name: "TotalCostUnit",
                table: "Campaigns");

            migrationBuilder.AddColumn<string>(
                name: "CurrencyUnit",
                table: "Campaigns",
                nullable: true,
                defaultValue: "PKR");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CurrencyUnit",
                table: "Campaigns");

            migrationBuilder.AddColumn<string>(
                name: "FundUnit",
                table: "Campaigns",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "TotalCostUnit",
                table: "Campaigns",
                nullable: true);
        }
    }
}
