// PostPage.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Card } from 'react-bootstrap';
import { posts } from '../data/samplePosts';

const PostPage = () => {
  const { id } = useParams();
  const post = posts.find((p) => p.id === parseInt(id));

  if (!post) {
    return (
      <Container className="my-5">
        <h2>Post not found</h2>
      </Container>
    );
  }

  return (
    <Container className="my-5">
      <Card>
        <Card.Body>
          <Card.Title>{post.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{post.date} by {post.author}</Card.Subtitle>
          <Card.Text>{post.content}</Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default PostPage;
