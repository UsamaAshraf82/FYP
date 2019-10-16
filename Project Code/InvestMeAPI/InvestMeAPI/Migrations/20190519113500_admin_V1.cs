using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using System;

namespace InvestMeAPI.Migrations
{
    public partial class admin_V1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Admins",
                columns: table => new
                {
                    AdminId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Name = table.Column<string>(nullable: false),
                    Username = table.Column<string>(nullable: false),
                    PasswordHash = table.Column<byte[]>(nullable: false),
                    PasswordSalt = table.Column<byte[]>(nullable: false),
                    LastAccess = table.Column<DateTime>(type: "datetime", nullable: false, defaultValueSql: "CURRENT_TIMESTAMP")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Admins", x => x.AdminId);
                });

            migrationBuilder.InsertData(
                table: "Admins",
                columns: new[] { "AdminId", "Name", "PasswordHash", "PasswordSalt", "Username" },
                values: new object[] { 1, "Admin", new byte[] { 253, 69, 90, 42, 58, 221, 160, 190, 166, 120, 13, 82, 25, 108, 44, 116, 58, 204, 204, 190, 58, 161, 124, 172, 109, 62, 116, 142, 73, 255, 32, 67, 11, 163, 228, 229, 114, 32, 247, 2, 88, 33, 39, 73, 120, 7, 59, 12, 249, 153, 80, 118, 140, 121, 192, 4, 188, 38, 50, 100, 73, 130, 21, 185 }, new byte[] { 77, 243, 14, 6, 251, 178, 54, 81, 2, 203, 216, 229, 161, 187, 102, 90, 56, 204, 151, 182, 45, 133, 230, 68, 97, 137, 144, 105, 81, 78, 247, 32, 184, 14, 80, 117, 155, 131, 203, 151, 174, 74, 59, 101, 54, 32, 164, 67, 43, 65, 42, 99, 75, 47, 14, 81, 96, 81, 5, 103, 249, 176, 164, 53, 41, 227, 31, 154, 181, 81, 218, 42, 130, 57, 162, 30, 139, 100, 173, 234, 190, 189, 195, 251, 182, 27, 244, 243, 244, 234, 142, 169, 200, 11, 207, 39, 5, 244, 187, 119, 5, 64, 164, 38, 73, 51, 94, 164, 66, 33, 250, 118, 232, 193, 221, 170, 222, 130, 195, 27, 128, 203, 168, 108, 37, 49, 242, 102 }, "admin" });

            migrationBuilder.CreateIndex(
                name: "IX_Admins_Username",
                table: "Admins",
                column: "Username",
                unique: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Admins");
        }
    }
}
