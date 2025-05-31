using System;
using System.Text.Json;
using backend.Schemas;

namespace backend.Services
{
    public interface ICertificationService
    {
        public Task<IReadOnlyList<Certification>> FetchAllCertifications();
    }

    public class CertificationService: ICertificationService
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
    }
}
