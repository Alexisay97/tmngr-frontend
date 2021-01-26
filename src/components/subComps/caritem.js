import React, {useState,useContext} from 'react';

const CarItem = props => {
    return (
    <li className="collection-item" >{props.car._id + "Placa: " + props.car.placa +" "+ "Marca: " + props.car.marca+" "+"Modelo: " + props.car.modelo}</li>
    )
}
//onClick = {"update("+props.car._id+");"}
export default CarItem;