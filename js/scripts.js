var form = document.getElementById("login");
var flag = true;
var radioCheck = false;
var radioValue;
var checkCheck = false;
var checkValue;
var radio;
var check;
form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    var nombre = document.getElementById("nombre");
    var password = document.getElementById("password");
    radio = document.getElementsByName("option");
    check = document.getElementsByName("optionCb");
    
    if(nombre.value == "") {
        var errorNombre = document.getElementById("errorNombre");
        errorNombre.classList.remove("noVisible");
        errorNombre.classList.add("siVisible");
        flag = false;
    }

    if(password.value == "") {
        var errorPass = document.getElementById("errorPassword");
        errorPass.classList.remove("noVisible");
        errorPass.classList.add("siVisible");
        flag = false;
    }

    radio.forEach(element => {
        if (element.checked) {
            radioCheck = true;  
            radioValue = element.value;
        } 
    });
    
    if(radioCheck) {
        console.log("Papas: " + radioValue);
    } else {
        var errorPapas = document.getElementById("errorPapas");
        errorPapas.classList.remove("noVisible");
        errorPapas.classList.add("siVisible");
        flag = false;
    }

    check.forEach(element => {
        if (element.checked) {
            checkCheck = true;
            checkValue = element.value;
        }
    });

    if(checkCheck) {
        console.log("Salsa: " + checkValue);
    } else {
        var errorSalsa = document.getElementById("errorSalsa");
        errorSalsa.classList.remove("noVisible");
        errorSalsa.classList.add("siVisible");
        flag = false;
    }
    
    if(flag) {
        form.submit();
    }
    
    console.log(nombre.value);
    console.log(password.value);

    flag = true;
});

var nombre = document.getElementById("nombre");
nombre.addEventListener("click", (e) => {
    var errorNombre = document.getElementById("errorNombre");
    errorNombre.classList.remove("siVisible");
    errorNombre.classList.add("noVisible");
});

var password = document.getElementById("password");
password.addEventListener("click", (e) => {
    var errorPass = document.getElementById("errorPassword");
    errorPass.classList.remove("siVisible");
    errorPass.classList.add("noVisible");
});

var radio1 = document.getElementById("radio1");
radio1.addEventListener("click", (e) => {
    var errorPapas = document.getElementById("errorPapas");
    errorPapas.classList.remove("siVisible");
    errorPapas.classList.add("noVisible");
});

var radio2 = document.getElementById("radio2");
radio2.addEventListener("click", (e) => {
    var errorPapas = document.getElementById("errorPapas");
    errorPapas.classList.remove("siVisible");
    errorPapas.classList.add("noVisible");
});

var radio3 = document.getElementById("radio3");
radio3.addEventListener("click", (e) => {
    var errorPapas = document.getElementById("errorPapas");
    errorPapas.classList.remove("siVisible");
    errorPapas.classList.add("noVisible");
});

var check1 = document.getElementById("check1");
check1.addEventListener("click", (e) => {
    var errorSalsa = document.getElementById("errorSalsa");
    errorSalsa.classList.remove("siVisible");
    errorSalsa.classList.add("noVisible");
    flag = false;
});

var check2 = document.getElementById("check2");
check2.addEventListener("click", (e) => {
    var errorSalsa = document.getElementById("errorSalsa");
    errorSalsa.classList.remove("siVisible");
    errorSalsa.classList.add("noVisible");
    flag = false;
});

var check3 = document.getElementById("check3");
check3.addEventListener("click", (e) => {
    var errorSalsa = document.getElementById("errorSalsa");
    errorSalsa.classList.remove("siVisible");
    errorSalsa.classList.add("noVisible");
    flag = false;
});