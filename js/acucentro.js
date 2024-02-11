//expresión para validar email
const expresion = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

//Función usada cuando no te gusta un comentario de producto
let noGusta = () =>{
    let pulgarAbajo = document.getElementById("pulgarAbajo");
    let pulgarArriba = document.getElementById("pulgarArriba");


    if (pulgarAbajo.className == 'seleccionado') {
        pulgarAbajo.src = 'img/manoAbajo.png';
        pulgarAbajo.className = "";
    } else {
        pulgarAbajo.src = 'img/abajoRojo.png';
        pulgarAbajo.className = "seleccionado";

        pulgarArriba.src = 'img/manoArriba.png';
        pulgarArriba.className = '';
    }
}

//Función usada cuando te gusta un comentario de producto
let gusta = () =>{
    let pulgarAbajo = document.getElementById("pulgarAbajo");
    let pulgarArriba = document.getElementById("pulgarArriba");


    if (pulgarArriba.className == 'seleccionado') {
        pulgarArriba.src = 'img/manoArriba.png';
        pulgarArriba.className = "";
    } else {
        pulgarArriba.src = 'img/arribaVerde.png';
        pulgarArriba.className = "seleccionado";

        pulgarAbajo.src = 'img/manoAbajo.png';
        pulgarAbajo.className = '';
    }
}

//Modo noche de la página home
let modoOscuro = () =>{

    let noche = document.getElementById("iconoNoche");
    let facebook = document.getElementById("facebook");
    let logoEmpresa = document.getElementById("logo");
    
    

    if (noche.className == 'seleccionado'){
        noche.src = 'img/iconoNoche.png';
        facebook.src = 'img/facebook36.png';
        document.body.style.color = 'black';
        noche.className="";
        document.body.style.backgroundColor = 'white';
        logoEmpresa.src = 'img/logoAcucentro.png';
    }else{
        noche.src= 'img/iconoDia.png';
        noche.className="seleccionado";
        document.body.style.backgroundColor = '#4d534f';
        document.body.style.color = 'white';
        facebook.src = 'img/facebookblanco.png';
        logoEmpresa.src = 'img/logoOscuro.png';
    }
}

//Función que valida el formulario de registro
let validar_registro = () =>{
    let nombre = document.getElementById("nombreUsuario");
    let apellido1 = document.getElementById("apellido1");
    let apellido2 = document.getElementById("apellido2");
    let telefono = document.getElementById("telefono");
    let email = document.getElementById("email");
    let contrasenia1 = document.getElementById("contrasena1");
    let contrasenia2 = document.getElementById("contrasena2");
    let label = document.getElementById("errorContrasena");
    let flag = true;


    if (comprobar_nombre() == false){
        nombre.style.border = '2px solid #FC0202';
        nombre.placeholder = 'Debe introducir un nombre';
        flag = false;
    }else{
        nombre.style.border = 'none';
    }

    if (comprobar_apellido1() == false){
        apellido1.style.border = '2px solid #FC0202';
        apellido1.placeholder = 'Debe introducir un apellido.';
        flag = false;
    }else{
        apellido1.style.border = 'none';
    }

    if (comprobar_apellido2() == false){
        apellido2.style.border = '2px solid #FC0202';
        apellido2.placeholder = 'Debe introducir un apellido.';
        flag = false;
    }else{
        apellido2.style.border = 'none';
    }

    if(comprobar_telefono() == false){
        telefono.style.border = '2px solid #FC0202';
        telefono.placeholder = 'Debe introducir un teléfono válido.';
        flag = false;
    }else{
        telefono.style.border = 'none';
    }

    if(comprobar_email()== false){
        email.style.border = '2px solid #FC0202';
        email.placeholder = 'Debe introducir un correo válido.';
        flag = false;
    }else{
        email.style.border = 'none';
    }

    if (comprobar_contrasenia() == false){

        contrasenia1.style.border = '2px solid #FC0202';
        contrasenia1.placeholder = 'Debe introducir una contraseña.';
        contrasenia2.style.border = '2px solid #FC0202';
        contrasenia2.placeholder = 'Debe introducir una contraseña.';
        flag = false;
    }else if(comprobar_contrasenia() == "noIguales"){
        flag = false;
        contrasenia2.style.border = '2px solid #FC0202';
        label.innerHTML = "Error, las contraseñas no son iguales";
        label.style.color = '#FC0202';
    }else{
        contrasenia1.style.border = 'none';
        contrasenia1.style.border = 'none';
        contrasenia2.style.border = 'none';
        contrasenia2.style.border = 'none';
        label.innerHTML = "";
    }

    return flag;
}

//Función que valida el inicio de sesión
let inicio_sesion = () =>{
    let email = document.getElementById("email");
    let contrasenia1 = document.getElementById("contrasena1");
    let flag = true;

    if(comprobar_email()== false){
        email.style.border = '2px solid #FC0202';
        email.placeholder = 'Debe introducir un correo válido.';
        flag = false;
    }else{
        email.style.border = 'none';
    }

    if (comprobar_contrasena() == false){
        contrasenia1.style.border = '2px solid #FC0202';
        contrasenia1.placeholder = 'Contraseña erronea.';
        flag = false;
    }else{
        contrasenia1.style.border = 'none';
    }

    return flag;
}

//Funciones para comprobar los diferentes imputs del formulario
let comprobar_nombre = () =>{
    let nombre = document.getElementById("nombreUsuario").value;
    return nombre!=null && nombre.length != 0 ? true : false;
}

//Función que comprueba los apellidos
let comprobar_apellido1 = () =>{
    let apellido1 = document.getElementById("apellido1").value;

    if (apellido1 == null ){
        return false;
    }else if (apellido1.length === 0 ){
        return false;
    }else{
        return true;
    }
}

let comprobar_apellido2 = () =>{
    let apellido2 = document.getElementById("apellido2").value;

    if ( apellido2 == null){
        return false;
    }else if (apellido2.length === 0){
        return false;
    }else{
        return true;
    }
}

let comprobar_telefono = () =>{
    let telefono = document.getElementById("telefono").value;
    if (telefono == null){
        return false;
    }else if(telefono.length != 9){
        return false;
    }else{
        return true;
    }
}


let comprobar_email = () =>{
    let email = document.getElementById("email").value
    if( !expresion.test(email) && email.length == 0)  {
        
        return false;
    } else {
        
        return true;
    }
}

let comprobar_contrasenia = () =>{
    let contrasenia1 = document.getElementById("contrasena1").value;
    let contrasenia2 = document.getElementById("contrasena2").value;

    if (contrasenia1 == null || contrasenia2 == null){
        return false;
    }else if (contrasenia1.length == 0 || contrasenia2.length == 0){
        return false;
    }else if (contrasenia1 != contrasenia2){
        return "noIguales";
    }else{
        return true;
    }
}

let comprobar_contrasena = () =>{
    let contrasena1 = document.getElementById("contrasena1").value;
    return contrasena1!=null && contrasena1.length != 0 ? true : false;

}