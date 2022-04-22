const form = document.getElementById("form"),
bname = document.getElementById("Business Name"),
email = document.getElementById("email"),
password = document.getElementById("password"),
password2 = document.getElementById("password2");


form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkRequired([bname, email, password, password2]);
    checkLength(bname, 5, 25);
    checkLength(password, 8, 25);
    checkEmail(email);
    matchPassword(password, password2);
    saveLocalTodos(input.value);
});


function checkRequired(inputAll){
    inputAll.forEach((input)=>{
        if(input.value.trim === ""){
            showError(input, `${getFieldName(input)} is required `);
        } else{
            showSuccess(input);
            
        }
    });
}
function checkLength(input, min, max){
    if(input.value.length < min){
        showError(input, `${getFieldName(input)} must be atleast ${min} characters. `)
    } else if(input.value.length > max){
        showError(input, `${getFieldName(input)} must be atleast ${max} characters. `)
    } else{
        showSuccess(input);
    }
}

function checkEmail(input){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(input.value.trim())){
        showSuccess(input);
    } else{
        showError(input, "Email is not valid");
    }
}

function matchPassword(input, input2){
    if (input.value !== input2.value || input.value ==""){
        showError(input2, "Passwords do not match");
    } else{
        showSuccess(input);
        window.location.assign("./waitlist.html");
    }
}

function showError(input, message){
    const formControl = input.parentElement;
    formControl.className = "form__input-group error";
    const small = formControl.querySelector("small");
    small.innerText = message;
}

function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className = "form__input-group success";
}
function getFieldName(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}
function saveLocalTodos(input){
    // check if in local storage
    let inputs;
    if(localStorage.getItem('form') === null){
        inputs = [];
    }   else {
        inputs = JSON.parse(localStorage.getItem('form'))
    }
    inputs.push(input);
    localStorage.setItem('form', JSON.stringify(input));
}
