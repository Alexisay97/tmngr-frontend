import React, {useCallback, useContext} from 'react';
import TopBar from './components/subComps/topbar';
import NavBar from './components/subComps/navbar';
import Home from './components/home';
import Login from './components/login';
import Register from './components/register';
import Cars from './components/cars';
import Premium from './components/premium';

import M from "materialize-css";

import PrivateRoute from './HO_components/privateRoute';
import PublicRoute from './HO_components/publicRoute';

import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';

import {AuthContext} from './context/authContext';
// continuar con parte 8 minuto 12

/** checkpoint: Utilizamos React context para conocer el estado de las diferentes cosas
 * utilizamos React Router para cargar componentes cuando se quiere acceder a x ruta,
 * Todos los componentes estan en la carpeta components. Debemos poner todos los componentes en contexto haciendo uso de "context"
 * el contexto de la aplicacion se da en base a los servicios que se obtienen de la api (usuario logueado, tema/colores del programa, etc)
 */

function App() {

  const {isAuth} = useContext(AuthContext);

  const menuButton = () => {  //boton flotante, puede servir luego
  return (      
  <div className="fixed-action-btn" style={{right: 'auto', marginLeft: '3%'}}>
    <a className="btn-floating waves-light btn-large ues sidenav-trigger" data-target="slide-out">
      <i className="large material-icons">mode_edit</i>
    </a>
  </div>
  );
  }

  return (
    <Router>
      {isAuth ? <TopBar/> : null}
      {isAuth ? <NavBar/> : null}
      <Route exact path="/" component={Home}/>
      <PublicRoute path="/Login" component={Login}/>
      <PublicRoute path="/Register" component={Register}/>
      <PrivateRoute path="/Autos" roles={["normal","premium"]} component={Cars}/>  {/* ruta a la que solo puede acceder un usuario (normal/premium)*/}
      <PrivateRoute path="/Premium" roles={["premium"]} component={Premium}/>
      <Redirect to="/"/> {/* para redireccionar cualquier otra ruta a la pagina de inicio*/}
      
    </Router>
  );
}

export default App;
