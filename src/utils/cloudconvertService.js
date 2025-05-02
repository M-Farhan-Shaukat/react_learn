import axios from 'axios';

const API_KEYS = [
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMzE1ZjNlNDNkZGU5OTJmNGFiNGY4NmIxMzhjZWYyMGRkMTQyNzE2ZGQzODExYjQ4OTYyZGU0YjcxMmFjMzlmYWViZWU4ZWZkMzEzNTgxZjgiLCJpYXQiOjE3NDYxNTc5MjIuNDE5NzM4LCJuYmYiOjE3NDYxNTc5MjIuNDE5NzM5LCJleHAiOjQ5MDE4MzE1MjIuNDE0NDczLCJzdWIiOiI3MTgwNDYwOCIsInNjb3BlcyI6WyJ1c2VyLnJlYWQiLCJ1c2VyLndyaXRlIiwidGFzay5yZWFkIiwidGFzay53cml0ZSIsIndlYmhvb2sucmVhZCIsIndlYmhvb2sud3JpdGUiLCJwcmVzZXQud3JpdGUiLCJwcmVzZXQucmVhZCJdfQ.MZclVaq_b4FZ8vHSHRPmDO8N4GCJIWmEB6CGprnyq_xkFa_lsZrDsVou_WF2gamNt7TKWAnjjgb_EZPFJAyLzyKRkSwmovZpW6hWTleaEJv-UNpPjFAlUgXfscCnqP6BN3W-4o78CrH3mmKxgsxkkyC6nQbxauoYUQ1xK2SZ5y84qoY-r2pgklMNWB5lhmMs-IiPyLfMLWdiQunTWgoZrmEuIYAwnDq-C7RRDMMqVlqiMppGcu0eMHTL2trwTpCiykXRx96oxChqeu9JabPiMee9s6Gm-hTY9ac8NWFsZ8GYtYZMRP_nmqQ6MyEqYPw4ezfUwVb0CBMGYEHtbaH9N2lbhJH5EF6sCjKWImRbbUyyn1Z_TKODKrgudtbuLU1EqFsHIPB0ng67P6Sa9AmKpBTkTVoP_afaByCQdzr55mJVpPwRDsX3Ek-qXBpuytyztHey6ZKzE7H-QkChebLMgqypAolVCiIVFMM1pegHNG79h4Vv3TOpEJDBSiByZ-QbRZB0ss2_rWlw-6-QG_aJ3S1-TYhj51M6wZEeO3IRJR6TEwJPMxiDyDdfeJpH4Dy9w7xForyQfm31DyLZYFi8Dpp40waE1BW74K7bsjctTTcDnCTWw_SKwx7z2qdduukOwxP0KerXtrWIeR-IiG0Ez5NsVNZbrTio68cxiGBSdUE',
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiNWJmYTM1YzRmMDc5ZjY0MmMyZDE4OWRhYjgyOGM4NmNkMmY5ZDZmMWU4NTU4MWUwYjdlYWY2NTAwMzQzMTQxNzA5ZTUzODUzYzFlNmJmZTMiLCJpYXQiOjE3NDYxNjY4NDUuMTk5NTYyLCJuYmYiOjE3NDYxNjY4NDUuMTk5NTY0LCJleHAiOjQ5MDE4NDA0NDUuMTkzMjIsInN1YiI6IjcxODA1MjkzIiwic2NvcGVzIjpbInVzZXIucmVhZCIsInVzZXIud3JpdGUiLCJ0YXNrLnJlYWQiLCJ0YXNrLndyaXRlIiwid2ViaG9vay5yZWFkIiwid2ViaG9vay53cml0ZSIsInByZXNldC5yZWFkIiwicHJlc2V0LndyaXRlIl19.QoXSLUAbmXzMxrKHKAGozAJtT0oIuxEIAVpAQgbrgtMCQFqX_V3Pqtoeg3RkMWbVXSaF7am763Vw-X9A95PRSCTyYo6pAQEJfFTrtceJX-fIvciISvicGer2lcCc0_K-jM5gauNlQxK79RKiNGPl_K4PbJ1-TlB8mEFoJpIdW0HOKwi-zGIJMsFSD1AI80fw8iKO8l0e8gtqkcaHQTSpPlhTd2G08OG_Me7z2gNphUYyEmTNAIBbltkbi2NnNt08sy3URu-8wehBtLJ2Orc5TagPaUFy9GY0JjF3lwhEHne2OWg3xd8YreTiftcwZwN4NZqU2g6XLQCLKMZ9XsOTuLBp8gPeQqrEZFPwKGSgLNHq_PbSDy2jA4cCH85QxWhCzLDjb1JhtVWnroyB8NRkZpcXDybJ0BnpsCuX39ysPRM9ehDYa3ebQLGe_HjuZdL-ulNlGzQ6djDG0HxRyzsBOSrykvxfqiH5SKaJvwnLe615BX8XknAOMPSKCI8107az1NcotUiSxufYu7chAUC6HtsD2pba1kgmcP4do-st5IA1HU-wtJu49jWXdJmlxPkd8xCMJ0nz7NqNLnlCqnrNIdzyRCLHSXPJRva0LUp6V9LacdiEpPt9CbrDtyUGQ_DvgvJsmgw5AZx7AcqbWYYYYK0N_-5mT2rbjAUdIrpxslU',
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiZDE1Y2JlMjY4MzM1ZjdlZjIwOTUzN2U5NDlkNWM4M2IwZGMxNWM0MzhkMzg3ZmNjZDMzNDQ0NDM3MWQ4NDNlMWVkMzM5ODE2OTczZWMyYTYiLCJpYXQiOjE3NDYxNzA1NjQuMzE1MTY2LCJuYmYiOjE3NDYxNzA1NjQuMzE1MTY4LCJleHAiOjQ5MDE4NDQxNjQuMzExNDY1LCJzdWIiOiI3MTgwNTU3NyIsInNjb3BlcyI6WyJ1c2VyLnJlYWQiLCJ1c2VyLndyaXRlIiwidGFzay5yZWFkIiwidGFzay53cml0ZSIsIndlYmhvb2sucmVhZCIsIndlYmhvb2sud3JpdGUiLCJwcmVzZXQucmVhZCIsInByZXNldC53cml0ZSJdfQ.AhPpjY7i_KMvC2bP0MUdkj2JXgS3OVv6c7JSiSQCEh26Pp0udoASH5sSYTgKTH32LGvZ79ONZAZDMs5P4H9hZ_t3jDU15V4otvxyWUSnIQXLU_QWRa_zZr0arku8fljnlBZ8JbieMINh6TKMsUu_Z1XJnazSZL8J4CuunQdZY2OuXHQRolCTyKSi-rFPygWqwpQvNFdRbTIkFp7hKRW0Ca96d-bA_wcHbO-O6n4LJv9WdF7U8t3ym-m9lxo9vptyc7lex5ZhWbtXCfhLSO0VO2vsctqsS3uKZ-SyQeSMfUHNmeY6MYcRYusXzfNVXCdnqMt3xrbVlqSRTYleH_-0H5weGAZ4FSBjxDn6N0wZt4VI94u-Juq_2u_qgx4K-r4KrU3qjvrB8WHVSQHrI4a-Kw3xTh-iczX-cl09D0m8hQxfzl1ZebxWtFC5JRqhLgLm3BdFmHKq-75m-Em9vd03PtPoorca_IMDYKqcn7mIEByaU5jS2HHz_XRFh0Pgo0xJejtxjrBkFFlCftVpHnNCVGMudE9J1WnJHIYnZwwGtEKJwBAld9UbmcM4C4xkxqpuIs-p_z7LDdVNaT8VvLaJFAgYb79FmRzFbF65u4TMQ_W6-I9tRSqK5a--82OCwtrD-0NubsFR8csapsmKOpeNAsJDjzKQbn2Rd8xJEiTJ4_s'
];

