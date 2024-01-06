import '../App.css';

import React from "react";
import NavigationBar from "../Components/NavigationBar.js"
import Jumbotron from '../Components/Jumbotron.js';
import HighStrategy from "../Components/HighStrategy.js"
import CasosdeExito from "../Components/CasosdeExito.js"
import Stats from '../Components/Stats.js';
import Contacto from "../Components/Contacto.js"
import Footer from "../Components/Footer.js"
import VisionComponent from '../Components/Vision.js';
// import Paraquien from '../Components/Paraquien.js';
import SoyMatias from '../Components/soymatias.js';


function LandingPage() {
    return (<div className="App font-manrope overflow-hidden">
   
<NavigationBar /> 
<Jumbotron />
<HighStrategy  />
{/* <Paraquien  /> */}
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