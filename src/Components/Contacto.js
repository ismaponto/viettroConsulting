import React from "react";
import { PopupWidget } from "react-calendly";

const Contacto = () => {
  return (
    <div className="App">
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
      />
    </div>
  );
};

export default Contacto