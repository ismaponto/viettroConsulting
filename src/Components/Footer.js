import React from 'react';
import instagramico from './ico/instagram.png';
import linkedinico from './ico/linkedin.png';

function Footer() {
	return (
		<footer className="flex bg-white w-full   items-center justify-center rounded-lg shadow  dark:bg-gray-800 p-8">
			<div className="max-w-screen-xl p-4 flex items-center justify-center">
				<span className="flex flex-row text-sm text-gray-500 sm:text-center dark:text-gray-400">
					{' '}
					©2023 <p href="#Contacto"> developed by </p>{' '}
					<a href="https://www.calimeradev.com" className="hover:underline">
						CalimeraDev
					</a>
					.{' '}
				</span>{' '}
				<ul className="flex flex-wrap">
					<li className="p-2">
						<a href="https://www.instagram.com/matiasviettro/" className="hover:underline">
							<img src={instagramico} alt="Instagram" className="w-10 hover:bg-blue-500" />
						</a>{' '}
					</li>{' '}
					<li className="p-2 ">
						<a
							href="https://www.linkedin.com/in/matias-viettro-593759271/"
							className="mr-4 hover:underline md:mr-6"
						>
							<img src={linkedinico} alt="LinkedIn" className="w-10 rounded hover:bg-blue-500" />
						</a>{' '}
					</li>
				</ul>{' '}
			</div>{' '}
		</footer>
	);
}

export default Footer;
