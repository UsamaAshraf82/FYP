
using AutoMapper;

using InvestMeAPI.DTOS;
using InvestMeAPI.Models;

namespace InvestMeAPI.Helper
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {
            CreateMap<User, UserDto>();
            CreateMap<UserDto, User>();

            CreateMap<Campaign, CampaignDTO>();
            CreateMap<CampaignDTO, Campaign>();


            CreateMap<User, CampaignUserDTO>();
            CreateMap<Campaign, CampaignUserDTO>();

            CreateMap<Invester, InvestorDTO>();
            CreateMap<InvestorDTO, Invester>();

            CreateMap<User, AdminUserDTO>();
            CreateMap<AdminUserDTO, User>();

            CreateMap<ReturnInvestments, ReturnDTO>();
            CreateMap<ReturnDTO, ReturnInvestments>();
        }
    }
}
