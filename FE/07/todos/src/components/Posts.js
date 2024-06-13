/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { Container, Row, Card } from 'react-bootstrap';
import axios from 'axios';

function Posts() {
  const [posts, setPosts] = useState([]);
  async function fetchData() {
    try {
      const response = await axios.get('https://blog.hk.tlu.ee/posts');
      setPosts(response.data.posts);
      console.log(posts);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  },[]);
    
  return (
    <>
      <Row>
        <h1>Posts</h1>
      </Row>
      <Row>
        {posts.map((post) => (
          <Card style={{ margin: '5px' }} key={post.id}>
          <Card.Body>
            <Card.Title>{post.title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
            <Card.Text>
              {post.body}
            </Card.Text>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>
        </Card>
        ))}
        </Row>
    </>
  );
}

export default Posts;
