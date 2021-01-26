import React, {useState,useContext, useEffect} from 'react';
import CarService from '../services/carService';
import Message from './subComps/message';
import {AuthContext} from '../context/authContext';

import CarItem from "./subComps/caritem";

// TODO: continuar en el minuto 20 de la parte 8

const Cars = props => {

    const [Car,setCar] = useState({placa : "" , vto : "" , marca : "" , modelo : "" , color : "" , anio : "" , capacidad : "" , clase : "" , tipo : "" , dominio : "" , nMotor : "" , nChasis : "" , nVin : "" , nCalidad : "" , nPolS : "" , vPolS : "" });    //establecemos el estado de UN item "car"
    const [Cars,setCars] = useState([]);            //establecemos el estado para la lista de items
    const [message,setMessage] = useState(null);
    const authContext = useContext(AuthContext);

    useEffect(() => {
        CarService.getCars().then(data => {
            setCars(data.cars);
            console.log(data.cars);
        });
    },[]);

    const resetForm = ()=>{
        setCar({placa : "" , vto : "" , marca : "" , modelo : "" , color : "" , anio : "" , capacidad : "" , clase : "" , tipo : "" , dominio : "" , nMotor : "" , nChasis : "" , nVin : "" , nCalidad : "" , nPolS : "" , vPolS : ""});
    }

    const onCarSubmit = e => {
        e.preventDefault();
        CarService.postCar(Car).then(data => {
            const { message , error } = data;
            resetForm();
           
            if(!error){
                CarService.getCars().then(data => {
                    setCars(data.cars);
                    setMessage(message);
                })
            }else if(message === "No autorizado"){
               setMessage(message);
               authContext.setUser({username : "" , email : "", role : ""});
               authContext.setIsAuth(false);
            }else{ setMessage(message); }
        })
    }

    //const onInputChange = e =>{
      //  setCar({placa : e.target.value, vto :  e.target.value , marca :  e.target.value , modelo :  e.target.value , color :  e.target.value , anio : e.target.value , capacidad :  e.target.value, clase :  e.target.value, tipo : e.target.value , dominio :  e.target.value , nMotor :  e.target.value , nChasis :  e.target.value , nVin :  e.target.value , nCalidad :  e.target.value , nPolS :  e.target.value , vPolS :  e.target.value});
   // }
    const onInputChange = e => {
        setCar({...Car,[e.target.name] : e.target.value});//seteamos todos los campos
    }


    return(
        <div>
            <ul className="collection row">
                {
                    Cars.map( car => {return <CarItem key={car._id} car={car}/>}) //un "foreach"
                }
            </ul>
            <br/>
            <form onSubmit={onCarSubmit} className="row">
            <h3>Agregar automovil</h3>
                
                <div className="row">

                <div className="input-field col s3">   
                <label htmlFor="placa">Placa</label>
                <input placeholder="XXXXXXXXX" 
                name="placa" 
                type="text" 
                className="validate" 
                onChange={onInputChange}/>
                </div>

                <div className="input-field col s3"> 
                <label htmlFor="vto">VTO</label>
                <input placeholder="XXXXXXXXX" 
                name="vto" 
                type="text" 
                className="validate" 
                onChange={onInputChange}/>
                </div>

                <div className="input-field col s3">
                <label htmlFor="marca">Marca</label>
                <input placeholder="XXXXXXXXX" 
                name="marca" 
                type="text" 
                className="validate" 
                onChange={onInputChange}/>
                </div> 
                </div>  {/* fin de una fila*/}
                
                <div className="row">

                <div className="input-field col s3">    
                <label htmlFor="modelo">Modelo</label>
                <input placeholder="XXXXXXXXX" 
                name="modelo" 
                type="text" 
                className="validate" 
                onChange={onInputChange}/>
                </div>

                <div className="input-field col s3">
                <label htmlFor="color">Color</label>
                <input placeholder="XXXXXXXXX" 
                name="color" 
                type="text" 
                className="validate" 
                onChange={onInputChange}/>
                </div>

                <div className="input-field col s3">
                <label htmlFor="anio">Anio</label>
                <input placeholder="XXXXXXXXX" 
                name="anio" 
                type="text" 
                className="validate" 
                onChange={onInputChange}/>
                </div>

                </div>{/* fin de una fila*/}
                
                <div className="row">

                <div className="input-field col s3">
                <label htmlFor="capacidad">Capacidad</label>
                <input placeholder="XXXXXXXXX" 
                name="capacidad" 
                type="text" 
                className="validate" 
                onChange={onInputChange}/>
                </div>

                <div className="input-field col s3">
                <label htmlFor="clase">Clase</label>
                <input placeholder="XXXXXXXXX" 
                name="clase" 
                type="text" 
                className="validate" 
                onChange={onInputChange}/>
                </div>

                <div className="input-field col s3">
                <label htmlFor="tipo">Tipo</label>
                <input placeholder="XXXXXXXXX" 
                name="tipo" 
                type="text" 
                className="validate" 
                onChange={onInputChange}/>
                </div>

                </div>{/* fin una fila */}

                <div className="row">

                <div className="input-field col s3">    
                <label htmlFor="dominio">Dominio</label>
                <input placeholder="XXXXXXXXX" 
                name="dominio" 
                type="text" 
                className="validate" 
                onChange={onInputChange}/>
                </div>

                <div className="input-field col s3">
                <label htmlFor="nMotor">N Motor</label>
                <input placeholder="XXXXXXXXX" 
                name="nMotor" 
                type="text" 
                className="validate" 
                onChange={onInputChange}/>
                </div>

                <div className="input-field col s3">
                <label htmlFor="nChasis">N Chasis</label>
                <input placeholder="XXXXXXXXX" 
                name="nChasis" 
                type="text" 
                className="validate" 
                onChange={onInputChange}/>
                </div>

                </div>

                <div className="row">

                <div className="input-field col s3">    
                <label htmlFor="nVin">N VIN</label>
                <input placeholder="XXXXXXXXX" 
                name="nVin" 
                type="text" 
                className="validate" 
                onChange={onInputChange}/>
                </div>

                <div className="input-field col s3">
                <label htmlFor="nCalidad">En Calidad</label>
                <input placeholder="XXXXXXXXX" 
                name="nCalidad" 
                type="text" 
                className="validate" 
                onChange={onInputChange}/>
                </div>

                <div className="input-field col s3">
                <label htmlFor="nPolS">N Poliza Seguro</label>
                <input placeholder="XXXXXXXXX" 
                name="nPolS" 
                type="text" 
                className="validate" 
                onChange={onInputChange}/>
                </div>

                </div>{/* fin de una fila */}

                <div className="row">

                <div className="input-field col s3">    
                <label htmlFor="vPolS">Vencimiento Poliza</label>
                <input placeholder="XXXXXXXXX" 
                name="vPolS" 
                type="text" 
                className="validate" 
                onChange={onInputChange}/>
                </div>
                
                </div>{/* fin de una fila */}

                <button className="btn waves-effect orange">Ingresar</button>
            </form>
            {message ? <Message message={message}/> : null}
        </div>
    )

}

export default Cars;