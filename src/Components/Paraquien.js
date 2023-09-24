import React from "react";

function Paraquien () {return(
    <div id="accordion-collapse" data-accordion="collapse" className="text-center text-blue-50">
      <h2 id="accordion-collapse-heading-1">
        <button type="button" className="flex items-center justify-between text-blue-50 bg-indigo-800 w-full p-5 font-medium text-left  border border-b-0 border-blue-50 rounded-t-xl focus:ring-4  text-blue-50 focus:ring-blue-50 dark:focus:ring-blue-50  dark:border-blue-50 dark:text-blue-50 hover:bg-gray-100 dark:hover:bg-gray-100" data-accordion-target="#accordion-collapse-body-1" aria-expanded="false" aria-controls="accordion-collapse-body-1">
          <span>Es el curso correcto para mi?</span>
          <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
          </svg>
        </button>   
      </h2>
      <div id="accordion-collapse-body-1" className="hidden" aria-labelledby="accordion-collapse-heading-1">
        <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
        <p className="mb-2 text-gray-500 text-bold dark:text-gray-400">Este servicio esta orientado hacia:</p>
          <p className="text-gray-500 dark:text-gray-400">Emprendedores digitales que se sienten desorganizados</p>
          <p className="text-gray-500 dark:text-gray-400"> Emprendedores que no tienen un plan de acción</p>
          <p className="text-gray-500 dark:text-gray-400">Empresas que sus niveles de facturación no crecen</p>
          <p className="text-gray-500 dark:text-gray-400">Personas que no saben ordenar sus objetivos y se sienten improductivas</p>
          <p className="text-gray-500 dark:text-gray-400">Personas que no saben gestionar su tiempo.</p>
        </div>
      </div>
      <h2 id="accordion-collapse-heading-2">
        <button type="button" className="flex items-center justify-between w-full p-5 font-medium text-left text-blue-50 border border-b-0 border-gray-200 bg-indigo-800 focus:ring-4 focus:ring-blue-50 dark:focus:ring-blue-50 dark:border-gray-700 dark:text-blue-50 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-collapse-body-2" aria-expanded="false" aria-controls="accordion-collapse-body-2">
          <span>Tenes algun bonus?</span>
          <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
          </svg>
        </button>
      </h2>
      <div id="accordion-collapse-body-2" className="hidden" aria-labelledby="accordion-collapse-heading-2">
        <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
        <p className="mb-2 text-gray-500 text-bold dark:text-gray-400">3 Ebooks de Emprendimiento</p>
          <p className="text-gray-500 dark:text-gray-400">Planillas de Organizacion y Planificacion Personal</p>
          <p className="text-gray-500 dark:text-gray-400"> Grabaciones club "Mente Estrategica"</p>
          <p className="text-gray-500 dark:text-gray-400">Material de Tecnicas de Fijacion de METAS</p>
          <p className="text-gray-500 dark:text-gray-400">Ademas, si quieres serguir los programas "Recupera tu foco" y Emprender: Mas alla de los Mitos, tendras un 25% de descuento</p>
</div>
      </div>
      <h2 id="accordion-collapse-heading-3">
        <button type="button" className="flex items-center justify-between w-full p-5 font-medium text-left text-blue-50 bg-indigo-800 border border-gray-200 focus:ring-4 focus:ring-blue-50 dark:focus:ring-blue-50 dark:border-gray-700 dark:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-100" data-accordion-target="#accordion-collapse-body-3" aria-expanded="false" aria-controls="accordion-collapse-body-3">
          <span>Y si no funciona?</span>
          <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
          </svg>
        </button>
      </h2>
      <div id="accordion-collapse-body-3" className="hidden" aria-labelledby="accordion-collapse-heading-3">
        <div className="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
        <p className="text-gray-500 dark:text-gray-400">Garantía de Resultados</p>
        <p className="text-gray-500 dark:text-gray-400">Garantía del 100 % del dinero o trabajamos gratis hasta conseguirlos</p>
        </div>
      </div>
    </div>
    
)
}
export default Paraquien