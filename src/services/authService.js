const emptyUsr = {Codigo : "", DUI : "", Carrera : "", NombreCompleto : "", DptName : ""};
//const emptyUsr = {username : "", email : "", role : "", pfpuri : ""};

const baseUrl = "http://localhost/tmngr-api/public";

export default {

    login : user => {
        return fetch(baseUrl + '/usuarios/login',
        {
            method : "POST",
            body : JSON.stringify(user),
            headers : {
                'Content-Type' : 'application/json'
            }
        })
        .then(res => {
            if(res.status === 401){ return { error : true , message : "Error al iniciar sesion", user : emptyUsr};}
            
            else{ return res.json().then(data => data);}
        })
    },

    register : user => {
        return fetch(baseUrl + '/usuarios/register',{
            method : "POST",
            body : JSON.stringify(user),
            headers : {
                'Content-Type' : 'application/json'
            }
        }).then(res => res.json())
        .then(data => data)
    },

    logout : ()=>{
        localStorage.setItem('token','invalid'); //una token invalida en vez de eliminarla
        return emptyUsr;
        /*return fetch(baseUrl + '/usuarios/logout').then(res => res.json())
        .then(data => data)*/
    },

    isAuth : ()=>{
        return fetch(baseUrl + '/usuarios/checkAuth',
        {
            headers: {
            'Authorization': localStorage.getItem('token')
        }})
        .then(res =>{
            //console.log("status : " + res);
            if(res.status === 401){return { isAuth : false , user : emptyUsr};}

            else{ return res.json().then(data => data);}
        })
    }


}