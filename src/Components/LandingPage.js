import '../App.css';

import React from "react";
import NavigationBar from "./NavigationBar.js"
import Jumbotron from './Jumbotron.js';
import HighStrategy from "./HighStrategy.js"
import CasosdeExito from "./CasosdeExito.js"
import Stats from './Stats.js';
import Contacto from "./Contacto.js"
import Footer from "./Footer.js"
import VisionComponent from './Vision.js';
import Paraquien from './Paraquien.js';
import SoyMatias from './soymatias.js';


function LandingPage() {
    return (<div className="App font-manrope overflow-hidden">
   
<NavigationBar /> 
<Jumbotron />
<HighStrategy  />
<Paraquien  />
<CasosdeExito />
<SoyMatias />
<Stats />
<VisionComponent />

<Contacto />

<Footer />
        </div>
    );
}

export default LandingPage;