using AutoMapper;
using InvestMeAPI.DTOS;
using InvestMeAPI.Helper;
using InvestMeAPI.Models;
using InvestMeAPI.Service;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using System.Collections.Generic;

namespace InvestMeAPI.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    public class CampaignsController : Controller
    {
        private readonly ICampaignService _campaignService;
        private readonly IUserService _userService;
        private readonly IMapper _mapper;
        private readonly AppSettings _appSettings;

        public CampaignsController(
            ICampaignService campaignService,
            IUserService userService,
            IMapper mapper,
            IOptions<AppSettings> appSettings)
        {
            _campaignService = campaignService;
            _userService = userService;
            _mapper = mapper;
            _appSettings = appSettings.Value;
        }


        [HttpPost("Create")]
        public IActionResult Create([FromBody]CampaignDTO campaignDTO)
        {

            // map dto to entity
            var campaign = _mapper.Map<Campaign>(campaignDTO);

            try
            {
                // save 
                _campaignService.Create(campaign);
                return Ok();
            }
            catch (AppException ex)
            {
                // return error message if there was an exception
                return BadRequest(ex.Message);
            }
        }

        [AllowAnonymous]
        [HttpGet("campaign_{id}")]
        public IActionResult GetById(int id)
        {
            var campaign = _campaignService.GetById(id);
            var user = _userService.GetById(campaign.UserId);
            var campaignUserDto = _mapper.Map<Campaign, CampaignUserDTO>(campaign);
            campaignUserDto = _mapper.Map<User, CampaignUserDTO>(user, campaignUserDto);
            return Ok(campaignUserDto);
        }


        [HttpGet("userID_{id}")]
        public IActionResult GetbyUserID(int id)
        {
            var userCampaign = _campaignService.GetbyUserID(id);

            var campaigns = _mapper.Map<IList<CampaignDTO>>(userCampaign);
            return Ok(campaigns);
        }

        [HttpGet("investedcampaign_{id}")]
        public IActionResult GetInvestedCampaign(int id)
        {
            try
            {

                var investedCampaign = _campaignService.GetInvestedCampaign(id);
                return Ok(investedCampaign);
            }
            catch (AppException ex)
            {
                // return error message if there was an exception
                return BadRequest(ex.Message);
            }
        }

        [AllowAnonymous]
        [HttpPut("visit_{id}")]
        public IActionResult Visit(int id)
        {
            try
            {

                // save 
                _campaignService.Visit(id);
                return Ok();
            }
            catch (AppException ex)
            {
                // return error message if there was an exception
                return BadRequest(ex.Message);
            }
        }

        [AllowAnonymous]
        [HttpGet("NewCampaigns")]
        public IActionResult NewCampaigns()
        {
            var campaigns = _campaignService.NewCampaigns();
            var newCampaigns = _mapper.Map<IList<CampaignCardDTO>>(campaigns);
            return Ok(newCampaigns);
        }

        [AllowAnonymous]
        [HttpGet("TrendingCampaigns")]
        public IActionResult TrendingCampaigns()
        {
            var campaigns = _campaignService.TrendingCampaigns();
            var trendignCampaign = _mapper.Map<IList<CampaignCardDTO>>(campaigns);
            return Ok(trendignCampaign);
        }
        [AllowAnonymous]
        [HttpGet("GetByCategory_{id}")]
        public IActionResult GetByCategory(int id)
        {
            var campaigns = _campaignService.GetByCategory(id);
            var trendignCampaign = _mapper.Map<IList<CampaignCardDTO>>(campaigns);
            return Ok(trendignCampaign);
        }

        

    }
}
