/* eslint-disable no-underscore-dangle */

const generateHtmlMembersList = (members) => {
  let list = '<ol>';
  members.forEach((member) => {
    list += `
    <li>
      <p>Liikme id: ${member.uuid}</p>
      <p>Nimi: ${member.fullName}</p>
      <a href="/members/${member.uuid}">Vaata täpsemalt ...</a>
    </li>
    `;
  });
  list += '</ol>';
  return list;
};

const generateHtmlMember = (member) => {
  const memberHtml = `
    <h1>Nimi: ${member.fullName}</h1>
    <img src="${member.photo._links.download.href}" alt="${member.fullName}" />
    <a href="/members">Tagasi liikmete nimekirja</a>`;

  return memberHtml;
};

module.exports = {
  generateHtmlMembersList,
  generateHtmlMember,
};
