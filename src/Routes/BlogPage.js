import '../App.css';
import PostThumbnail from '../Components/PostThumbnails.js';
import React from 'react';
import NavigationBar from '../Components/NavigationBar.js';
import Contacto from '../Components/Contacto.js';
import Footer from '../Components/Footer.js';

const BlogPage = ({ posts }) => {
	const latestPosts = posts.slice(0, 5);
	return (
		<div className="App font-manrope overflow-hidden">
			<NavigationBar />
			<h1 className="mb-2 flex flex-col center justify-center w-full text-3xl bg-blue-800 w-100 text-blue-50 text-bold dark:text-white h-24">
				Blog, un espacio para copartir consejos y tecnicas
			</h1>
			<div>
				<h2>Últimos Posts</h2>
				{latestPosts.map((post) => <PostThumbnail key={post.id} post={post} />)}
			</div>
			<Contacto />
			<Footer />
		</div>
	);
};

export default BlogPage;
