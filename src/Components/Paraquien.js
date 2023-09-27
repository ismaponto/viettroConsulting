import React from 'react';
import imgpersona from "./Paraquien/people.svg"
import imgemprendedor from "./Paraquien/emprendedor.svg"
import imgfrustrated from "./Paraquien/frustrated.svg"
import imggoal from "./Paraquien/goal.svg"

function Paraquien() {
  return (<div className="flex flex-wrap w-full justify-center md:flex-col">
  <h4 className="mb-2 flex flex-col center justify-center w-full text-3xl bg-indigo-800 w-100 text-blue-50 text-bold dark:text-white h-36 "> 
  ¿Es el método High Stratégie para mí?
  </h4>
  

    <div className="flex flex-row flex-wrap md:flex-col w-full justify-center  ">
      <div className="flex flex-none inline-flex p-8">
        <img className="w-96" src={imgpersona} alt="personas" />
      </div>
    
      <div className="flex flex-col max-w-lg flex-0 center text-xl text-gray-500 justify-center">
       <p>Para personas que se sienten desorganizadas y no tienen un plan</p>
       <p>Para personas que no saben ordenar sus objetivos y se sienten improductivas</p>
      </div>
    </div>



    <div className="flex flex-row-reverse flex-wrap w-full justify-center md:flex-col">
   
       <div className="flex flex-col max-w-lg center text-xl text-gray-500 justify-center p-8">
       <p>Para emprendedores que se sienten desorganizados</p>
       <p>Para emprendedores que no tienen un plan</p>
       <p>Para empresas cuyos niveles de facturación no crecen</p>
      </div>
      <div className="flex flex-none inline-flex p-8">
        <img img className="w-96"src={imgemprendedor} alt="emprendedores" />
      </div>
    </div>



    <div className="flex p-8 flex-row flex-wrap w-full justify-center md:flex-col p-2">
        
    <div className="flex flex-none inline-flex p-8">
        <img img className="w-72"src={imgfrustrated} alt="emprendedores" />
      </div>
      <div className="flex flex-col  max-w-lg center text-xl text-gray-500 justify-center p-8">
       <p>Estás cansado de: </p>
       <p>ver cómo otros emprendedores triunfan mientras tú te quedas atrás?</p>
       <p>Perder tiempo y dinero en tu negocio.</p>
       <p>Desmotivarte y abandonar tu sueño</p>
<h3 className='text-xxl text-gray-700'>La mayoría de los emprendedores fracasan en los primeros 5 años</h3>
      </div>
      
    </div>

    <div className="flex p-8 flex-row flex-wrap w-full justify-center md:flex-col  p-6">
    
      <div className="flex flex-col max-w-lg center text-xl text-gray-500 justify-center p-24">
          <h3>Conmigo vas a: </h3>
       <p>Convertirte en un emprendedor con alto foco, que sabe a dónde va. </p>
       <p>Sabrás planificar y organizar tu negocio.</p>
       <p>Verás aumentar tu facturación.</p>

      </div>
      <div className="flex flex-none flex-row inline-flex p-8 ">
        <img img className="w-96"src={imggoal} alt="emprendedores" />
      </div>
    </div>


    
  </div>
  );
}

export default Paraquien;