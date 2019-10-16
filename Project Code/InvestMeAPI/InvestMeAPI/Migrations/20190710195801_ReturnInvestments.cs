using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace InvestMeAPI.Migrations
{
    public partial class ReturnInvestments : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "ReturnID",
                table: "Returns",
                newName: "ReturnInvestmentsID");

            migrationBuilder.UpdateData(
                table: "Admins",
                keyColumn: "AdminId",
                keyValue: 1,
                columns: new[] { "PasswordHash", "PasswordSalt" },
                values: new object[] { new byte[] { 249, 50, 11, 44, 91, 36, 241, 171, 195, 27, 85, 36, 187, 39, 115, 176, 222, 223, 21, 59, 102, 122, 155, 180, 226, 49, 158, 252, 236, 203, 92, 20, 176, 236, 21, 38, 250, 202, 19, 198, 90, 178, 18, 16, 249, 13, 96, 13, 110, 67, 16, 169, 57, 144, 110, 136, 99, 101, 109, 232, 183, 225, 231, 24 }, new byte[] { 161, 107, 225, 152, 32, 32, 0, 73, 19, 166, 67, 132, 122, 43, 217, 7, 62, 223, 56, 171, 151, 5, 37, 110, 180, 24, 233, 13, 9, 86, 1, 42, 23, 57, 185, 214, 206, 157, 6, 103, 47, 24, 125, 44, 243, 53, 234, 127, 231, 72, 137, 95, 12, 191, 192, 23, 118, 71, 190, 112, 121, 9, 44, 183, 173, 101, 96, 2, 56, 74, 172, 38, 36, 128, 183, 171, 2, 114, 164, 5, 242, 159, 211, 253, 105, 23, 109, 121, 99, 56, 142, 211, 21, 83, 81, 15, 34, 150, 126, 205, 17, 34, 229, 108, 12, 157, 119, 29, 253, 15, 214, 117, 199, 211, 100, 249, 178, 95, 194, 191, 44, 27, 78, 202, 227, 250, 141, 32 } });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "ReturnInvestmentsID",
                table: "Returns",
                newName: "ReturnID");

            migrationBuilder.UpdateData(
                table: "Admins",
                keyColumn: "AdminId",
                keyValue: 1,
                columns: new[] { "PasswordHash", "PasswordSalt" },
                values: new object[] { new byte[] { 213, 11, 216, 242, 204, 176, 133, 138, 180, 228, 12, 186, 148, 135, 76, 39, 153, 233, 158, 58, 226, 223, 238, 8, 19, 142, 145, 196, 120, 1, 171, 149, 225, 181, 36, 211, 178, 194, 79, 84, 87, 109, 224, 11, 47, 28, 43, 238, 152, 77, 56, 116, 43, 37, 190, 100, 229, 218, 226, 227, 101, 68, 227, 86 }, new byte[] { 64, 45, 180, 136, 75, 103, 132, 130, 42, 37, 45, 109, 159, 125, 192, 88, 195, 185, 80, 214, 122, 246, 66, 193, 56, 140, 111, 84, 64, 3, 30, 1, 76, 245, 167, 39, 200, 19, 231, 1, 212, 45, 117, 124, 91, 15, 136, 222, 253, 141, 16, 142, 214, 126, 251, 79, 88, 199, 86, 45, 157, 1, 209, 178, 27, 60, 75, 172, 117, 19, 196, 255, 249, 181, 229, 15, 175, 205, 249, 209, 98, 169, 69, 220, 111, 89, 34, 212, 29, 184, 19, 39, 237, 120, 222, 15, 237, 153, 163, 88, 81, 152, 17, 15, 170, 177, 234, 18, 225, 104, 147, 203, 132, 100, 94, 153, 27, 146, 52, 51, 49, 219, 182, 174, 71, 121, 28, 120 } });
        }
    }
}
