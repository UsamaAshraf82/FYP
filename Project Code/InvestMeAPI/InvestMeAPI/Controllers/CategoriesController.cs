using AutoMapper;
using InvestMeAPI.DTOS;
using InvestMeAPI.Helper;
using InvestMeAPI.Service;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using System.Collections.Generic;

namespace InvestMeAPI.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    public class CategoriesController : Controller
    {
        private readonly ICategoryService _categoriesService;
        private readonly IMapper _mapper;
        private readonly AppSettings _appSettings;

        public CategoriesController(
            ICategoryService categoriesService,
            IMapper mapper,
            IOptions<AppSettings> appSettings)
        {
            _categoriesService = categoriesService;
            _mapper = mapper;
            _appSettings = appSettings.Value;
        }

        [AllowAnonymous]
        [HttpGet("All")]
        public IActionResult GetAll()
        {
            var categories = _categoriesService.GetAll();
            var categoriesDTO= _mapper.Map<IList<CategoriesCardDTO>>(categories);
            return Ok(categoriesDTO);
        }

        [AllowAnonymous]
        [HttpGet("Top")]
        public IActionResult Top()
        {
            var categories = _categoriesService.Top();
            var categoriesDTO = _mapper.Map<IList<CategoriesCardDTO>>(categories);
            return Ok(categoriesDTO);
        }
    }
}
