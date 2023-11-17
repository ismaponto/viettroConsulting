import React from "react";
import imgpersona from "./img/persona1.jpg"

function CasodeExito1() {
    return (
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <img className="rounded-t-lg" src={imgpersona} alt="Imagen de persona" />
        <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold font-manrope tracking-tight text-gray-900 dark:text-white">Clara Heidi</h5>
             <p className="mb-3 font-normal  font-manrope text-gray-700 dark:text-gray-400">Desde que  con Matias, no solo mis ventas se duplicaron, mis dias son mas faciles!</p>
         
        </div>
      </div>
    );
  }
  
  export default CasodeExito1;