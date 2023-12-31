import React from 'react';
import CasodeExito1 from './casosDeExito/CasodeExito1';
import CasodeExito2 from './casosDeExito/CasodeExito2';
import CasodeExito3 from './casosDeExito/CasodeExito3';


const CasodeExito = () => {
  return (
<div id={"exito"} className="flex flex row flex-wrap w-full justify-center  ">
<h4 className="mb-2 flex flex-col center justify-center font-manrope w-full text-3xl bg-indigo-800 w-100 text-blue-50 text-bold dark:text-white h-36 ">Algunas personas que ya han seguido el curso</h4>

  <div className="p-5">
    <CasodeExito1  />
  </div>
  <div className="p-5">
    <CasodeExito2  />
  </div>
  <div className="p-5">
    <CasodeExito3 />
  </div>
  


</div>

  );
};

export default CasodeExito;
