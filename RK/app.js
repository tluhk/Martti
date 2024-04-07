/* eslint-disable no-console */
const express = require('express');
const dataService = require('./services/dataService');
const htmlService = require('./services/htmlService');

const port = 3000;
const app = express();

app.get('/members', async (req, res) => {
  const members = await dataService.getData('plenary-members');
  if (!members) {
    return res.send('Server error!');
  }
  const membersList = htmlService.generateHtmlMembersList(members);
  return res.send(membersList);
});

app.get('/members/:uuid', async (req, res) => {
  const { uuid } = req.params;
  const member = await dataService.getData(`plenary-members/${uuid}`);
  if (!member) {
    return res.send('Server error!');
  }
  const memberHtml = htmlService.generateHtmlMember(member);
  return res.send(memberHtml);
});

app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`);
});
