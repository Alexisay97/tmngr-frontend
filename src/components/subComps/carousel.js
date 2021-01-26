import React, {useState,useContext, useEffect} from 'react';
import {Link} from 'react-router-dom';

import M from "materialize-css";

function initCarousel(interval){ 
    // initialize carousel
    const carousel = document.querySelectorAll('.carousel');
    M.Carousel.init(carousel, {
        fullWidth: true,
        indicators: true, // this option is require for autoplay functionnality
    });
    
    if(interval){
    // custom function for autoplaying 
    let indicatorItems = document.querySelectorAll('.carousel .indicator-item'),
        slideTime = interval,
        activeClass = "active";

    setInterval(() => {
        indicatorItems.forEach(el => {
        if (el.classList.contains(activeClass)) {
            let sib = el.nextElementSibling;
            if (sib == null) {
            indicatorItems[0].click();
            } else {
            sib.click()
            }
        }
        });
    }, slideTime);
    }//fin if
}


const Carousel = props => { // props = {imgs : {{ id : "#one" , imgUrl : "img/ues.jpg"} , { id : "#two" , imgUrl : "img/ues.jpg"}} }
    
    useEffect(() => {
            props.interval ? initCarousel(props.interval) : initCarousel();
    },[]);

    const Image = imgProp => {      //imgProp = { id : "#one" , imgUrl : "img/ues.jpg"}
        return (
            <div className="carousel-item white-text" href={imgProp.id} key={imgProp.id}>
            <img src={imgProp.imgUrl}/>
            </div>
        )
    }

    const indexDiv = () => {

        return(
            <div className="carousel-fixed-item center white-text">
            <div className="center-align">
              <h2>UES-TMNGR</h2>
              <h5 className="center">El nuevo sistema de gestion de tesis</h5>
              <Link to="/Login" className="btn ues waves-effect">
                    Ingresar <i className="material-icons right">arrow_forward</i></Link>
            </div>
          </div>
        )

    }

    return (
        <div className="carousel carousel-slider center" style={props.cheight ? {maxHeight: props.cheight} : {}}>
            { props.indexC ? indexDiv() : null}
            {   
                props.imgs.map( imgProp => {return Image(imgProp)}) //un "foreach"
            }
        </div>
    )
}
//onClick = {"update("+props.car._id+");"}
export default Carousel;