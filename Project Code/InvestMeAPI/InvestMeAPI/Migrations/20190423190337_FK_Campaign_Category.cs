using Microsoft.EntityFrameworkCore.Migrations;

namespace InvestMeAPI.Migrations
{
    public partial class FK_Campaign_Category : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Campaigns_Categories_CategoryId",
                table: "Campaigns");

            migrationBuilder.DropForeignKey(
                name: "FK_Entrepreneur_User",
                table: "Campaigns");

            migrationBuilder.DropColumn(
                name: "Category",
                table: "Campaigns");

            migrationBuilder.RenameColumn(
                name: "CategoryId",
                table: "Campaigns",
                newName: "CategoryID");

            migrationBuilder.RenameIndex(
                name: "IX_Campaigns_CategoryId",
                table: "Campaigns",
                newName: "IX_Campaigns_CategoryID");

            migrationBuilder.AddForeignKey(
                name: "FK_Campaign_Category",
                table: "Campaigns",
                column: "CategoryID",
                principalTable: "Categories",
                principalColumn: "CategoryId",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Campaign_User",
                table: "Campaigns",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "UserId",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Campaign_Category",
                table: "Campaigns");

            migrationBuilder.DropForeignKey(
                name: "FK_Campaign_User",
                table: "Campaigns");

            migrationBuilder.RenameColumn(
                name: "CategoryID",
                table: "Campaigns",
                newName: "CategoryId");

            migrationBuilder.RenameIndex(
                name: "IX_Campaigns_CategoryID",
                table: "Campaigns",
                newName: "IX_Campaigns_CategoryId");

            migrationBuilder.AddColumn<string>(
                name: "Category",
                table: "Campaigns",
                nullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Campaigns_Categories_CategoryId",
                table: "Campaigns",
                column: "CategoryId",
                principalTable: "Categories",
                principalColumn: "CategoryId",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Entrepreneur_User",
                table: "Campaigns",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "UserId",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
