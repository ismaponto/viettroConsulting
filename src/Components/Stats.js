import React from "react";

function Stats () {return(
    <section className="bg-indigo-800  dark:bg-gray-900"> 
  <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
    <dl className="grid max-w-screen-md gap-8 mx-auto text-blue-50 sm:grid-cols-3 dark:text-blue-50">
      <div className="flex flex-col items-center justify-center">
        <dt className="mb-2 text-3xl md:text-4xl font-extrabold">15</dt>
        <dd className="font-light text-blue-50 dark:text-blue-50">Nuevos Emprendedores</dd>
      </div>
      <div className="flex flex-col items-center justify-center">
        <dt className="mb-2 text-3xl md:text-4xl font-extrabold">40</dt>
        <dd className="font-light text-blue-50 dark:text-blue-50">Empresas trabajando actualmente conmigo</dd>
      </div>
      <div className="flex flex-col items-center justify-center">
        <dt className="mb-2 text-3xl text-blue-50 md:text-4xl font-extrabold">300k</dt>
        <dd className="font-light text-blue-50 dark:text-blue-50">de dolares m'as generados en un año a partir del uso de la estrategia </dd>
      </div>
    </dl>
  </div>
</section>
)
}
export default Stats