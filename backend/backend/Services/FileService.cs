using System;
namespace backend.Services
{
	public interface IFileService
	{
        bool Exists(string path);
        Task<string> ReadAllTextAsync(string path);
    }

    public class FileService : IFileService
    {
        public bool Exists(string path) => File.Exists(path);

        public Task<string> ReadAllTextAsync(string path) => File.ReadAllTextAsync(path);
    }
}

