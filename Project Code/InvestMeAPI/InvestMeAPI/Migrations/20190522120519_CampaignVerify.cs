using Microsoft.EntityFrameworkCore.Migrations;

namespace InvestMeAPI.Migrations
{
    public partial class CampaignVerify : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "AdminComment",
                table: "Campaigns",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "IsVarified",
                table: "Campaigns",
                nullable: true,
                defaultValue: "PENDING");

            migrationBuilder.UpdateData(
                table: "Admins",
                keyColumn: "AdminId",
                keyValue: 1,
                columns: new[] { "PasswordHash", "PasswordSalt" },
                values: new object[] { new byte[] { 38, 184, 236, 12, 31, 6, 173, 249, 125, 215, 20, 38, 162, 114, 161, 167, 17, 147, 41, 2, 187, 200, 122, 131, 56, 91, 71, 139, 112, 153, 13, 97, 160, 166, 104, 10, 57, 152, 203, 205, 128, 194, 190, 191, 88, 132, 202, 196, 33, 157, 177, 220, 235, 121, 105, 68, 80, 178, 23, 187, 30, 124, 63, 226 }, new byte[] { 38, 147, 208, 212, 244, 1, 166, 113, 67, 228, 168, 206, 29, 36, 156, 231, 138, 184, 78, 30, 236, 199, 214, 172, 253, 60, 237, 222, 86, 6, 146, 233, 148, 120, 252, 69, 103, 171, 160, 97, 196, 155, 22, 84, 134, 196, 225, 43, 150, 184, 9, 17, 167, 156, 153, 254, 72, 106, 185, 155, 123, 84, 105, 196, 172, 225, 117, 196, 122, 85, 0, 77, 32, 190, 241, 200, 144, 107, 192, 36, 36, 39, 100, 161, 201, 170, 124, 177, 121, 15, 247, 230, 10, 243, 222, 235, 94, 240, 81, 187, 139, 173, 255, 173, 162, 226, 169, 147, 93, 242, 124, 80, 227, 1, 185, 245, 96, 89, 130, 78, 214, 131, 33, 86, 195, 28, 212, 175 } });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "AdminComment",
                table: "Campaigns");

            migrationBuilder.DropColumn(
                name: "IsVarified",
                table: "Campaigns");

            migrationBuilder.UpdateData(
                table: "Admins",
                keyColumn: "AdminId",
                keyValue: 1,
                columns: new[] { "PasswordHash", "PasswordSalt" },
                values: new object[] { new byte[] { 253, 69, 90, 42, 58, 221, 160, 190, 166, 120, 13, 82, 25, 108, 44, 116, 58, 204, 204, 190, 58, 161, 124, 172, 109, 62, 116, 142, 73, 255, 32, 67, 11, 163, 228, 229, 114, 32, 247, 2, 88, 33, 39, 73, 120, 7, 59, 12, 249, 153, 80, 118, 140, 121, 192, 4, 188, 38, 50, 100, 73, 130, 21, 185 }, new byte[] { 77, 243, 14, 6, 251, 178, 54, 81, 2, 203, 216, 229, 161, 187, 102, 90, 56, 204, 151, 182, 45, 133, 230, 68, 97, 137, 144, 105, 81, 78, 247, 32, 184, 14, 80, 117, 155, 131, 203, 151, 174, 74, 59, 101, 54, 32, 164, 67, 43, 65, 42, 99, 75, 47, 14, 81, 96, 81, 5, 103, 249, 176, 164, 53, 41, 227, 31, 154, 181, 81, 218, 42, 130, 57, 162, 30, 139, 100, 173, 234, 190, 189, 195, 251, 182, 27, 244, 243, 244, 234, 142, 169, 200, 11, 207, 39, 5, 244, 187, 119, 5, 64, 164, 38, 73, 51, 94, 164, 66, 33, 250, 118, 232, 193, 221, 170, 222, 130, 195, 27, 128, 203, 168, 108, 37, 49, 242, 102 } });
        }
    }
}
