import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Container, Col, Row } from 'react-bootstrap';
import Post from './Post';
import PaginationComponent from './PaginationComponent';
import { AuthContext } from './AuthContext';

const Posts = () => {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [posts, setPosts] = useState(null);
  const [pagination, setPagination] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 10; // Mitu postitust kuvatakse ühel lehel

  useEffect(() => {
    fetchPosts();
  }, [currentPage]);

  const fetchPosts = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get(`https://blog.hk.tlu.ee/posts?page=${currentPage}&limit=${limit}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setPosts(response.data.posts);
      setPagination(response.data.pagination);
    } catch (error) {
      if (error.response.status === 401) {
        logout();
        navigate('/login');
      }
    }
  };

  return (
    <Container>
      <Row>
        <Col>
          <h1 className="display-4">Posts</h1>
          <p>Kokku on {pagination && pagination.totalItems} postitust</p>
        </Col>
      </Row>
      <Row>
        {posts && posts.map((post) => (
          <Post 
            key={post.id}
            id={post.id}
            title={post.title}
            body={post.content}
            author={`${post.firstName} ${post.lastName}`}
            createdAt={post.created_at}
          />
        ))}
      {posts && <PaginationComponent
        totalPages={pagination.totalPages}
        currentPage={currentPage}
        onPageChange={(pageNumber) => setCurrentPage(pageNumber)}
      />}
      </Row>
    </Container>
  );
};

export default Posts;
