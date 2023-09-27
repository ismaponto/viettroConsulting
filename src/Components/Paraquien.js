import React from 'react';
import imgpersona from "./Paraquien/people.svg"
import imgemprendedor from "./Paraquien/emprendedor.svg"

function Paraquien() {
  return (<div className="flex flex-col w-full justify-center md:flex-col  ">
  <h4 className="mb-2 flex flex-col center justify-center w-full text-3xl bg-indigo-800 w-100 text-blue-50 text-bold dark:text-white h-48 "> 
  Es el m'etodo Hig Strategie para mi?
  </h4>
  
    <div className="flex p-5 flex-row flex-wrap md:flex-col w-full justify-center  ">
    <div className="flex flex-none inline-flex ">
        <img className="w-96" src={imgpersona} alt="personas" /></div>
    
      <div className="flex flex-col flex-0 center text-xl text-gray-500 justify-center p-8">
      <p>Para personas que se sienten desorganizadas y no tiene un plan.</p>
      <p>Para personas que no saben ordenar sus objetivos y se sienten improductivas.</p>
      </div>
     </div>



    <div className="flex p-5 flex-row flex-wrap w-full justify-center md:flex-col">
        <div className="flex flex-col center text-xl text-gray-500 justify-center p-8">
          <p>Para personas que se sienten desorganizadas y no tiene un plan.</p>
          <p>Para personas que no saben ordenar sus objetivos y se sienten improductivas.</p>
      </div>
      <div className="flex flex-none inline-flex">
        <img img className="w-96"src={imgemprendedor} alt="emprendedores" />
      </div>
    </div>

 
    
  
  
  </div>
  );
}

export default Paraquien;
