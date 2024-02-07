import '../App.css';

import React from "react";
import NavigationBar from "../Components/NavigationBar.js"
import Serviciosdescr from "../Components/serviciosdescr.js"
import Contacto from "../Components/Contacto.js"
import Footer from "../Components/Footer.js"


function LandingPage() {
    return (<div className="App font-manrope overflow-hidden">
<NavigationBar /> 
<Serviciosdescr />

<Contacto />

<Footer />
        </div>
    );
}

export default LandingPage;