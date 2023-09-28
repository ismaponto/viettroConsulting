import React from "react";
import imgpersona from "./img/persona2.jpg"

function CasodeExito2() {
    return (
      <div className="max-w-sm border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <img className="rounded-t-lg" src={imgpersona} alt="Imagen de persona" />
        <div className="p-5">
            <h5 className="mb-2 text-2xl font-manrope font-bold tracking-tight text-gray-900 dark:text-white">Pedro Sirmarilion</h5>
          <p className="mb-3 font-normal  font-manrope text-gray-700 dark:text-gray-400">Desde 2017 que intentaba vivir de la fotografia, pero no fue hasta que empece a aplicar el metodo de High Stratégie que pude dejar mi trabajo de 5 por 8 para poder vivir </p>
    
        </div>
      </div>
    );
  }
  
  export default CasodeExito2;