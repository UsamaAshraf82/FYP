using InvestMeAPI.Helper;
using InvestMeAPI.Models;
using InvestMeAPI.Views;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;

namespace InvestMeAPI.Service
{

    public interface ICategoryService
    {
        IEnumerable<Category> GetAll();
        IEnumerable<TopCategory> Top();

    }

    public class CategoryService : ICategoryService
    {
        private readonly InvestMeContext _context;

        public CategoryService(InvestMeContext context)
        {
            _context = context;
        }

        public IEnumerable<Category> GetAll()
        {
            return _context.Categories;
        }

        public IEnumerable<TopCategory> Top()
        {
            return _context.TopCategory.FromSql(" Select Top 4 Categories.CategoryId, Categories.Name , (Categories.Image)   from Campaigns inner Join Categories on Campaigns.CategoryID = Categories.CategoryId Group By Categories.Name,Categories.CategoryId, Categories.Image order by count(Categories.Name) DESC").ToList();

            //            return _context.Categories.Take(4).ToList();
        }
    }
}