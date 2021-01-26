import React, {useContext, useEffect} from 'react';
import {Link} from 'react-router-dom';
import AuthService from '../../services/authService';
import { AuthContext } from '../../context/authContext';

import M from "materialize-css";


const NavBar = props => {
    
    const {isAuth,user,setIsAuth,setUser} = useContext(AuthContext);

    useEffect(() => {
        var elems = document.querySelectorAll('.sidenav');  //inicializamos la navbar
        var instances = M.Sidenav.init(elems);
    },[]);

    const logoutHandler = () => {
        
        //e.preventDefault();
        let empty = AuthService.logout();
        setUser(empty);
        setIsAuth(false);
        //props.history.push('/');

        /*AuthService.logout().then(data => {
            if(!data.error){
                setUser(data.user);
                setIsAuth(false);
                props.history.push('/');
            }
        }) */
    }

    const sideLogo = () => {
        return(
        <li>
          <div>
            <img src="../img/logo.svg" style={{marginTop: '6%', marginLeft: '29%'}} width="35%" height="100%" />
          </div>
        </li>
        );
    }

    const sideLink = (props) => {
        return(<li><Link style={{color: 'white'}} className="waves-effect" to={props.to}>
            <i style={{color: 'white'}} className="small material-icons">{props.iconname}</i>
            {props.caption}</Link></li>);
    }

    const estudianteNav = () => {
        return(
        <>
        {sideLogo()}
        <li>
          <div className="divider" />
        </li>
        {sideLink({to : "/", iconname : "home" , caption : " inicio"})}
        {sideLink({to : "/Profile", iconname : "person" , caption : "Mi Perfil"})}
        {sideLink({to : "/StudentGroup", iconname : "group" , caption : "Proyecto de tesis"})}
        {sideLink({to : "/StudentDocs", iconname : "folder" , caption : "Mis Documentos"})}
        {sideLink({to : "/PublicDocs", iconname : "description" , caption : "Solicitudes"})}
        </>
        )
    }
    
    const adminNav = () => {
        return(
        <>
        {sideLogo()}
        <li>
          <div className="divider" />
        </li>
        {sideLink({to : "/", iconname : "home" , caption : " inicio"})}
        {sideLink({to : "/Profile", iconname : "person" , caption : "Mi Perfil"})}
        {sideLink({to : "/StudentGroup", iconname : "group" , caption : "Proyecto de tesis"})}
        {sideLink({to : "/StudentDocs", iconname : "folder" , caption : "Mis Documentos"})}
        {sideLink({to : "/PublicDocs", iconname : "description" , caption : "Solicitudes"})}
        </>
        )
    }

    const docenteNav = () =>{
        return (
            <>
            <li><Link to="/">Hogar</Link></li>
            <li><Link to="/Login">Ingresar</Link></li>
            <li><Link to="/Register">Registrate!</Link></li>
            </>
        )
    }

    const renderSideNav = (tipo) => {
        switch(tipo) {
            case 'estudiante':
              return estudianteNav();
            case 'docente':
              return docenteNav();
            case 'admin':
              return adminNav();
            default:
              return 'foo';
          }
    }

    return(
        <ul id="slide-out" className="sidenav ues" style={{width: '20%'}}>
            { renderSideNav(user.Type) }
        </ul>
    )

}

export default NavBar;