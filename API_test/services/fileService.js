const fs = require('fs');

const readData = async (fileName) => {
  try {
    const data = await fs.readFileSync(fileName, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error.message);
    return null;
  }
};

const writeData = async (fileName, data) => {
  try {
    await fs.writeFileSync(fileName, JSON.stringify(data, null, 2));
    return true;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error.message);
    return false;
  }
};

module.exports = { readData, writeData };
