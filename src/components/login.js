import React, {useState,useContext} from 'react';
import AuthService from '../services/authService';
import Message from './subComps/message';
import {AuthContext} from '../context/authContext';

import InputItem from "./subComps/inputitem";//

const Login = (props) => {

    const [user,setUser] = useState({Codigo : "", Password : ""});
    const [message,setMessage] = useState(null);
    const authContext = useContext(AuthContext);

    const onInputChange = e => {
        //console.log(user);
        setUser({...user,[e.target.name] : e.target.value});
    }

    const onLoginSubmit = e => {
        e.preventDefault();

        AuthService.login(user).then( data => { //inicio de sesion
            const { error , message, token, user } = data;
            setMessage(message);
            //console.log(data);
            
            if(!error){
                authContext.setUser(user);
                authContext.setIsAuth(true);
                props.history.push('/');

                localStorage.setItem('token', 'Bearer '+token); //guardamos para uso posterior
                //M.toast({html: 'Iniciaste sesion con exito!'}); no sirve ni verga
                //console.log("inicio de sesion exitoso");
            }
            else{ console.log("error de sesion");} //setMessage(message);S
        });
    }

    return(
        <div className="pixelBG">
        <form onSubmit={onLoginSubmit}>
        <center>
        <div className="row" id="container" style={{marginTop: '5%', marginLeft: '32%'}}>
            <div className="col s12 m6">
            <div className="card-panel lighten-2">
                <h4>INGRESAR</h4>
                <center>
                <div className="row">
                <InputItem name="Codigo" caption="Usuario" onInputChange={onInputChange}
                iconname="account_circle" info="Ejemplo: AA18004 (estudiante), DOC-12345678-9 (docente)"/>
                </div></center>
                <center>
                <div className="row">
                <InputItem name="Password" caption="Contraseña" onInputChange={onInputChange}
                iconname="https" info="Ejemplo: AA18004 (estudiante), DOC-12345678-9 (docente)"/>
                </div></center>
                <button className="btn waves-effect waves-light red" type="submit" name="action">Ingresar
                <i className="material-icons right">arrow_forward_ios</i></button>
                <div style={{display: '-webkit-inline-box'}}>
                </div>
                <br /><br />
                <center><a href="#">Olvide mi contraseña</a></center>
            </div>
            </div>
        </div>
        </center>
        </form>
        </div>
    )

}

export default Login;