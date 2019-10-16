using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace InvestMeAPI.Migrations
{
    public partial class vvvv : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Return_User",
                table: "Returns");

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

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Returns_Users_UserId",
                table: "Returns");

            migrationBuilder.UpdateData(
                table: "Admins",
                keyColumn: "AdminId",
                keyValue: 1,
                columns: new[] { "PasswordHash", "PasswordSalt" },
                values: new object[] { new byte[] { 244, 74, 138, 119, 8, 185, 239, 123, 5, 28, 94, 191, 252, 211, 187, 223, 242, 14, 84, 54, 127, 228, 185, 142, 96, 105, 195, 251, 23, 235, 147, 217, 121, 225, 226, 24, 124, 99, 245, 157, 84, 234, 143, 230, 76, 144, 50, 117, 193, 30, 79, 49, 90, 204, 114, 22, 107, 16, 58, 7, 136, 216, 222, 248 }, new byte[] { 131, 28, 250, 134, 20, 159, 246, 124, 84, 81, 84, 32, 171, 118, 158, 188, 57, 164, 47, 123, 122, 163, 110, 145, 227, 50, 181, 224, 47, 20, 184, 22, 205, 103, 67, 79, 244, 67, 51, 109, 73, 177, 96, 171, 83, 5, 204, 102, 14, 7, 40, 104, 163, 188, 133, 154, 207, 6, 19, 116, 221, 88, 171, 90, 118, 95, 151, 90, 120, 84, 239, 248, 243, 156, 198, 247, 18, 80, 166, 243, 187, 39, 29, 237, 137, 138, 20, 144, 170, 185, 122, 203, 251, 120, 178, 227, 170, 191, 25, 27, 64, 211, 51, 164, 91, 132, 99, 242, 164, 156, 129, 192, 146, 135, 114, 80, 157, 84, 7, 11, 98, 84, 205, 248, 219, 230, 249, 25 } });

            migrationBuilder.AddForeignKey(
                name: "FK_Return_User",
                table: "Returns",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "UserId",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
