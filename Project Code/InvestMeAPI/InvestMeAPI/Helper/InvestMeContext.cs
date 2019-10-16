using InvestMeAPI.Models;
using InvestMeAPI.Views;
using Microsoft.EntityFrameworkCore;

namespace InvestMeAPI.Helper
{
    public class InvestMeContext : DbContext
    {


        public InvestMeContext() { }

        public InvestMeContext(DbContextOptions<InvestMeContext> options) : base(options) { }

        public virtual DbSet<Campaign> Campaigns { get; set; }
        public virtual DbSet<Category> Categories { get; set; }
        public virtual DbSet<Invester> Investers { get; set; }
        public virtual DbSet<User> Users { get; set; }
        public virtual DbSet<Admin> Admins { get; set; }
        public virtual DbSet<ReturnInvestments> Returns { get; set; }

        public DbQuery<TopCategory> TopCategory { get; set; }
        public DbQuery<InvestedCampaign> InvestedCampaign { get; set; }
        public DbQuery<DashboardDetails> DashboardDetails { get; set; }
        public DbQuery<InvestedDetails> InvestedDetails { get; set; }
        public DbQuery<MonthlyReport> MonthlyReport { get; set; }
        public DbQuery<InvestedbyCampaign> InvestedbyCampaign { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("ProductVersion", "2.2.2-servicing-10034");



            modelBuilder.Entity<Campaign>(entity =>
            {
                entity.Property(e => e.CampaignId).ValueGeneratedOnAdd();

                entity.Property(e => e.EstimatedFirstProfit)
                    .HasColumnType("date");

                entity.Property(e => e.NeedFundBefore)
                    .HasColumnType("date");

                entity.Property(e => e.AddedDateTime)
                    .HasColumnType("datetime")
                    .HasDefaultValueSql("CURRENT_TIMESTAMP");

                entity.Property(e => e.Views)
                    .HasDefaultValue("0");

                entity.Property(e => e.CurrencyUnit)
                    .HasDefaultValue("PKR");

                entity.Property(e => e.TotalCost)
                        .HasColumnType("BIGINT");

                entity.Property(e => e.Fund)
                        .HasColumnType("BIGINT");

                entity.Property(e => e.Investment)
                        .HasColumnType("BIGINT")
                        .HasDefaultValue("0");

                entity.Property(e => e.IsVarified)
                       .HasDefaultValue("PENDING");

                entity.Property(e => e.CampaignStatus)
                       .HasDefaultValue("ONGOING");

                entity.HasOne(d => d.User)
                  .WithMany(p => p.Campaign)
                  .HasForeignKey(d => d.UserId)
                  .OnDelete(DeleteBehavior.ClientSetNull)
                  .HasConstraintName("FK_Campaign_User");

                entity.HasOne(d => d.Category)
                .WithMany(p => p.Campaign)
                .HasForeignKey(d => d.CategoryID)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_Campaign_Category");

            });

            modelBuilder.Entity<Category>(entity =>
            {
                entity.Property(e => e.CategoryId).ValueGeneratedNever();

                entity.Property(e => e.Description)
                    .IsUnicode(false);

                entity.Property(e => e.Name)
                    .HasMaxLength(20)
                    .IsUnicode(false);
            });


            modelBuilder.Entity<Invester>(entity =>
            {
                entity.Property(e => e.InvesterId).ValueGeneratedOnAdd();

                entity.Property(e => e.Investment)
                            .HasColumnType("BIGINT")
                            .HasDefaultValue("0");

                entity.Property(e => e.AddedDateTime)
                .HasColumnType("datetime")
                .HasDefaultValueSql("CURRENT_TIMESTAMP");

                entity.HasOne(d => d.Campaign)
                    .WithMany(p => p.Invester)
                    .HasForeignKey(d => d.CampaignId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Invester_campaign");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.Invester)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Invester_User");
            });

           modelBuilder.Entity<ReturnInvestments>(entity =>
            {
                entity.Property(e => e.ReturnInvestmentsID).ValueGeneratedOnAdd();

                entity.Property(e => e.ReturnInvestment)
                            .HasColumnType("BIGINT")
                            .HasDefaultValue("0");

                entity.Property(e => e.AddedDateTime)
                            .HasColumnType("datetime")
                            .HasDefaultValueSql("CURRENT_TIMESTAMP");

                entity.HasOne(d => d.Campaign)
                   .WithMany(p => p.ReturnInvestments)
                   .HasForeignKey(d => d.CampaignId)
                   .OnDelete(DeleteBehavior.ClientSetNull)
                   .HasConstraintName("FK_Return_campaign");
            }

              );

    
            modelBuilder.Entity<User>(entity =>
            {
                entity.Property(e => e.UserId).ValueGeneratedOnAdd();

                entity.Property(e => e.FName)
                    .IsRequired();

                entity.Property(e => e.LName)
                    .IsRequired();

                entity.Property(e => e.Email)
                    .IsRequired();

                entity.HasIndex(e => e.Email)
                    .IsUnique();


                entity.Property(e => e.PasswordHash)
                    .IsRequired()
                    .IsUnicode(true);

                entity.Property(e => e.PasswordSalt)
                    .IsRequired()
                    .IsUnicode(true);

            });

            modelBuilder.Entity<Admin>(entity =>
            {
                entity.Property(e => e.AdminId).ValueGeneratedOnAdd();

                entity.Property(e => e.Name)
                    .IsRequired();

                entity.Property(e => e.Username)
                    .IsRequired();

                entity.HasIndex(e => e.Username)
                    .IsUnique();


                entity.Property(e => e.PasswordHash)
                    .IsRequired()
                    .IsUnicode(true);

                entity.Property(e => e.PasswordSalt)
                    .IsRequired()
                    .IsUnicode(true);

                entity.Property(e => e.LastAccess)
                    .HasColumnType("datetime")
                    .HasDefaultValueSql("CURRENT_TIMESTAMP");
            });

            using (var hmac = new System.Security.Cryptography.HMACSHA512())
            {
                modelBuilder.Entity<Admin>().HasData(new
                {
                    AdminId = 1,
                    Name = "Admin",
                    Username = "admin",
                    PasswordSalt = hmac.Key,
                    PasswordHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes("admin"))
                });
            }





        }
    }
}
