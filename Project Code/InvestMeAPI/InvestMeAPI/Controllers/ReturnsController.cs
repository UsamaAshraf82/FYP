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
    [ApiController]
    public class ReturnsController : ControllerBase
    {
        private readonly ICampaignService _campaignService;
        private readonly IUserService _userService;
        private readonly IInvestorService _investorService;
        private readonly IReturnService _returnService;
        private readonly IMapper _mapper;
        private readonly AppSettings _appSettings;

        public ReturnsController(
            ICampaignService campaignService,
            IInvestorService investorService,
            IUserService userService,
            IReturnService returnService,
            IMapper mapper,
            IOptions<AppSettings> appSettings)
        {
            _campaignService = campaignService;
            _userService = userService;
            _investorService = investorService;
            _returnService = returnService;
            _mapper = mapper;
            _appSettings = appSettings.Value;
        }
    
        [HttpPost("Process")]
        public IActionResult Process([FromBody]ReturnDTO returnDTO)
        {

            // map dto to entity
            ReturnInvestments returnInvest = new ReturnInvestments();

            returnInvest.CampaignId = returnDTO.CampaignId;
            returnInvest.ReturnInvestment = returnDTO.Amount;
            


          
            try
            {

                // save 
                _returnService.ReturnInvestment(returnInvest);
             
                return Ok();
            }
            catch (AppException ex)
            {
                // return error message if there was an exception
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("GetInvestor_{campaignID}")]
        public IActionResult InvestorsList(int campaignID)
        {
            try
            {

                // save 
                var investor =_investorService.GetInvestorbyCampaign(campaignID);
                return Ok(investor);
            }
            catch (AppException ex)
            {
                // return error message if there was an exception
                return BadRequest(ex.Message);
            }
        }



    }
}
