export default {

    getCars : ()=>{
        return fetch('/cars')
        .then(res => {
            if(res.status === 401){ return {error : true, message : "inicia sesion para ver este contenido"}; }
            
            else {return res.json().then(data => data);}
        })
        
    },
    postCar : car => {
        return fetch('/cars',{
            method : "POST",
            body : JSON.stringify(car),
            headers : {
                'Content-Type' : 'application/json'
            }
        }).then(res => {
            if(res.status === 401){ return { error : true , message : "No autorizado"};}
            
            else{ return res.json().then(data => data);}
        })
    }

}