const axios = require('axios');
const config = require('../config');

const { baseUrl } = config;

const getData = async (resource) => {
  try {
    const response = await axios.get(`${baseUrl}/${resource}`);
    return response.data;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error.message);
    return null;
  }
};

module.exports = { getData };
