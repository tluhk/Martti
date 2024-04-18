const fileService = require('./fileService');

const commentFileName = 'comments.json';

const getComments = async (postId) => {
  const comments = await fileService.readData(commentFileName);
  if (!comments) {
    return [];
  }
  const commentsByPostId = comments.filter((comment) => comment.postId === postId);
  if (!commentsByPostId) {
    return [];
  }
  return commentsByPostId;
};

const addComment = async (comment) => {
  try {
    let comments = await fileService.readData(commentFileName);
    if (!comments) {
      comments = [];
    }
    comments.push(comment);
    await fileService.writeData(commentFileName, comments);
    return comments;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error.message);
    return false;
  }
};

module.exports = { getComments, addComment };
