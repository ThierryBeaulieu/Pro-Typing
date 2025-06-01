using System;
using System.Text.Json;
using backend.Schemas;

namespace backend.Services
{
    public interface ICertificationService
    {
        public Task<IReadOnlyList<Certification>> FetchAllCertifications();

        public Task<Certification?> FetchCertificationByID(string id);
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

        public async Task<Certification?> FetchCertificationByID(string id)
        {
            return await _databaseService.FetchCertificationById(id);
        }
    }
}
