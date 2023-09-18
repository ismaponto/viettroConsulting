import React from 'react';
import conferenceImage from "./jumbotron/conference.jpg"

const Jumbotron = () => {
  return ( <section
    className="bg-center bg-no-repeat bg-cover bg-gray-700 bg-blend-multiply"
    style={{
      backgroundImage: `url(${conferenceImage})`,
      backgroundColor: 'rgba(39, 55, 201, 0.7)' // Opcional: Cambiar el color de fondo si lo deseas
    }}>
      <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">Del Caos al orden</h1>
        <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">No podes encontrarle la vuelta al desorden de tu empresa? Intentas muchas cosas pero no conseguis objetivos?
        Con el metodo High Strategie vamos a ordenar tus esfuerzos para alcanzar las metas</p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          <a href="#Contacto" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
Quiero Saber como ya            <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
          </a>
          <a href="#Metodo" className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
Quizas mas tarde          </a>  
        </div>
      </div>
    </section>
  );
};

export default Jumbotron;