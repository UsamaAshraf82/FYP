using Microsoft.EntityFrameworkCore.Migrations;

namespace InvestMeAPI.Migrations
{
    public partial class LikesRemoved : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Likes",
                table: "Campaigns");

            migrationBuilder.AlterColumn<int>(
                name: "Views",
                table: "Campaigns",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<int>(
                name: "Views",
                table: "Campaigns",
                nullable: false,
                oldClrType: typeof(int),
                oldDefaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "Likes",
                table: "Campaigns",
                nullable: false,
                defaultValue: 0);
        }
    }
}
