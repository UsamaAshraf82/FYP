using AutoMapper;
using InvestMeAPI.DTOS;
using InvestMeAPI.Helper;
using InvestMeAPI.Service;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace InvestMeAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class AdminsController : ControllerBase
    {
        private readonly IAdminService _adminService;
        private readonly IMapper _mapper;
        private readonly AppSettings _appSettings;

        public AdminsController(
            IAdminService adminService,
            IMapper mapper,
            IOptions<AppSettings> appSettings)
        {
            _adminService = adminService;
            _mapper = mapper;
            _appSettings = appSettings.Value;
        }

        [AllowAnonymous]
        [HttpPost("authenticate")]
        public IActionResult Authenticate([FromBody]AdminDTO adminDto)
        {
            var admin = _adminService.Authenticate(adminDto.Username, adminDto.Password);

            if (admin == null)
                return Unauthorized();

            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(_appSettings.Secret);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new Claim[]
                {
                    new Claim(ClaimTypes.Name, admin.AdminId.ToString())
                }),
                Expires = DateTime.UtcNow.AddDays(7),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha512Signature)
            };
            var token = tokenHandler.CreateToken(tokenDescriptor);
            var tokenString = tokenHandler.WriteToken(token);

            // return basic user info (without password) and token to store client side
            return Ok(new
            {
                AdminId = admin.AdminId,
                Username = admin.Username,
                Name = admin.Name,
                Token = tokenString
            });
        }

        [HttpGet("PendingCampaign")]
        public IActionResult PendingCampaign()
        {
            try
            {

                var pendingCampaign = _adminService.PendingCampaign();
                return Ok(pendingCampaign);
            }
            catch (AppException ex)
            {
                // return error message if there was an exception
                return BadRequest(ex.Message);
            }
        }
        [HttpGet("DashboardDetails")]
        public IActionResult DashboardDetails()
        {
            try
            {

                var DashboardDetails = _adminService.DashboardDetails();
                return Ok(DashboardDetails);
            }
            catch (AppException ex)
            {
                // return error message if there was an exception
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("Campaigns")]
        public IActionResult GetCampaigns()
        {
            try
            {

                var DashboardDetails = _adminService.GetCampaigns();
                return Ok(DashboardDetails);
            }
            catch (AppException ex)
            {
                // return error message if there was an exception
                return BadRequest(ex.Message);
            }
        }

        [HttpPatch("Accepted_{CampaignId}")]
        public IActionResult Accepted(int CampaignId)
        {
            try
            {

                _adminService.Accepted(CampaignId);
                return Ok();
            }
            catch (AppException ex)
            {
                // return error message if there was an exception
                return BadRequest(ex.Message);
            }
        }

        [HttpPatch("Rejected_{CampaignId}")]
        public IActionResult Rejected(int CampaignId)
        {
            try
            {

                _adminService.Rejected(CampaignId);
                return Ok();
            }
            catch (AppException ex)
            {
                // return error message if there was an exception
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("AdminUserDetails")]
        public IActionResult UserDetails()
        {
            try
            {

                var users = _adminService.UserDetails();
                return Ok(users);
            }
            catch (AppException ex)
            {
                // return error message if there was an exception
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("AdminUserDetails_{userId}")]
        public IActionResult UserDetails(int userId)
        {
            try
            {

                var users = _adminService.UserDetails(userId);
                return Ok(users);
            }
            catch (AppException ex)
            {
                // return error message if there was an exception
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("AdminInvestedCampaignView_{campaignId}")]
        public IActionResult AdminInvestedCampaignView(int campaignId)
        {
            try
            {

                var campaign = _adminService.AdminInvestedCampaignView(campaignId);
                return Ok(campaign);
            }
            catch (AppException ex)
            {
                // return error message if there was an exception
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("MonthlyReport")]
        public IActionResult MonthlyReport()
        {
            try
            {

                var campaign = _adminService.MonthlyReport();
                return Ok(campaign);
            }
            catch (AppException ex)
            {
                // return error message if there was an exception
                return BadRequest(ex.Message);
            }
        }
    }
}



