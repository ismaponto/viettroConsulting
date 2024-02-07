// FullPost.js
import React from 'react';
import { useParams } from 'react-router-dom';
import NavigationBar from '../Components/NavigationBar.js';
import Contacto from '../Components/Contacto.js';
import Footer from '../Components/Footer.js';
const FullPost = ({ posts }) => {
	const { postId } = useParams();
	const post = posts.find((p) => p.id === parseInt(postId, 10));

	if (!post) {
		return <p> Post no encontrado </p>;
	}

	return (
		<div>
            <NavigationBar />
			<h1> {post.title} </h1> <img src={post.thumbnail} alt={post.title} /> <p> {post.content} </p>{' '}
            <Contacto />
            <Footer />
		</div>
	);
};

export default FullPost;
