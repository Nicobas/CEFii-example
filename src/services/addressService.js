import axios from 'axios';

export const searchAddresses = async (q, lat, lon) => {
  console.log(lat, lon);
  const res = await axios({
    method: 'get',
    baseURL: 'https://api-adresse.data.gouv.fr',
    url: '/search',
    params: {
      q,
      lat,
      lon,
    },
    validateStatus: status => {
      return status < 500;
    },
  });

  return res.data.features;
};
