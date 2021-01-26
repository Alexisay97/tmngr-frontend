function MeeL(usr,pwd){

this.cred = {"usuario" : usr, "clave" : pwd}; //credenciales de un usuario

this.sesion = false;
this.id = "";
this.token = "";
this.secret = "";

this.UsrData;

superThis = this;

this.getSession = async function(){

				var authData = [];

				let res = await fetch("https://apieel.ues.edu.sv/public/session/signIn", {
										  method: 'POST', // or 'PUT'
										  body: JSON.stringify(this.cred), // data can be `string` or {object}!
										  headers:{
										    'Content-Type': 'application/json'
										  }
										});
										//.catch(error => console.error('Error:', error));

				let response = await res.json();

				authData.token = response.data.oauth.access_token;
				authData.id = response.data.id;
				authData.secret = response.data.secret;

				return authData;

				};



this.getUsrData = async function(token,secret,id){
			

			let res = await fetch("https://apieel.ues.edu.sv/expediente/alumno/datos", {
							  method: 'GET',
							  headers:{
							    'X-XSRF-TOKEN': token + "," + secret + "," + id
							  }
							});
							//.catch(error => console.error('Error:', error))

			//console.log(token + "," + secret + "," + id);

			let response = await res.json();

			this.UsrData = await response;

			return this.UsrData;

};


this.getFoto = async function(token,secret,id){
			

			let res = await fetch("https://apieel.ues.edu.sv/expediente/alumno/foto", {
							  method: 'GET',
							  headers:{
							    'X-XSRF-TOKEN': token + "," + secret + "," + id
							  }
							});
							//.catch(error => console.error('Error:', error))

			console.log(token + "," + secret + "," + id);

			let response = await res.json();

			this.UsrPhoto = await response;

			return this.UsrPhoto;

};
	


this.GetDatosEEL = async function(){


		let auth = await superThis.getSession().catch(error => console.error('Error:', error));
	
		let data = await superThis.getUsrData(auth.token,auth.secret,auth.id).catch(error => console.error('Error:', error));
		
		return data;

};

this.GetFotoEEL = async function(){


		let auth = await superThis.getSession().catch(error => console.error('Error:', error));
	
		let data = await superThis.getFoto(auth.token,auth.secret,auth.id).catch(error => console.error('Error:', error));
		
		return data;

};

}