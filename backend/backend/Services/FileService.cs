using System;
namespace backend.Services
{
	public interface IFileService
	{
        bool Exists(string path);

        Task<string> ReadAllTextAsync(string path);

        Task<byte[]> ReadAllBytesAsync(string path);
    }

    public class FileService : IFileService
    {
        public bool Exists(string path) => File.Exists(path);

        public Task<string> ReadAllTextAsync(string path) => File.ReadAllTextAsync(path);

        public Task<byte[]> ReadAllBytesAsync(string path) => File.ReadAllBytesAsync(path);
    }
}

