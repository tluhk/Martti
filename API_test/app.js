const express = require('express');
const dataService = require('./services/dataService');
const htmlService = require('./services/htmlService');
const commentService = require('./services/commentService');

const port = 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/posts', async (req, res) => {
  const posts = await dataService.getData('posts');
  if (!posts) {
    return res.send('Server error!');
  }
  const postsList = htmlService.generateHtmlPostsList(posts);
  return res.send(postsList);
});

app.get('/posts/:id', async (req, res) => {
  const id = Number(req.params.id);
  const post = await dataService.getData(`posts/${id}`);
  if (!post) {
    return res.send('Server error!');
  }
  const user = await dataService.getData(`users/${post.userId}`);
  if (!user) {
    return res.send('Server error!');
  }
  const comments = await commentService.getComments(id);
  const postHtml = htmlService.generateHtmlPost(post, user, comments);
  return res.send(postHtml);
});

app.post('/comments', async (req, res) => {
  const { comment, postId } = req.body;
  const result = await commentService.addComment({ body: comment, postId: Number(postId) });
  if (!result) {
    return res.send('Server error!');
  }
  return res.redirect('back');
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`App is running on http://localhost:${port}`);
});
