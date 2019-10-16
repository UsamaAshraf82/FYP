using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using System;

namespace InvestMeAPI.Migrations
{
    public partial class @return : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Returns",
                columns: table => new
                {
                    ReturnID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    CampaignId = table.Column<int>(nullable: false),
                    UserId = table.Column<int>(nullable: false),
                    ReturnInvestment = table.Column<long>(type: "BIGINT", nullable: false, defaultValue: 0L),
                    AddedDateTime = table.Column<DateTime>(type: "datetime", nullable: false, defaultValueSql: "CURRENT_TIMESTAMP")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Returns", x => x.ReturnID);
                    table.ForeignKey(
                        name: "FK_Return_campaign",
                        column: x => x.CampaignId,
                        principalTable: "Campaigns",
                        principalColumn: "CampaignId",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Return_User",
                        column: x => x.UserId,
                        principalTable: "Users",
                        principalColumn: "UserId",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.UpdateData(
                table: "Admins",
                keyColumn: "AdminId",
                keyValue: 1,
                columns: new[] { "PasswordHash", "PasswordSalt" },
                values: new object[] { new byte[] { 244, 74, 138, 119, 8, 185, 239, 123, 5, 28, 94, 191, 252, 211, 187, 223, 242, 14, 84, 54, 127, 228, 185, 142, 96, 105, 195, 251, 23, 235, 147, 217, 121, 225, 226, 24, 124, 99, 245, 157, 84, 234, 143, 230, 76, 144, 50, 117, 193, 30, 79, 49, 90, 204, 114, 22, 107, 16, 58, 7, 136, 216, 222, 248 }, new byte[] { 131, 28, 250, 134, 20, 159, 246, 124, 84, 81, 84, 32, 171, 118, 158, 188, 57, 164, 47, 123, 122, 163, 110, 145, 227, 50, 181, 224, 47, 20, 184, 22, 205, 103, 67, 79, 244, 67, 51, 109, 73, 177, 96, 171, 83, 5, 204, 102, 14, 7, 40, 104, 163, 188, 133, 154, 207, 6, 19, 116, 221, 88, 171, 90, 118, 95, 151, 90, 120, 84, 239, 248, 243, 156, 198, 247, 18, 80, 166, 243, 187, 39, 29, 237, 137, 138, 20, 144, 170, 185, 122, 203, 251, 120, 178, 227, 170, 191, 25, 27, 64, 211, 51, 164, 91, 132, 99, 242, 164, 156, 129, 192, 146, 135, 114, 80, 157, 84, 7, 11, 98, 84, 205, 248, 219, 230, 249, 25 } });

            migrationBuilder.CreateIndex(
                name: "IX_Returns_CampaignId",
                table: "Returns",
                column: "CampaignId");

            migrationBuilder.CreateIndex(
                name: "IX_Returns_UserId",
                table: "Returns",
                column: "UserId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Returns");

            migrationBuilder.UpdateData(
                table: "Admins",
                keyColumn: "AdminId",
                keyValue: 1,
                columns: new[] { "PasswordHash", "PasswordSalt" },
                values: new object[] { new byte[] { 215, 241, 83, 123, 112, 208, 4, 2, 218, 99, 179, 93, 99, 66, 172, 192, 134, 48, 62, 81, 242, 163, 165, 49, 53, 236, 222, 20, 43, 30, 228, 182, 32, 140, 199, 111, 165, 209, 100, 236, 255, 78, 109, 31, 4, 233, 129, 196, 120, 154, 37, 144, 19, 221, 229, 172, 3, 244, 208, 178, 199, 184, 76, 181 }, new byte[] { 72, 31, 213, 122, 73, 158, 73, 205, 217, 194, 94, 143, 178, 36, 240, 202, 99, 44, 28, 67, 128, 191, 255, 79, 89, 231, 155, 129, 173, 229, 64, 100, 94, 50, 73, 202, 10, 176, 180, 79, 37, 124, 84, 154, 146, 164, 134, 180, 35, 246, 76, 202, 41, 169, 151, 232, 36, 106, 60, 114, 70, 202, 184, 176, 158, 17, 19, 64, 92, 215, 234, 56, 202, 233, 63, 4, 202, 54, 20, 104, 12, 102, 76, 86, 14, 220, 109, 136, 252, 153, 240, 5, 83, 111, 72, 175, 230, 97, 192, 52, 3, 17, 252, 105, 30, 51, 183, 54, 214, 163, 28, 54, 52, 116, 3, 163, 93, 146, 193, 86, 210, 146, 163, 190, 102, 97, 62, 96 } });
        }
    }
}
