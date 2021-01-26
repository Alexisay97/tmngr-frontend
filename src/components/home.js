import React, {useState,useContext, useEffect} from 'react';
import {Link} from 'react-router-dom';
import Carousel from './subComps/carousel';

//import M from "materialize-css";



import {AuthContext} from '../context/authContext';
import defaultImg from '../img/default-photo.jpg';

const Home = () => {    //TODO: Hacerle mas detalles al login

    const {isAuth,setIsAuth} = useContext(AuthContext);
    
    const carouImgs = [{ id: "#one" , imgUrl : "img/ues.jpg"} , 
                       {id : "#two" , imgUrl : "img/ues.jpg"} ,
                       {id : "#three" , imgUrl : "img/ues.jpg"} ];

    useEffect(() => {
        
    },[]);

    const modalDeparts = () => {

        

    }

    const unAuthHome = () => {
        return(
            <div className="pixelBG">
            
            <div className="row">

            <div className="col s12 m5 offset-m1" style={{paddingTop: '2%'}}>    {/* style={{marginTop: '5%', marginLeft: '5%'}} */}
            <Carousel indexC="true" imgs={carouImgs} interval={4000}/>{/*indexC indica si se esta en la pag de inicio*/}
            </div>

            <div className="col s12 m5" style={{paddingTop: '1.5%'}}>    {/* style={{marginTop: '5%', marginLeft: '5%'}} */}
                <div className="row">
                    <div className="card horizontal lighten-2">
                    <div className="card-image">
                        <img src="img/inicio/alumno.jpg"/>
                    </div>
                    <div className="card-stacked">
                    <div className="card-content">
                    <h5>Felicidades!</h5>{/*<div class="chip green">Jane Doe</div>*/}
                    <p>Estudiante, sabemos que ha sido un largo camino para llegar hasta aca, la recta final 
                    Este sistema te acompa;ara durante tu estancia en el proceso de tesis.</p>
                    
                    <Link to="/Register" className="btn btn-flat waves-effect halfway-fab">
                    Registrarse <i className="material-icons right">school</i></Link>
                    </div>{/* fin card content */}
                    </div>{/* fin card stacked */}
                    </div>

                    <div className="card horizontal lighten-2">
                    <div className="card-image">
                        <img src="img/inicio/docente.jpg"/>
                    </div>
                    <div className="card-stacked">
                    <div className="card-content">
                    <h5>Bienvenido, docente!</h5>
                    <p>Esta herramienta te ayudara a asesorar a estudiantes en tesis, podras administrar
                    los grupos que se te han asignado y evaluarlos de manera rapida y eficaz, comenzemos!</p>
                    <Link to="/Register" className="btn btn-flat waves-effect halfway-fab">
                    Registrarse <i className="material-icons right">supervisor_account</i></Link>
                    </div>{/* fin card content */}
                    </div>{/* fin card stacked */}
                    </div>
                </div>
            </div>

            </div>
            
            
            </div>
        )
    }

    const AuthHome = () => {

        return(
            <div className="row">
            <h1>Bienvenido!</h1>
            <img src={defaultImg} alt="foto de perfil" width="100px"></img>
            </div>
        )
    }

    return(
     <div>
         { !isAuth ? unAuthHome() : AuthHome() }
     </div>   
    
)
}

export default Home;

/*
<div className="card-panel lighten-2">
                <h5>Estudiante, felicidades!.</h5>
                    <p>Sabemos que ha sido un largo camino para llegar hasta aca.
                    Al fin has egresado de tu carrera, por lo que te encuentras en la recta final. 
                    Este sistema te acompa;ara durante tu estancia en el proceso de tesis.</p>
                    <center><Link className="btn waves-effect waves-light ues" to="/Register">
                    Registrate <i className="material-icons right">school</i></Link></center>
                </div>
*/