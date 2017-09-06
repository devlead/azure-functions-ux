using System.IO;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;

namespace AzureFunctions.Common
{
    public static class HttpContextExtensions
    {
        public static async Task<string> ReadAsStringUTF8Async(this HttpContent content)
        {
            using (var reader = new StreamReader((await content.ReadAsStreamAsync()), Encoding.UTF8))
            {
                return reader.ReadToEnd();
            }
        }
    }
}