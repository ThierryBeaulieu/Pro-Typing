using System;
using System.Text.Json;
using backend.Schemas;

namespace backend.Services
{
    public interface IDatabaseService
    {
        public Task<IReadOnlyList<Certification>> FetchAllCertifications();

        public Task<IReadOnlyList<Certification>> FetchCertificationById(string id);
    }
}