using System;
using System.Text.Json;
using backend.Schemas;

namespace backend.Services
{
    public interface ICertificationImgService
    {
        public Task<CertificationImg?> FetchAssetById(string id);
    }

    public class CertificationImgService : ICertificationImgService
    {
        private readonly IDatabaseService _databaseService;

        public CertificationImgService(IDatabaseService databaseService)
        {
            _databaseService = databaseService;
        }

        public async Task<CertificationImg?> FetchAssetById(string id)
        {
            return await _databaseService.FetchAssetById(id);
        }
    }
}
