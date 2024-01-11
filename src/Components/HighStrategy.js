import React from 'react';
import imgHigh from "./img/HighStrategy.jpg"

const HighStrategy = () => {
  return (
    <div id="metodo" className= "Highstrategy p-8 flex center flex-col">
      <h1 className="mb-4 bg-main text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
        "High Stratégie Method: Transforma tus sueños en realidad"        </span>{" "}      </h1>
      <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
      Descubre cómo nuestra estrategia alta puede llevar tu negocio al siguiente nivel</p>
      <img className="h-auto max-w-lg-full mx-auto" src={imgHigh} alt="High Stratégie Method" />
    </div>
  );
};

export default HighStrategy;
