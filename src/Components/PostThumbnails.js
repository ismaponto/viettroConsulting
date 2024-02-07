// PostThumbnail.js
import React from 'react';
import { Link } from 'react-router-dom';

const PostThumbnail = ({ post }) => {
  return (
    <div>
      <h2>{post.title}</h2>
      <img src={post.thumbnail} alt={post.title} />
      <p>{post.excerpt}</p>
      <Link to={`/blog/${post.id}`}>Ver más</Link>
    </div>
  );
};

export default PostThumbnail;