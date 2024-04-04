const generateHtmlPostsList = (posts) => {
  let list = "<ol>";
  posts.forEach((post) => {
    list += `
    <li>
      <p>Postitused id: ${post.id}</p>
      <p>Autori id: ${post.userId}</p>
      <p>Postituse pealkiri: ${post.title}</p>
      <p>Postituse sisu: ${post.body}</p>
      <a href="/posts/${post.id}">Loe rohkem ...</a>
    </li>
    `;
  });
  list += "</ol>";
  return list;
};

const generateHtmlPost = (post, user) => {
  const postHtml = `
    <h1>Postituse pealkiri: ${post.title}</h1>
    <h2>Autor: ${user.name}</h2>
    <p>Postituse sisu: ${post.body}</p>
    <a href="/posts">Tagasi postituste nimekirja</a>`;

  return postHtml;
};

module.exports = {
  generateHtmlPostsList,
  generateHtmlPost,
};
