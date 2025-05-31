using System;
using System.Text.Json;
using backend.Schemas;

namespace backend.Services
{
    public interface IDatabaseService
    {
        public List<Certification> FetchAllCertifications();
    }
}