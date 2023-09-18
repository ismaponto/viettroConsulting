import React from 'react';
import CasodeExito1 from './casosDeExito/CasodeExito1';
import CasodeExito2 from './casosDeExito/CasodeExito2';
import CasodeExito3 from './casosDeExito/CasodeExito3';


const CasodeExito = () => {
  return (
<div className="flex w-full justify-center ">
  
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
