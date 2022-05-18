


function login_validate(){
    let email = document.getElementById('email').value;
    let pass = document.getElementById('password').value;
    if (email == ''){
        alert('Ingresa un mail correcto')
    }else if(pass == '' || pass === ' ' || pass.length <= 6){
        alert('Ingresa una contraseña')
    } else {
    window.location.href = 'home.html'
    
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
