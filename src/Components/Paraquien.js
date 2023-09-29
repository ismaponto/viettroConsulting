import React from 'react';
import imgpersona from "./Paraquien/people.svg"
import imgemprendedor from "./Paraquien/emprendedor.svg"
import imgfrustrated from "./Paraquien/frustrated.svg"
import imggoal from "./Paraquien/goal.svg"

function Paraquien() {
  return ( <div className="flex flex-wrap w-full justify-center md:flex-col">
 
  <h2 className="mb-2 flex flex-col center justify-center w-full text-3xl bg-indigo-800 w-100 text-blue-50 text-bold dark:text-white h-36">
    ¿Es el método High Stratégie para mí?
  </h2>

    <div className="flex flex-row flex-wrap md:flex-col w-full justify-center  ">
      <div className="flex flex-none inline-flex p-8">
        <img className="max-w-xs" src={imgpersona} alt="personas" />
      </div>
    
      <div className="flex flex-col max-w-lg flex-0 center text-xl text-gray-500 justify-center"><ul className='list-disc '>
         <li>       <p>Para personas que se sienten desorganizadas y no tienen un plan</p>
</li>
      <li>       <p>Para personas que no saben ordenar sus objetivos y se sienten improductivas</p>
</li>
      </ul>
      </div>

    </div>



    <div className="flex flex-row flex-wrap w-full justify-center sm:flex-col">
   
       <div className="flex flex-col max-w-lg center text-xl text-gray-500 justify-center p-8"><ul className='list-disc'><li>       <p>Para emprendedores que se sienten desorganizados</p>
</li>
       <li>       <p>Para emprendedores que no tienen un plan</p>
</li>
       <li>       <p>Para empresas cuyos niveles de facturación no crecen</p>
</li></ul>
       
      </div>
      <div className="flex flex-none inline-flex p-8">
        <img img className="max-w-xs"src={imgemprendedor} alt="emprendedores" />
      </div>
    </div>



    <div className="flex p-8 flex-row flex-wrap w-full justify-center md:flex-col p-2">
        
    <div className="flex flex-none inline-flex p-8">
        <img img className="max-w-xs"src={imgfrustrated} alt="emprendedores" />
      </div>
      <div className="flex flex-col  max-w-lg center text-xl text-gray-500 justify-center p-8">
       <p>Estás cansado de: </p><ul className='list-disc'>
       <li>       <p>Ver cómo otros emprendedores triunfan mientras tú te quedas atrás?</p>
</li>
       <li>       <p>Perder tiempo y dinero en tu negocio.</p>
</li>
       <li>       <p>Desmotivarte y abandonar tu sueño</p>
</li>

       </ul>
      
<h3 className='text-xxl text-gray-700'>La mayoría de los emprendedores fracasan en los primeros 5 años</h3>
      </div>
      
    </div>

    <div className="flex p-8 flex-row flex-wrap w-full justify-center md:flex-col  p-6">
    
      <div className="flex flex-col max-w-lg center text-xl text-gray-500 justify-center p-24">
          <h3>Conmigo vas a: </h3><ul className='list-disc'><li>       <p>Convertirte en un emprendedor con alto foco, que sabe a dónde va. </p>
</li>
          <li>       <p>Sabrás planificar y organizar tu negocio.</p>
</li>
          <li>       <p>Verás aumentar tu facturación.</p>
</li></ul>

      </div>
      <div className="flex flex-none flex-row inline-flex p-8 ">
        <img img className="max-w-xs"src={imggoal} alt="emprendedores" />
      </div>
    </div>


    
  </div>
  );
}

export default Paraquien;