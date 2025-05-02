import axios from 'axios';

const API_KEY = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMzE1ZjNlNDNkZGU5OTJmNGFiNGY4NmIxMzhjZWYyMGRkMTQyNzE2ZGQzODExYjQ4OTYyZGU0YjcxMmFjMzlmYWViZWU4ZWZkMzEzNTgxZjgiLCJpYXQiOjE3NDYxNTc5MjIuNDE5NzM4LCJuYmYiOjE3NDYxNTc5MjIuNDE5NzM5LCJleHAiOjQ5MDE4MzE1MjIuNDE0NDczLCJzdWIiOiI3MTgwNDYwOCIsInNjb3BlcyI6WyJ1c2VyLnJlYWQiLCJ1c2VyLndyaXRlIiwidGFzay5yZWFkIiwidGFzay53cml0ZSIsIndlYmhvb2sucmVhZCIsIndlYmhvb2sud3JpdGUiLCJwcmVzZXQud3JpdGUiLCJwcmVzZXQucmVhZCJdfQ.MZclVaq_b4FZ8vHSHRPmDO8N4GCJIWmEB6CGprnyq_xkFa_lsZrDsVou_WF2gamNt7TKWAnjjgb_EZPFJAyLzyKRkSwmovZpW6hWTleaEJv-UNpPjFAlUgXfscCnqP6BN3W-4o78CrH3mmKxgsxkkyC6nQbxauoYUQ1xK2SZ5y84qoY-r2pgklMNWB5lhmMs-IiPyLfMLWdiQunTWgoZrmEuIYAwnDq-C7RRDMMqVlqiMppGcu0eMHTL2trwTpCiykXRx96oxChqeu9JabPiMee9s6Gm-hTY9ac8NWFsZ8GYtYZMRP_nmqQ6MyEqYPw4ezfUwVb0CBMGYEHtbaH9N2lbhJH5EF6sCjKWImRbbUyyn1Z_TKODKrgudtbuLU1EqFsHIPB0ng67P6Sa9AmKpBTkTVoP_afaByCQdzr55mJVpPwRDsX3Ek-qXBpuytyztHey6ZKzE7H-QkChebLMgqypAolVCiIVFMM1pegHNG79h4Vv3TOpEJDBSiByZ-QbRZB0ss2_rWlw-6-QG_aJ3S1-TYhj51M6wZEeO3IRJR6TEwJPMxiDyDdfeJpH4Dy9w7xForyQfm31DyLZYFi8Dpp40waE1BW74K7bsjctTTcDnCTWw_SKwx7z2qdduukOwxP0KerXtrWIeR-IiG0Ez5NsVNZbrTio68cxiGBSdUE'; // Replace with your real key

export const convertVideoToAudio = async (file) => {
  const formData = new FormData();
  formData.append("file", file);

  // Step 1: Create a job
  const jobResponse = await axios.post('https://api.cloudconvert.com/v2/jobs', {
    tasks: {
      'import-my-file': {
        operation: 'import/upload'
      },
      'convert-my-file': {
        operation: 'convert',
        input: 'import-my-file',
        output_format: 'mp3'
      },
      'export-my-file': {
        operation: 'export/url',
        input: 'convert-my-file'
      }
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

  return exportUrl;
};
