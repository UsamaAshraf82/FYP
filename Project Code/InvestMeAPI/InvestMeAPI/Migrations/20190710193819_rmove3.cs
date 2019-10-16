using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace InvestMeAPI.Migrations
{
    public partial class rmove3 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Return_campaign",
                table: "Returns");

            migrationBuilder.DropForeignKey(
                name: "FK_Returns_Users_UserId",
                table: "Returns");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Returns",
                table: "Returns");

            migrationBuilder.RenameTable(
                name: "Returns",
                newName: "Return");

            migrationBuilder.RenameIndex(
                name: "IX_Returns_UserId",
                table: "Return",
                newName: "IX_Return_UserId");

            migrationBuilder.RenameIndex(
                name: "IX_Returns_CampaignId",
                table: "Return",
                newName: "IX_Return_CampaignId");

            migrationBuilder.AlterColumn<long>(
                name: "ReturnInvestment",
                table: "Return",
                nullable: false,
                oldClrType: typeof(long),
                oldType: "BIGINT",
                oldDefaultValue: 0L);

            migrationBuilder.AlterColumn<DateTime>(
                name: "AddedDateTime",
                table: "Return",
                nullable: false,
                oldClrType: typeof(DateTime),
                oldType: "datetime",
                oldDefaultValueSql: "CURRENT_TIMESTAMP");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Return",
                table: "Return",
                column: "ReturnID");

            migrationBuilder.UpdateData(
                table: "Admins",
                keyColumn: "AdminId",
                keyValue: 1,
                columns: new[] { "PasswordHash", "PasswordSalt" },
                values: new object[] { new byte[] { 141, 109, 182, 175, 244, 182, 66, 22, 230, 227, 255, 47, 171, 225, 116, 240, 252, 254, 8, 226, 225, 59, 168, 0, 130, 99, 109, 255, 22, 40, 55, 229, 191, 43, 239, 83, 164, 53, 236, 150, 33, 189, 112, 233, 29, 71, 40, 51, 133, 209, 43, 110, 215, 216, 67, 226, 71, 61, 244, 45, 188, 159, 215, 169 }, new byte[] { 6, 170, 42, 154, 84, 149, 40, 80, 206, 148, 19, 223, 108, 64, 66, 157, 69, 89, 180, 231, 138, 57, 188, 150, 233, 165, 91, 175, 252, 99, 157, 75, 45, 14, 102, 247, 180, 204, 138, 64, 102, 146, 45, 171, 55, 31, 69, 136, 244, 175, 235, 223, 92, 231, 18, 36, 241, 193, 68, 65, 173, 158, 238, 122, 252, 131, 60, 105, 75, 192, 133, 38, 125, 153, 9, 107, 12, 255, 139, 8, 5, 183, 182, 59, 152, 69, 23, 177, 166, 81, 248, 33, 227, 240, 33, 54, 115, 17, 203, 162, 48, 214, 62, 170, 133, 147, 232, 114, 5, 129, 248, 222, 28, 199, 102, 210, 147, 49, 204, 244, 194, 182, 231, 54, 207, 105, 104, 75 } });

            migrationBuilder.AddForeignKey(
                name: "FK_Return_Campaigns_CampaignId",
                table: "Return",
                column: "CampaignId",
                principalTable: "Campaigns",
                principalColumn: "CampaignId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Return_Users_UserId",
                table: "Return",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "UserId",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Return_Campaigns_CampaignId",
                table: "Return");

            migrationBuilder.DropForeignKey(
                name: "FK_Return_Users_UserId",
                table: "Return");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Return",
                table: "Return");

            migrationBuilder.RenameTable(
                name: "Return",
                newName: "Returns");

            migrationBuilder.RenameIndex(
                name: "IX_Return_UserId",
                table: "Returns",
                newName: "IX_Returns_UserId");

            migrationBuilder.RenameIndex(
                name: "IX_Return_CampaignId",
                table: "Returns",
                newName: "IX_Returns_CampaignId");

            migrationBuilder.AlterColumn<long>(
                name: "ReturnInvestment",
                table: "Returns",
                type: "BIGINT",
                nullable: false,
                defaultValue: 0L,
                oldClrType: typeof(long));

            migrationBuilder.AlterColumn<DateTime>(
                name: "AddedDateTime",
                table: "Returns",
                type: "datetime",
                nullable: false,
                defaultValueSql: "CURRENT_TIMESTAMP",
                oldClrType: typeof(DateTime));

            migrationBuilder.AddPrimaryKey(
                name: "PK_Returns",
                table: "Returns",
                column: "ReturnID");

            migrationBuilder.UpdateData(
                table: "Admins",
                keyColumn: "AdminId",
                keyValue: 1,
                columns: new[] { "PasswordHash", "PasswordSalt" },
                values: new object[] { new byte[] { 222, 21, 34, 124, 109, 254, 16, 91, 12, 1, 92, 31, 78, 148, 74, 137, 156, 193, 92, 7, 34, 216, 85, 163, 201, 253, 96, 124, 63, 175, 76, 156, 190, 90, 153, 234, 165, 167, 212, 52, 126, 125, 52, 70, 46, 39, 42, 55, 113, 173, 242, 76, 5, 155, 90, 53, 235, 198, 145, 106, 240, 108, 141, 25 }, new byte[] { 115, 76, 17, 24, 38, 124, 172, 97, 80, 52, 176, 112, 70, 95, 114, 247, 194, 87, 55, 170, 211, 17, 12, 47, 228, 63, 95, 240, 35, 175, 144, 108, 41, 206, 130, 177, 1, 176, 55, 6, 203, 71, 141, 15, 172, 113, 100, 50, 63, 40, 237, 200, 196, 168, 200, 43, 162, 237, 235, 170, 18, 81, 202, 8, 235, 231, 147, 134, 50, 140, 6, 174, 152, 162, 168, 187, 142, 244, 69, 158, 91, 165, 84, 242, 173, 75, 183, 198, 32, 101, 45, 204, 176, 179, 138, 90, 117, 120, 195, 103, 40, 245, 188, 36, 202, 63, 69, 159, 84, 54, 165, 232, 56, 27, 191, 53, 25, 77, 123, 160, 188, 37, 205, 2, 159, 166, 179, 164 } });

            migrationBuilder.AddForeignKey(
                name: "FK_Return_campaign",
                table: "Returns",
                column: "CampaignId",
                principalTable: "Campaigns",
                principalColumn: "CampaignId",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Returns_Users_UserId",
                table: "Returns",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "UserId",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