export const convertVideoToAudio = async (file) => {
  let attempt = 0;

  while (attempt < API_KEYS.length) {
    const index = Math.floor(Math.random() * API_KEYS.length);
    const API_KEY = API_KEYS[index];

    try {
      const formData = new FormData();
      formData.append("file", file);

      // Step 1: Create a job
      const jobResponse = await axios.post('https://api.cloudconvert.com/v2/jobs', {
        tasks: {
          'import-my-file': { operation: 'import/upload' },
          'convert-my-file': { operation: 'convert', input: 'import-my-file', output_format: 'mp3' },
          'export-my-file': { operation: 'export/url', input: 'convert-my-file' }
        }
      }, {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          'Content-Type': 'application/json'
        }
      });

      const uploadUrl = jobResponse.data.data.tasks.find(t => t.name === 'import-my-file').result.form.url;
      const uploadParams = jobResponse.data.data.tasks.find(t => t.name === 'import-my-file').result.form.parameters;

      // Step 2: Upload file
      const uploadForm = new FormData();
      for (const key in uploadParams) {
        uploadForm.append(key, uploadParams[key]);
      }
      uploadForm.append('file', file);

      await axios.post(uploadUrl, uploadForm);

      // Step 3: Wait for job to complete
      const jobId = jobResponse.data.data.id;
      let exportUrl = '';
      while (!exportUrl) {
        const status = await axios.get(`https://api.cloudconvert.com/v2/jobs/${jobId}`, {
          headers: { Authorization: `Bearer ${API_KEY}` }
        });

        const exportTask = status.data.data.tasks.find(t => t.name === 'export-my-file' && t.status === 'finished');
        if (exportTask) {
          exportUrl = exportTask.result.files[0].url;
          break;
        }

        await new Promise(res => setTimeout(res, 3000)); // Wait before checking again
      }

      return exportUrl; // Success! return the URL
    } catch (error) {
      console.warn(`Attempt ${attempt + 1} failed with key index ${index}:`, error.message);
      attempt++;
    }
  }

//   throw new Error('All API keys failed or exceeded usage limits.');
};
