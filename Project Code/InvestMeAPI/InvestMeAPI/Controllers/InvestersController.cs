using AutoMapper;
using InvestMeAPI.DTOS;
using InvestMeAPI.Helper;
using InvestMeAPI.Models;
using InvestMeAPI.Service;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;

namespace InvestMeAPI.Controllers
{
    [Route("api/[controller]")]
    [Authorize]
    public class InvestersController : ControllerBase
    {
        private readonly ICampaignService _campaignService;
        private readonly IUserService _userService;
        private readonly IInvestorService _investorService;
        private readonly IMapper _mapper;
        private readonly AppSettings _appSettings;

        public InvestersController(
            ICampaignService campaignService,
            IInvestorService investorService,
            IUserService userService,
            IMapper mapper,
            IOptions<AppSettings> appSettings)
        {
            _campaignService = campaignService;
            _userService = userService;
            _investorService = investorService;
            _mapper = mapper;
            _appSettings = appSettings.Value;
        }

        [HttpPost("Process")]
        public IActionResult Process([FromBody]InvestorDTO investorDTO)
        {

            // map dto to entity
            var investment = _mapper.Map<Invester>(investorDTO);


            var adminShare = investment.Investment * 5 / 100;
            investment.AdminShare = adminShare;
            try
            {

                // save 
                _investorService.NewInvestment(investment);
                _campaignService.Investment(investment.CampaignId, investment.Investment);
                return Ok();
            }
            catch (AppException ex)
            {
                // return error message if there was an exception
                return BadRequest(ex.Message);
            }
        }


    }
}
