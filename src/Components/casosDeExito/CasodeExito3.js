import React from "react";
import imgpersona from "./img/persona3.jpg"

function CasodeExito1() {
    return (
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <img className="rounded-t-lg" src={imgpersona} alt="Imagen de persona" />
        <div className="p-5">
            <h5 className="mb-2 text-2xl font-manrope font-bold tracking-tight text-gray-900 dark:text-white">Tanya Fernandez</h5>
          <p className="mb-3 font-normal font-manrope text-gray-700 dark:text-gray-400">Siempre trabaje con el mismo profesionalismo, pero antes no vendia, Me frustraba y pensaba que mis panes eran malos. La realidad es que no veia que nadie conocia mi panaderia, con Matias revolvimos juntos los posibles motivos hasta que encontramos una solucion, hoy mi negocio crece dia a dia </p>
          
        </div>
      </div>
    );
  }
  export default CasodeExito1