import './App.css';

import React from "react";
import NavigationBar from "./Components/NavigationBar"
import Jumbotron from './Components/Jumbotron';
import HighStrategy from "./Components/HighStrategy"
import CasosdeExito from "./Components/CasosdeExito"
import Stats from './Components/Stats';
import Contacto from "./Components/Contacto"
import Footer from "./Components/Footer"
import VisionComponent from './Components/Vision.js';
import Paraquien from './Components/Paraquien';
import SoyMatias from './Components/soymatias';
function App() {
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

export default App;