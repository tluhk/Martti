const generateHtmlPostsList = (posts) => {
  let list = '<ol>';
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
  list += '</ol>';
  return list;
};

const generateCommentsList = (comments) => {
  let list = '<ol>';
  comments.forEach((comment) => {
    list += `
    <li>
      <p>Kommentaari sisu: ${comment.body}</p>
    </li>
    `;
  });
  list += '</ol>';
  return list;
};

const generateHtmlPost = (post, user, comments) => {
  const postHtml = `
    <h1>Postituse pealkiri: ${post.title}</h1>
    <h2>Autor: ${user.name}</h2>
    <p>Postituse sisu: ${post.body}</p>
    <h2>Kommentaarid:</h2>
    ${generateCommentsList(comments)}
    <form action="/comments" method="post">
      <input type="text" id="comment" name="comment" placeholder="Sisesta kommentaar">
      <input type="hidden" id="postId" name="postId" value="${post.id}">
      <input type="submit" value="Lisa kommentaar">
    </form>
    <br>
    <a href="/posts">Tagasi postituste nimekirja</a>`;

  return postHtml;
};

module.exports = {
  generateHtmlPostsList,
  generateHtmlPost,
};
