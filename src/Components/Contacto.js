import React from "react";
import { PopupWidget, InlineWidget } from "react-calendly";

const Contacto = () => {
  return (
    <div className="">
      <PopupWidget
        url="https://calendly.com/mativiettro"
        /*
         * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
         * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
         */
        rootElement={document.getElementById("root")}
        text="Organicemos una llamada!"
        textColor="#ffffff"
        color="#2737C9"
        data-collapse-toggle="navbar-default"
        className="w-48"
      />


  <div id={"contacto"}className="p-16 flex sm:flex-row flex-wrap h-100 bg-blue-100 justify-center items-center ">
      <h2 className="p-16 m-8 max-w-lg text-blue-800 tracking-widest text-xl">El 50% de las empresas fracasan en los primeros dos años,
       unite al grupo que superan esa brecha, organicemos una llamada para hablar del futuro de tus proyectos!</h2>
      <InlineWidget className='max-w-2xl rounded w-auto overflow-hidden' url="https://calendly.com/mativiettro" />
    </div>
  
    </div>
  );
};

export default Contacto 