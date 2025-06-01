using System;
using System.Text.Json;
using backend.Schemas;

namespace backend.Services
{
    public interface IAssetService
    {
        public Task<string?> FetchAssetById(string id);
    }

    public class AssetService : IAssetService
    {
        private readonly IDatabaseService _databaseService;

        public AssetService(IDatabaseService databaseService)
        {
            _databaseService = databaseService;
        }

        public async Task<string?> FetchAssetById(string id)
        {
            return await _databaseService.FetchAssetById(id);
        }
    }
}
