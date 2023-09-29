import React from 'react';
import imgMatias from "./soymatias/matias.jpg";
import "../App.css"

function Soymatias() {
  return (
    <div id="matias" className="flex w-full flex-wrap w-full justify-center ">

      <h3 className="mb-2 flex flex-col center justify-center w-full text-3xl bg-indigo-800  text-blue-50 text-bold dark:text-white h-36">
Creador del método High Stratégie    </h3>

      <div className="flex flex-row flex-wrap w-full justify-center  sm:w-auto ">
        <div className="flex flex-none inline-flex ">          
        <img className="flex max-w-sm overflow-hidden p-4" src={imgMatias} alt="Matias Viettro"/> 

        </div>

        <div className="flex flex-col max-w-xl flex-0 center leading-10 text-xxl text-gray-400 justify-center">
          <p  className='p-8'>Como gerente, emprendedor, abogado, máster en políticas públicas y en Administración Pública, he liderado más de 20 proyectos en los últimos 5 años.</p>
          <br />
          <p className='p-8'>Mi experiencia y formación teórica y práctica en planificación, gestión estratégica y gestión de proyectos me han llevado a desarrollar High Stratégie, un sistema de planificación que permite a mis clientes convertir sus deseos en metas alcanzables.</p>
        </div>
      </div>
    </div>
  );
}

export default Soymatias;
