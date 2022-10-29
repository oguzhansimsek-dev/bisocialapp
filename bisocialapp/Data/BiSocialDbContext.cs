using System;
using Microsoft.EntityFrameworkCore;
using bisocialapp.Models;

namespace bisocialapp.Data
{
    public class BiSocialDbContext : DbContext
    {
        public BiSocialDbContext(DbContextOptions<BiSocialDbContext> options) : base(options) { }

        public DbSet<User> Users { get; set; }
        public DbSet<LoggedUser> LoggedUser { get; set; }
        public DbSet<Follow> UserFollow { get; set; }
        public DbSet<Post> Posts { get; set; }
        public DbSet<Photo> Photos { get; set; }
        public DbSet<SpPost> SpPosts { get; set; }
        public DbSet<Comment> Comments { get; set; }
        public DbSet<PostLike> PostLikes { get; set; }

        // public DbSet<PostDetail> PostDetails { get; set; }
    }
}
