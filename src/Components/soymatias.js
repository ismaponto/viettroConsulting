import React from 'react';
import imgMatias from "./soymatias/matiasreu.jpg"

function Soymatias() {
  return (<div className="flex flex-wrap w-full justify-center md:flex-col">
  <h3 className="mb-2 flex flex-col center justify-center w-full text-3xl bg-indigo-800 w-100 text-blue-50 text-bold dark:text-white h-36">
Soy Matias  </h3>
  

    <div className="flex flex-row  md:flex-col w-full justify-center md:flex-wrap  ">
      <div className="flex flex-none inline-flex p-8">
        <img className="h-96" src={imgMatias} alt="personas" />
      </div>
    
      <div className="flex flex-col max-w-xl flex-0 center leading-10 text-xl text-xxl text-gray-400 justify-center">
       <p>Como gerente, emprendedor, abogado, máster en políticas públicas y en Administración Pública, he liderado más de 20 proyectos en los últimos 5 años. Mi experiencia y formación teórica y práctica en planificación, gestión estratégica y gestión de proyectos me han llevado a desarrollar High Stratégie,
         un sistema de planificación que permite a mis clientes convertir sus deseos en metas alcanzables.</p>
      </div>
    </div>

  </div>

    
  );
}

export default Soymatias;