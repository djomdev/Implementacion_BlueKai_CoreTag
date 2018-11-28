document.getElementById("formulario").addEventListener("click", function (event) {
    event.preventDefault()
});


const submitBtn = document.getElementById('submit');

submitBtn.addEventListener('click', submitBtnFunction);

function submitBtnFunction(e) {
    //target
    let element;
    element = e;

    // read the target
    element = e.target;
    element = e.target.innerText = "Enviar formulario --> BlueKai CoreTag";

    console.log(element);
}


//Mouse Events

const sendForm = document.getElementById('submit');

//Click Mouse Event
sendForm.addEventListener('click', printEvent);
//Double Click
// sendForm.addEventListener('dblclick', printEvent);
//Mouse Enter
// sendForm.addEventListener('mouseenter', printEvent);
//Mouse Leave
// sendForm.addEventListener('mouseleave', printEvent);
//Mouse over
// sendForm.addEventListener('mouseover', printEvent);
//Mouse out
// sendForm.addEventListener('mouseout', printEvent);
//Mouse up
// sendForm.addEventListener('mouseup', printEvent);
// Mouse down
// sendForm.addEventListener('mousedown', printEvent);

//Input Events

const form = document.getElementById('formulario');
const nameForm = document.getElementById('name');
const lastnameForm = document.getElementById('lastname');
const phoneNumber = document.getElementById('phone');
const emailAddress = document.getElementById('email');
const maleGender = document.getElementById('male');
const femaleGender = document.getElementById('female');

// Events for <form>
// form.addEventListener('submit', printEvent);

//Input Events
// nameForm.addEventListener('keydown, keyup, keypress, focus, cut, copy, paste, input', printEvent);
nameForm.addEventListener('blur', printEvent);
lastnameForm.addEventListener('blur', printEvent);
phoneNumber.addEventListener('blur', printEvent);
emailAddress.addEventListener('blur', printEvent);
maleGender.addEventListener('blur', printEvent);
femaleGender.addEventListener('blur', printEvent);


function printEvent(e) {

    // if(nameForm.value.length == 0){
    //     alert('Por favor, ingrese su nombre');
    // }
    console.log(nameForm.value);
    console.log(lastnameForm.value);


    console.log(`THE EVENT IS: ${e.type}`);
}

//Event Bubbling

const nameInput = document.querySelector('#name');
const lastnameInput = document.querySelector('#lastname');
const phoneInput = document.querySelector('#phone');
const emailInput = document.querySelector('#email');
const maleInput = document.querySelector('#male');
const femaleInput = document.querySelector('#female');
// const clickbtnInput = document.querySelector('#clickbtn')

nameInput.addEventListener('click', function () {
    console.log('You clicked the name field');
})

lastnameInput.addEventListener('click', function () {
    console.log('You clicked the lastname field');
})

phoneInput.addEventListener('click', function () {
    console.log('You clicked the phone field');
})

emailInput.addEventListener('click', function () {
    console.log('You clicked the email field');
})

maleInput.addEventListener('click', function () {
    console.log('You clicked the male field');
})

femaleInput.addEventListener('click', function () {
    console.log('You clicked the female field');
})

// clickbtn.addEventListener('click', function () {
//     console.log('You clicked the click button');
// })

//Delegation

document.body.addEventListener('click', itemSelected);

function itemSelected(e) {
    console.log(e.target);
}

