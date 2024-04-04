const axios = require("axios");

const baseUrl = "https://jsonplaceholder.typicode.com";

const getData = async (resource) => {
  try {
    const response = await axios.get(`${baseUrl}/${resource}`);
    return response.data;
  } catch (error) {
    console.log(error.message);
    return null;
  }
};

module.exports = { getData };
