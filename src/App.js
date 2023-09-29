import './App.css';
import 'flowbite';
import Helmet from 'react-helmet';

import NavigationBar from './Components/NavigationBar';
import React from 'react';
import Jumbotron from './Components/Jumbotron';
import HighStrategy from "./Components/HighStrategy"
import CasosdeExito from "./Components/CasosdeExito"
import Stats from './Components/Stats';
import Contacto from "./Components/Contacto"
import Footer from "./Components/Footer"
import Paraquien from './Components/Paraquien';
import SoyMatias from './Components/soymatias';
function App() {
    return (<div className="App font-manrope">
    <Helmet>
      <title>Viettro Consulting - Gerente y Emprendedor</title>
      <meta
        name="Viettro Consulting"
        content="Viettro Consulting ofrece servicios de consultoría  en el sur de Francia. Matías Viettro, abogado con amplia experiencia, brinda consultorías en línea y presenciales para ayudar a empresas y particulares a resolver sus problemas de foco y facturacion con el metodo High Strategie"
        />
    </Helmet>
<Contacto />
<NavigationBar /> 
<Jumbotron />
<HighStrategy  />
<Paraquien  />
<CasosdeExito />
<SoyMatias />
<Stats />


<Footer />
        </div>
    );
}

export default App;