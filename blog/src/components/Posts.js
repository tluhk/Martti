// PostList.js
import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import Post from './Post';
import { posts } from '../data/samplePosts'; // Impordime näidisandmed

const Posts = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h1 className="display-4">Posts</h1>
        </Col>
      </Row>
      <Row>
        {posts.map((post) => (
          <Post 
            key={post.id}
            id={post.id}
            title={post.title}
            body={post.content}
            userId={1}
          />
        ))}
      </Row>
    </Container>
  );
};

export default Posts;
