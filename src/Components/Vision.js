import React from 'react';

const VisionComponent = () => {
	const text = `Nuestra visión es brindar asesoramientos profesionales high quality a más de 500 emprendedores e intraemprendedores a nivel internacional.`;

	return (
		<div className=" flex flex-col center justify-center font-manrope w-full text-3xl bg-blue-800 w-100 p-4 text-blue-50 text-bold dark:text-white h-36">
			<h2 className="blue-50 ">{text}</h2>
		</div>
	);
};

export default VisionComponent;
