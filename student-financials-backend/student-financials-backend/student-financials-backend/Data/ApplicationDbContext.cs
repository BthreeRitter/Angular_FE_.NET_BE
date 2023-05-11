using Microsoft.EntityFrameworkCore;
using student_financials_backend.Models; // Replace "YourNamespace" with the actual namespace of your project
using System.Collections.Generic;


namespace student_financials_backend.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }

        public DbSet<Student> Students { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Student>().HasData(
                new Student { Id = 1, Name = "Alice Smith", Balance = 2000.00m, FinancialAid = 5000.00m, Tuition = 10000.00m, Fees = 500.00m, Scholarships = 2000.00m },
                new Student { Id = 2, Name = "Bob Johnson", Balance = 2500.00m, FinancialAid = 4000.00m, Tuition = 11000.00m, Fees = 550.00m, Scholarships = 1500.00m },
                new Student { Id = 3, Name = "Charlie Brown", Balance = 3000.00m, FinancialAid = 3500.00m, Tuition = 12000.00m, Fees = 600.00m, Scholarships = 1000.00m },
                new Student { Id = 4, Name = "David Lee", Balance = 1800.00m, FinancialAid = 5500.00m, Tuition = 9500.00m, Fees = 450.00m, Scholarships = 3000.00m },
                new Student { Id = 5, Name = "Emily Chen", Balance = 3500.00m, FinancialAid = 3000.00m, Tuition = 10000.00m, Fees = 500.00m, Scholarships = 2000.00m },
                new Student { Id = 6, Name = "Frank Martinez", Balance = 2700.00m, FinancialAid = 4500.00m, Tuition = 11500.00m, Fees = 600.00m, Scholarships = 1500.00m },
                new Student { Id = 7, Name = "Grace Kim", Balance = 2200.00m, FinancialAid = 5000.00m, Tuition = 10500.00m, Fees = 550.00m, Scholarships = 1800.00m },
                new Student { Id = 8, Name = "Henry Jones", Balance = 2900.00m, FinancialAid = 4000.00m, Tuition = 12000.00m, Fees = 600.00m, Scholarships = 1000.00m },
                new Student { Id = 9, Name = "Isabella Thompson", Balance = 1800.00m, FinancialAid = 5500.00m, Tuition = 9500.00m, Fees = 450.00m, Scholarships = 3000.00m },
                new Student { Id = 10, Name = "Jackie Ramirez", Balance = 2500.00m, FinancialAid = 3000.00m, Tuition = 10000.00m, Fees = 500.00m, Scholarships = 2000.00m },
                new Student { Id = 11, Name = "Katie Patel", Balance = 3100.00m, FinancialAid = 3500.00m, Tuition = 11500.00m, Fees = 550.00m, Scholarships = 1500.00m },
                new Student { Id = 12, Name = "Leo Chen", Balance = 2400.00m, FinancialAid = 5000.00m, Tuition = 10500.00m, Fees = 550.00m, Scholarships = 1800.00m },
                new Student { Id = 13, Name = "Maria Rodriguez", Balance = 2800.00m, FinancialAid = 4000.00m, Tuition = 12000.00m, Fees = 600.00m, Scholarships = 1000.00m },
                new Student { Id = 14, Name = "Nathan Lee", Balance = 2100.00m, FinancialAid = 5500.00m, Tuition = 9500.00m, Fees = 450.00m, Scholarships = 3000.00m },
                new Student { Id = 15, Name = "Olivia Kim", Balance = 3300.00m, FinancialAid = 3000.00m, Tuition = 10000.00m, Fees = 500.00m, Scholarships = 2000.00m }
            );

            base.OnModelCreating(modelBuilder);
        }

    }

}
