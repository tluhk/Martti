const express = require("express");
const dataService = require("./services/dataService");
const htmlService = require("./services/htmlService");
const port = 3000;
const app = express();

app.get("/posts", async (req, res) => {
  const posts = await dataService.getData("posts");
  if (!posts) {
    return res.send("Server error!");
  }
  const postsList = htmlService.generateHtmlPostsList(posts);
  return res.send(postsList);
});

app.get("/posts/:id", async (req, res) => {
  const id = Number(req.params.id);
  const post = await dataService.getData(`posts/${id}`);
  if (!post) {
    return res.send("Server error!");
  }
  const user = await dataService.getData(`users/${post.userId}`);
  if (!user) {
    return res.send("Server error!");
  }
  const postHtml = htmlService.generateHtmlPost(post, user);
  return res.send(postHtml);
});

app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`);
});
