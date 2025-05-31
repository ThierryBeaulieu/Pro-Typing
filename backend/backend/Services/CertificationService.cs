using System;
using System.Text.Json;
using backend.Schemas;

namespace backend.Services
{
    public interface ICertificationService
    {
        public List<Certification> FetchAllCertifications();
    }


    public class CertificationService: ICertificationService
    {
        private readonly IDatabaseService _databaseService;

        public CertificationService(IDatabaseService databaseService)
        {
            _databaseService = databaseService;
        }
        public List<Certification> FetchAllCertifications()
        {
            return _databaseService.FetchAllCertifications();
        }
    }
}
