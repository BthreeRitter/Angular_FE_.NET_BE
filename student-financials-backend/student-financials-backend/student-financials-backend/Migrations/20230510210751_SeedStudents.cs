using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace student_financials_backend.Migrations
{
    /// <inheritdoc />
    public partial class SeedStudents : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Students",
                columns: new[] { "Id", "Balance", "Fees", "FinancialAid", "Name", "Scholarships", "Tuition" },
                values: new object[,]
                {
                    { 1, 2000.00m, 500.00m, 5000.00m, "Alice Smith", 2000.00m, 10000.00m },
                    { 2, 2500.00m, 550.00m, 4000.00m, "Bob Johnson", 1500.00m, 11000.00m },
                    { 3, 3000.00m, 600.00m, 3500.00m, "Charlie Brown", 1000.00m, 12000.00m },
                    { 4, 1800.00m, 450.00m, 5500.00m, "David Lee", 3000.00m, 9500.00m },
                    { 5, 3500.00m, 500.00m, 3000.00m, "Emily Chen", 2000.00m, 10000.00m },
                    { 6, 2700.00m, 600.00m, 4500.00m, "Frank Martinez", 1500.00m, 11500.00m },
                    { 7, 2200.00m, 550.00m, 5000.00m, "Grace Kim", 1800.00m, 10500.00m },
                    { 8, 2900.00m, 600.00m, 4000.00m, "Henry Jones", 1000.00m, 12000.00m },
                    { 9, 1800.00m, 450.00m, 5500.00m, "Isabella Thompson", 3000.00m, 9500.00m },
                    { 10, 2500.00m, 500.00m, 3000.00m, "Jackie Ramirez", 2000.00m, 10000.00m },
                    { 11, 3100.00m, 550.00m, 3500.00m, "Katie Patel", 1500.00m, 11500.00m },
                    { 12, 2400.00m, 550.00m, 5000.00m, "Leo Chen", 1800.00m, 10500.00m },
                    { 13, 2800.00m, 600.00m, 4000.00m, "Maria Rodriguez", 1000.00m, 12000.00m },
                    { 14, 2100.00m, 450.00m, 5500.00m, "Nathan Lee", 3000.00m, 9500.00m },
                    { 15, 3300.00m, 500.00m, 3000.00m, "Olivia Kim", 2000.00m, 10000.00m }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Students",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Students",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Students",
                keyColumn: "Id",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "Students",
                keyColumn: "Id",
                keyValue: 4);

            migrationBuilder.DeleteData(
                table: "Students",
                keyColumn: "Id",
                keyValue: 5);

            migrationBuilder.DeleteData(
                table: "Students",
                keyColumn: "Id",
                keyValue: 6);

            migrationBuilder.DeleteData(
                table: "Students",
                keyColumn: "Id",
                keyValue: 7);

            migrationBuilder.DeleteData(
                table: "Students",
                keyColumn: "Id",
                keyValue: 8);

            migrationBuilder.DeleteData(
                table: "Students",
                keyColumn: "Id",
                keyValue: 9);

            migrationBuilder.DeleteData(
                table: "Students",
                keyColumn: "Id",
                keyValue: 10);

            migrationBuilder.DeleteData(
                table: "Students",
                keyColumn: "Id",
                keyValue: 11);

            migrationBuilder.DeleteData(
                table: "Students",
                keyColumn: "Id",
                keyValue: 12);

            migrationBuilder.DeleteData(
                table: "Students",
                keyColumn: "Id",
                keyValue: 13);

            migrationBuilder.DeleteData(
                table: "Students",
                keyColumn: "Id",
                keyValue: 14);

            migrationBuilder.DeleteData(
                table: "Students",
                keyColumn: "Id",
                keyValue: 15);
        }
    }
}
