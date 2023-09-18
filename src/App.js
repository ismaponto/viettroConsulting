import './App.css';
import 'flowbite';

import NavigationBar from './Components/NavigationBar';
import React from 'react';
import Jumbotron from './Components/Jumbotron';
import HighStrategy from "./Components/HighStrategy"
import CasosdeExito from "./Components/CasosdeExito"
import Stats from './Components/Stats';
import Contacto from "./Components/Contacto"
import Footer from "./Components/Footer"

function App() {
    return ( <div className = "App" >
        
<NavigationBar /> 
<Jumbotron />
<HighStrategy />
<CasosdeExito />
<Stats />
<Contacto />
<Footer />
        </div>
    );
}

export default App;