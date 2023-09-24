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
import Paraquien from './Components/Paraquien';
function App() {
    return ( <div className = "App" >
<Contacto />
<NavigationBar /> 
<Jumbotron />
<HighStrategy />
<Paraquien />
<CasosdeExito />

<Stats id="Contacto"/>


<Footer />
        </div>
    );
}

export default App;