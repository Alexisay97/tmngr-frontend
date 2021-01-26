import React, {useState,useRef,useEffect} from 'react'; //useRef is for setting a "timeout", useEffect is for cleaning the 'timeout'
import AuthService from '../services/authService';
import {Departamentos, Carreras} from '../services/carrerasydeps';
import Carousel from './subComps/carousel';
import InputItem from "./subComps/inputitem";//
import Message from './subComps/message';

import M from "materialize-css";    //TODO: importar esto demasiadas veces crea un bug en los waves effect

const emptyUsr = {Codigo : "", Nombres : "", Apellidos : "", DUI : "", Tipo : "", Carrera : "", Correo : "", Departamento : "", Password : ""};



const emptyStud = {Codigo : "", Password : ""};

const Register = (props) => {

    const [user,setUser] = useState(emptyUsr);
    //const [estud,setEstud] = useState(emptyStud);
    const [carreraz,setCarreraz] = useState(null);
    //const [message,setMessage] = useState(null);
    
    //TODO: poner las imagenes adecuadas, remover el regHeader y poner una imagen
    const carouImgs = [{ id: "#one" , imgUrl : "img/registro/normal1.jpg"} , 
                        {id : "#two" , imgUrl : "img/ues.jpg"} ,
                        {id : "#three" , imgUrl : "img/ues.jpg"} ];

    //const RegConfig;

    let timerID = useRef(null);

    useEffect(() => {   //para "limpiar" el timeout

    //TODO: cargar el respectivo formulario de registro dependiendo de la ruta

    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems);

    var el = document.querySelector('.tabs');
    var instance = M.Tabs.init(el, {});

        return () =>{
            clearTimeout(timerID);
        }
    },[carreraz]);//llamar useEffect cuando cambien las carreras

    const onInputChange = e => {
        
        //TODO: Validar la entrada del usuario
        setUser({...user,[e.target.name] : e.target.value});

        //mencionamos nada mas los campos restantes y seteamos el campo que acciono "onInputChange"
    }

    const onConfirmChange = e => {
        //confirmamos la contrasenia
    }

    const onDepChange = e => {  
        setUser({...user,[e.target.name] : e.target.value});
        let id = parseInt(e.target.value) - 1;

        setCarreraz(Carreras[id]);

       //console.log('c cambio');

    }

    const resetForm = ()=>{
        setUser(emptyUsr);
    }

    const onRegisterSubmit = e => {
        e.preventDefault();

        let Cod = "DOC-" + user.DUI;
        let tip = "docente";

        setUser({...user,Codigo : Cod, Tipo : tip});

        console.log(user);
        console.log(props.location.pathname);
        /*
        AuthService.register(user).then( data => { //inicio de sesion
            const { error , message } = data;
            console.log(data);
            //setMessage(message);
            resetForm();

            if(!error){
                
                timerID = setTimeout(() =>{ props.history.push('/Login'); }, 2000); //mostrar un mensaje durante 2 segundos
                
                console.log("registro exitoso");
            }
            else{ console.log("error de registro");} //setMessage(message);S
        });*/
    }

    const onEelSubmit = () =>{

        console.log("si");

    }

    const regHeader = () => {
        return(
            <div className="card horizontal darkUes">
            <div className="card-image">
                <img src="img/registro/ues.jpg"/>
            </div>
            <div className="card-stacked white-text">
            <div className="card-content">
            <h6 className="center-align">REGISTRO</h6>{/*<div class="chip green">Jane Doe</div>*/}
            <p>Los datos que ingreses seran enviados
            al coordinador de tesis de tu departamento, luego de que sean confirmados 
            podras acceder al sistema. Consulta el cuadro a la derecha para obtener ayuda
            </p>
            
            </div>{/* fin card content */}
            </div>{/* fin card stacked */}
            </div>
        );
    }   

    const registerForm = (c) => {//TODO : Terminar el formulario de registro, y solicitud a API
        return(
        <div className="card white" style={{paddingTop: '0px', height: '550px'}}>

        <div className="card-tabs">
        <ul className="tabs tabs-fixed-width">
            <li className="tab"><a className="active" href="#tab1">Info Personal</a></li>
            <li className="tab"><a href="#tab2">Contraseña</a></li>
        </ul>
        </div>

        <div className="card-content">

        <div id="tab1">
        <blockquote>1. Llena los campos con tu informacion personal</blockquote>
        <div className="row">
        <InputItem name="Nombres" caption="Nombres" onInputChange={onInputChange}
        iconname="account_circle" width="col s12 m6"/>
        <InputItem name="Apellidos" caption="Apellidos" onInputChange={onInputChange}
        iconname="supervised_user_circle" width="col s12 m6"/>
        
        <InputItem name="DUI" caption="DUI" onInputChange={onInputChange}
        iconname="credit_card" width="col s12 m4"/>
        <InputItem name="Correo" caption="Correo Electronico Institucional" onInputChange={onInputChange}
        iconname="alternate_email" width="col s12 m8"/>
        </div>

        <blockquote>2. Escoge tu departamento y luego tu carrera</blockquote>

        <div className="row">
        <InputItem name="Departamento" caption="Departamento" onInputChange={onDepChange}
        iconname="home_work" width="col s12" inputtype="select" options={Departamentos}/>

        {c ? 
        <InputItem name="Carrera" caption="Carrera" onInputChange={onInputChange}
        iconname="engineering" width="col s12" inputtype="select" options={carreraz}/> :
        <InputItem name="Carrera" disabled={true} caption="Carrera" onInputChange={onInputChange}
        iconname="engineering" width="col s12" inputtype="select" options={[]}/>
        }

        </div>

        </div>{/* Fin tab */}

        <div id="tab2">
        <blockquote>3. Ingresa una contraseña segura</blockquote>
        <div className="row">
        <InputItem name="Password" inputtype="pwd" caption="Contraseña" onInputChange={onInputChange}
        iconname="lock_open" width="col s12 m9 offset-m1"/>

        <InputItem name="confirmPassword" inputtype="pwd" caption="Confirma tu Contraseña" onInputChange={onConfirmChange}
        iconname="lock" width="col s12 m9 offset-m1"/>
        </div>
        
        
        <blockquote>4. Acepta los terminos y condiciones de uso</blockquote>
        
        <center className="row"><p><label>
        <input type="checkbox" className="filled-in"/>
        <span>Acepto Todos Los <a href="#">Terminos y Condiciones</a></span>
        </label></p></center>

        <center className="row">
        <br/>
        <button onClick={onRegisterSubmit} className="btn waves-effect ues" name="action">Registrate
        <i className="material-icons right">how_to_reg</i></button>
        </center>
        
        

        </div>{/* Fin tab */}

        </div>{/* fin card content */}
        </div>
        )
    }

    const eelRegister = () =>{
        return(
            <div className="card white" style={{paddingTop: '0px', height: '550px'}}>
    
            <div className="card-content">
            
            <blockquote>1. Ingresa a tu expediente en linea</blockquote>
            <div className="row">
            <InputItem name="Codigo" caption="Usuario" onInputChange={onInputChange}
            iconname="account_circle" width="col s12 m9 offset-m1"/>
            
            <InputItem name="Password" inputtype="pwd" caption="Contraseña" onInputChange={onInputChange}
            iconname="lock_open" width="col s12 m9 offset-m1"/>
            </div>
            
            <blockquote>2. Acepta los terminos y condiciones de uso</blockquote>
            
            <center className="row"><p><label>
            <input type="checkbox" className="filled-in"/>
            <span>Acepto Todos Los <a href="#">Terminos y Condiciones</a></span>
            </label></p></center>
    
            <center className="row">
            <br/>
            <button onClick={onEelSubmit} className="btn waves-effect ues" name="action">Registrate
            <i className="material-icons right">how_to_reg</i></button>
            </center>
    
            </div>{/* fin card content */}
            </div>
            )
    }

    return(
        <div className="pixelBG">
            
            <div className="row">

            <div className="col s12 m5 offset-m1" style={{paddingTop: '1.5%'}}>    {/* style={{marginTop: '5%', marginLeft: '5%'}} */}
                <div className="row">
                {eelRegister()}
                {/*carreraz ? registerForm(carreraz) : registerForm()*/}   
                {/*carreraz ? <p>SiS</p> : <p>NoN</p>*/}
                </div>
            </div>

            <div className="col s12 m5" style={{paddingTop: '1.5%'}}>    {/* style={{marginTop: '5%', marginLeft: '5%'}} */}
            {regHeader()}
            <Carousel imgs={carouImgs} interval={10000} cheight="335px"/>{/*indexC indica si se esta en la pag de inicio*/}
            </div>

            </div>
            
            
            </div>
    )

}

export default Register;