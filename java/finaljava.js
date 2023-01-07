var nombre = document.getElementById("nombre");
var correo = document.getElementById("correo");
var coment = document.getElementById("coment")
function validacion(){
    
dato = document.getElementById("nombre").value;
if(dato==null || dato.length==0 || /^\s+$/.test(dato)){
alert ("por favor ingrese su nombre");
return false;
} 
dato = document.getElementById("correo").value;    
if(!/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(dato)) {alert ("correo no valido"); return false; 
}
dato = document.getElementById("coment").value;
if (dato == null || dato.length == 0||/^\s+$/.test(dato)){
    alert("debes escribir un mensaje"); return false;
}
}