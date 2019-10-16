using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace InvestMeAPI.Migrations
{
    public partial class retrnv3 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Returns_Users_UserId",
                table: "Returns");

            migrationBuilder.AlterColumn<int>(
                name: "UserId",
                table: "Returns",
                nullable: true,
                oldClrType: typeof(int));

            migrationBuilder.UpdateData(
                table: "Admins",
                keyColumn: "AdminId",
                keyValue: 1,
                columns: new[] { "PasswordHash", "PasswordSalt" },
                values: new object[] { new byte[] { 222, 21, 34, 124, 109, 254, 16, 91, 12, 1, 92, 31, 78, 148, 74, 137, 156, 193, 92, 7, 34, 216, 85, 163, 201, 253, 96, 124, 63, 175, 76, 156, 190, 90, 153, 234, 165, 167, 212, 52, 126, 125, 52, 70, 46, 39, 42, 55, 113, 173, 242, 76, 5, 155, 90, 53, 235, 198, 145, 106, 240, 108, 141, 25 }, new byte[] { 115, 76, 17, 24, 38, 124, 172, 97, 80, 52, 176, 112, 70, 95, 114, 247, 194, 87, 55, 170, 211, 17, 12, 47, 228, 63, 95, 240, 35, 175, 144, 108, 41, 206, 130, 177, 1, 176, 55, 6, 203, 71, 141, 15, 172, 113, 100, 50, 63, 40, 237, 200, 196, 168, 200, 43, 162, 237, 235, 170, 18, 81, 202, 8, 235, 231, 147, 134, 50, 140, 6, 174, 152, 162, 168, 187, 142, 244, 69, 158, 91, 165, 84, 242, 173, 75, 183, 198, 32, 101, 45, 204, 176, 179, 138, 90, 117, 120, 195, 103, 40, 245, 188, 36, 202, 63, 69, 159, 84, 54, 165, 232, 56, 27, 191, 53, 25, 77, 123, 160, 188, 37, 205, 2, 159, 166, 179, 164 } });

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
                name: "FK_Returns_Users_UserId",
                table: "Returns");

            migrationBuilder.AlterColumn<int>(
                name: "UserId",
                table: "Returns",
                nullable: false,
                oldClrType: typeof(int),
                oldNullable: true);

            migrationBuilder.UpdateData(
                table: "Admins",
                keyColumn: "AdminId",
                keyValue: 1,
                columns: new[] { "PasswordHash", "PasswordSalt" },
                values: new object[] { new byte[] { 243, 60, 154, 47, 228, 74, 199, 61, 245, 76, 76, 56, 6, 21, 159, 180, 20, 207, 122, 227, 162, 189, 169, 134, 125, 18, 240, 63, 23, 59, 151, 207, 18, 106, 172, 174, 78, 75, 130, 221, 167, 5, 65, 68, 246, 252, 167, 50, 244, 155, 52, 202, 116, 255, 25, 105, 144, 59, 215, 20, 35, 133, 25, 172 }, new byte[] { 15, 240, 20, 63, 127, 224, 45, 19, 45, 185, 93, 59, 130, 147, 44, 76, 92, 96, 57, 44, 232, 125, 1, 209, 64, 229, 233, 231, 34, 125, 59, 17, 74, 115, 73, 224, 83, 124, 45, 157, 112, 114, 80, 227, 146, 222, 172, 136, 182, 187, 248, 166, 164, 143, 146, 232, 202, 225, 24, 178, 215, 122, 241, 225, 76, 73, 139, 58, 5, 213, 89, 95, 217, 133, 200, 214, 221, 147, 65, 247, 14, 253, 197, 49, 105, 199, 248, 195, 164, 75, 239, 246, 4, 209, 70, 151, 210, 157, 123, 229, 195, 135, 156, 63, 191, 180, 230, 130, 79, 102, 242, 197, 16, 205, 78, 47, 17, 203, 125, 162, 215, 41, 32, 148, 191, 100, 84, 91 } });

            migrationBuilder.AddForeignKey(
                name: "FK_Returns_Users_UserId",
                table: "Returns",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "UserId",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
