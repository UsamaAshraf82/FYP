using InvestMeAPI.Helper;
using InvestMeAPI.Models;
using InvestMeAPI.Views;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

namespace InvestMeAPI.Service
{
    public interface IReturnService
    {
        ReturnInvestments ReturnInvestment(ReturnInvestments returnParam);
    }

    public class ReturnService : IReturnService
    {
        private readonly InvestMeContext _context;

        public ReturnService(InvestMeContext context)
        {
            _context = context;
        }


        public ReturnInvestments ReturnInvestment(ReturnInvestments returnParam)
        {

            _context.Returns.Add(returnParam);
            _context.SaveChanges();


            return returnParam;
        }

    }
}
