function login_user_ok(){
    let admin = 'tuherou@gmail.com'
    let passAdmin = 123456789
    let email = document.getElementById('email').value;
    let pass = document.getElementById('password').value;   
    if(email === admin && pass == passAdmin){
        window.location.href = 'home.html'
    }else{        
        alert('El usuario o contraseña no existe')
    }
}

function login_validate(){
    let email = document.getElementById('email').value;
    let pass = document.getElementById('password').value;    
    if (email == ''){
        alert('Ingresa un mail correcto')
    }else if(pass == '' || pass === ' ' || pass.length <= 6){
        alert('Ingresa una contraseña')
    }
}

function redireccion(e){
    window.location.href = e;
}

function cierreSesion(){
   let cierre = document.querySelector('.cierre');

   cierre.style.opacity = '1'
   cierre.style.visibility='visible'; 
}  

function validacionPosicionMD(){
    let factura = 'Factura';
    
    if (document.title === factura){
        let i = document.querySelector('.cont-menu__factura');
        i.style.color = 'blue'
    }
}

function validarUrl(){
   if(document.location.pathname.includes('factura')){
      let a= document.querySelector('.cont-menu__factura');
      a.style.backgroundColor = 'blue'      
   } if(document.location.pathname.includes('pago')){
      let b= document.querySelector('.cont-menu__pago');
      b.style.backgroundColor = 'blue'
   } if(document.location.pathname.includes('home')){
    let c= document.querySelector('.cont-menu__home');
    c.style.backgroundColor = 'blue';
}

}

function registro_validate(){

    let nombre = document.querySelector(".cont-registro__nombre").value;
    let apellido = document.querySelector(".cont-registro__apellido").value;
    let email = document.querySelector(".cont-registro__email").value;
    let numero = document.querySelector(".cont-registro__number").value;
    let password = document.querySelector(".cont-registro__pass").value;
    if(nombre == '' || nombre === ' '){
        alert('Ingrese el nombre')
    } else if (apellido == '' || apellido === ' '){
        alert('Ingrese el Apellido')
    } else if (email == ''){
        alert('Ingresa un mail correcto')
    }else if(numero == '' || numero === ' ' || numero.length <= 9){
        alert('Ingrese un numero telefonico valido')
    }else if(password == '' ){
        alert('Ingresa una contraseña')
    } else {
        alert('El registro se realizo correctamente')
        console.log(nombre + ' ' + apellido) 
    }
           
}
