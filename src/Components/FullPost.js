// FullPost.js
import React from 'react';
import { useParams } from 'react-router-dom';

const FullPost = ({ posts }) => {
	const { postId } = useParams();
	const post = posts.find((p) => p.id === parseInt(postId, 10));

	if (!post) {
		return <p> Post no encontrado </p>;
	}

	return (
		<div>
			<h1> {post.title} </h1> <img src={post.thumbnail} alt={post.title} /> <p> {post.content} </p>{' '}
		</div>
	);
};

export default FullPost;
