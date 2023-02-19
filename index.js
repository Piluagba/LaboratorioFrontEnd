function validacion(){
    let nombre= document.getElementById('nombre').value
    console.log(nombre)
    let email = document.getElementById('email').value
    console.log(email)
    let password1= document.getElementById('password1').value
    console.log(email)
    let password2= document.getElementById('password2').value
    console.log(email)

    let valide= true

    if(nombre === ''){
        console.log('Campo nombre no puede estar vacío')
        valide=false
        let inputNombre = document.getElementById('nombre')
        inputNombre.className = 'container-error'
        let inputTextoErrorNombre =document.getElementById('texto-error-nombre')
        inputTextoErrorNombre.hidden= false
        let validacionError1 = document.getElementById('validacion-error1')
        validacionError1.hidden = false
        let validacionError1_1 = document.getElementById('validacion-acierto1')
        validacionError1_1.hidden = true

    }
    else{
        let inputNombre = document.getElementById('nombre')
        inputNombre.className = 'container-acierto'
        let inputTextoErrorNombre =document.getElementById('texto-error-nombre')
        inputTextoErrorNombre.hidden= true
        let validacionTrue1= document.getElementById('validacion-error1')
        validacionTrue1.hidden = true
        let validacionTrue1_1= document.getElementById('validacion-acierto1')
        validacionTrue1_1.hidden = false
    
    }

    if(/\d/.test(nombre) || nombre === ''){
        console.log('Campo nombre no puede contener números')
        valide = false
        let inputNombre = document.getElementById('nombre')
        inputNombre.className = 'container-error'
        let validacionError1_1 = document.getElementById('validacion-error1')
        validacionError1_1.hidden = false
        let validacionTrue1_1= document.getElementById('validacion-acierto1')
        validacionTrue1_1.hidden = true
    }
    else{
        console.log('Campo nombre no puede contener números')
        valide= true
        let inputNombre = document.getElementById('nombre')
        inputNombre.className = 'container-acierto'
        let validacionError1_1 = document.getElementById('validacion-error1')
        validacionError1_1.hidden = true
        let validacionTrue1_1= document.getElementById('validacion-acierto1')
        validacionTrue1_1.hidden = false
    }

    if(email === '') {
        console.log('Campo email no puede estar vacío')
        valide = false
        let inputEmail = document.getElementById('email')
        inputEmail.className = 'container-error' 
        let inputTextoErrorEmail =document.getElementById('texto-error-email')
        inputTextoErrorEmail.hidden= false
        let emailError1 = document.getElementById('validacion-error2')
        emailError1.hidden = false
        let validacionError1_1 = document.getElementById('validacion-acierto2')
        validacionError1_1.hidden = true
    }
    else{
        let inputEmail = document.getElementById('email')
        inputEmail.className = 'container-acierto'
        valide = true
        let inputTextoErrorEmail =document.getElementById('texto-error-email')
        inputTextoErrorEmail.hidden= true
        let validacionError1_1 = document.getElementById('validacion-error2')
        validacionError1_1.hidden = true
        let validacionTrue1_1= document.getElementById('validacion-acierto2')
        validacionTrue1_1.hidden = false
    }

    if (email === validateEmail(email)){
        
        console.log('Email debe tener un formato correcto')
        valide = false
    }

    if(password1 === ''){
        console.log('Campo contraseña no puede estar vacío')
        valide = false
        let inputpassword1 = document.getElementById('password1')
        inputpassword1.className = 'container-error' 
        let inputTextoErrorPassword1 =document.getElementById('texto-error-password1')
        inputTextoErrorPassword1.hidden= false
        let validacionError1 = document.getElementById('validacion-error3')
        validacionError1.hidden = false
        let validacionError1_1 = document.getElementById('validacion-acierto3')
        validacionError1_1.hidden = true
    }
    else{
        let inputpassword1 = document.getElementById('password1')
        inputpassword1.className = 'container-acierto'
        valide = true
        let inputTextoErrorPassword1 =document.getElementById('texto-error-password1')
        inputTextoErrorPassword1.hidden= true
        let validacionTrue1= document.getElementById('validacion-error3')
        validacionTrue1.hidden = true
        let validacionTrue1_1= document.getElementById('validacion-acierto3')
        validacionTrue1_1.hidden = false
    }

    if(password2 === ''){
        console.log('Campo contraseña no puede estar vacío')
        valide = false 
        let inputpassword2 = document.getElementById('password2')
        inputpassword2.className = 'container-error' 
        let inputTextoErrorPassword2 =document.getElementById('texto-error-password2')
        inputTextoErrorPassword2.hidden= false
    
        let validacionError1_1 = document.getElementById('validacion-error4')
        validacionError1_1.hidden = false
        let validacionTrue1_1= document.getElementById('validacion-acierto4')
        validacionTrue1_1.hidden = true
    }
    else{
        let inputpassword2 = document.getElementById('password2')
        inputpassword2.className = 'container-acierto'
        valide = true
        let inputTextoErrorPassword2 =document.getElementById('texto-error-password2')
        inputTextoErrorPassword2.hidden= true
        let validacionTrue1= document.getElementById('validacion-error4')
        validacionTrue1.hidden = false
        let validacionTrue1_1= document.getElementById('validacion-acierto4')
        validacionTrue1_1.hidden = true
    }
    
    if(password1 !== password2 || password1 === ''){
        console.log('Las contraseñas deben ser iguales')
        valide = false
        let inputpassword1 = document.getElementById('password1')
        inputpassword1.className = 'container-error' 
        let inputpassword2 = document.getElementById('password2')
        inputpassword2.className = 'container-error' 
        let validacionTrue1= document.getElementById('validacion-error4')
        validacionTrue1.hidden = false
        let validacionTrue1_1= document.getElementById('validacion-acierto4')
        validacionTrue1_1.hidden = true
    }
    else{
        let inputpassword1 = document.getElementById('password1')
        inputpassword1.className = 'container-acierto'
        valide = true
        let inputpassword2 = document.getElementById('password2')
        inputpassword2.className = 'container-acierto'
        let validacionTrue1= document.getElementById('validacion-error4')
        validacionTrue1.hidden = false
        let validacionTrue1_1= document.getElementById('validacion-acierto4')
        validacionTrue1_1.hidden = true
    }

    if(valide){
        alert("Formulario enviado con éxito")
    }


    return valide
}

function validateEmail(email){
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
}