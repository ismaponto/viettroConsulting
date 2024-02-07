import React from 'react';
import { motion } from 'framer-motion';
import '../App.css';

function Paraquien() {
	const navigateToRetiros = () => {
		// Puedes utilizar React Router u otra lógica de navegación aquí
		window.location.href = '/retiros';
	};
	const navigateToAsesorias = () => {
		// Puedes utilizar React Router u otra lógica de navegación aquí
		window.location.href = '/asesorias';
	};
	const navigateToConsultorias = () => {
		// Puedes utilizar React Router u otra lógica de navegación aquí
		window.location.href = '/consultorias';
	};
	const navigateToFormaciones = () => {
		// Puedes utilizar React Router u otra lógica de navegación aquí
		window.location.href = '/formaciones';
	};
	return (
		<div className="flex w-full justify-center items-align-center shadow flex-col h-full">
			<h1 className="mb-2 flex flex-col center justify-center w-full text-3xl bg-blue-800 w-100 text-blue-50 text-bold dark:text-white h-24">
				{' '}
				Dejame contarte sobre los servicios que Viettro Consulting ofrece
			</h1>{' '}
			<div className="flex flex-col justify-center md:flex-row items-center md:h-72">
				{' '}
				<div className="max-w-sm w-full m-2 ">
					<h2 className="text-xl m-1">Consultorias estrategicas</h2>
					<p className="leading-6 h-36">
						Nuestras Consultorias son especiales para empresas que tienen una meseta de facturacion y
						quieren romper la barrera
					</p>
					<motion.button
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-4"
						onClick={navigateToConsultorias}
					>
						Saber mas sobre Consultorias Estrategicas{' '}
					</motion.button>
				</div>
				<div className="max-w-sm w-full m-2">
					<h2 className="text-xl m-1">Asesorias estrategicas</h2>
					<p className="leading-6  h-36">
						Nuestras asesorias estrategicas, estan orientadas a personas que necesitan organizar sus tiempos
						y activiades para llevar adelante su vida de mejor manera
					</p>
					<motion.button
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-4"
						onClick={navigateToAsesorias}
					>
						Saber mas sobre Asesorias Estrategicas{' '}
					</motion.button>
				</div>
				<div className="max-w-sm w-full m-2 ">
					<h2 className="text-xl m-1">Formaciones</h2>
					<p className="leading-6  h-36">
						Ademas de las formaciones que proponemos, tambien organizamos talleres para tu empresa
					</p>
					<motion.button
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-4"
						onClick={navigateToFormaciones}
					>
						Saber mas sobre Formaciones{' '}
					</motion.button>
				</div>
				<div className="max-w-sm w-full m-2">
					<h2 className="text-xl m-1">Retiros</h2>
					<p className="leading-6  h-36">
						Retiros detox de redes y team building es nuestro producto premium. Tienen precio por region y
						epoca, no dudes en contactarme para armar uno privado con tu empresa.
					</p>{' '}
					<motion.button
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-4"
						onClick={navigateToRetiros}
					>
						Saber mas sobre Retiros{' '}
					</motion.button>
				</div>
			</div>
			<div />{' '}
		</div>
	);
}

export default Paraquien;
