import axios from 'axios';

export const searchAddresses = async q => {
  const res = await axios({
    method: 'get',
    baseURL: 'https://api-adresse.data.gouv.fr',
    url: '/search',
    params: {
      q: q,
    },
    validateStatus: status => {
      return status < 500;
    },
  });

  return res.data.features;
};
