using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace InvestMeAPI.Migrations
{
    public partial class returnv4 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
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
                values: new object[] { new byte[] { 213, 11, 216, 242, 204, 176, 133, 138, 180, 228, 12, 186, 148, 135, 76, 39, 153, 233, 158, 58, 226, 223, 238, 8, 19, 142, 145, 196, 120, 1, 171, 149, 225, 181, 36, 211, 178, 194, 79, 84, 87, 109, 224, 11, 47, 28, 43, 238, 152, 77, 56, 116, 43, 37, 190, 100, 229, 218, 226, 227, 101, 68, 227, 86 }, new byte[] { 64, 45, 180, 136, 75, 103, 132, 130, 42, 37, 45, 109, 159, 125, 192, 88, 195, 185, 80, 214, 122, 246, 66, 193, 56, 140, 111, 84, 64, 3, 30, 1, 76, 245, 167, 39, 200, 19, 231, 1, 212, 45, 117, 124, 91, 15, 136, 222, 253, 141, 16, 142, 214, 126, 251, 79, 88, 199, 86, 45, 157, 1, 209, 178, 27, 60, 75, 172, 117, 19, 196, 255, 249, 181, 229, 15, 175, 205, 249, 209, 98, 169, 69, 220, 111, 89, 34, 212, 29, 184, 19, 39, 237, 120, 222, 15, 237, 153, 163, 88, 81, 152, 17, 15, 170, 177, 234, 18, 225, 104, 147, 203, 132, 100, 94, 153, 27, 146, 52, 51, 49, 219, 182, 174, 71, 121, 28, 120 } });

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

        protected override void Down(MigrationBuilder migrationBuilder)
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
    }
}
