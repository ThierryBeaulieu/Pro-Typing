using System;
using System.Text.Json;
using backend.Schemas;

namespace backend.Services
{
    public interface ICertificationService
    {
        public Task<IReadOnlyList<Certification>> FetchAllCertifications();

        public Task<Certification?> FetchCertificationById(string id);

        public Task<CertificationImg?> FetchCertificationImgById(string id);
    }

    public class CertificationService : ICertificationService
    {
        private readonly IDatabaseService _databaseService;

        public CertificationService(IDatabaseService databaseService)
        {
            _databaseService = databaseService;
        }

        public async Task<IReadOnlyList<Certification>> FetchAllCertifications()
        {
            return await _databaseService.FetchAllCertifications();
        }

        public async Task<Certification?> FetchCertificationById(string id)
        {
            return await _databaseService.FetchCertificationById(id);
        }

        public async Task<CertificationImg?> FetchCertificationImgById(string id)
        {
            return await _databaseService.FetchCertificationImgById(id);
        }
    }
}
