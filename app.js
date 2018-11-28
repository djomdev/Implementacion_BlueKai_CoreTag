




const readMoreBtn = document.getElementById('readMore');

readMoreBtn.addEventListener('click', readMoreBtnFunction);

function readMoreBtnFunction(e) {
    //target
    let element;
    element = e;

    // read the target
    element = e.target;
    element = e.target.innerText = "Leer más --> BlueKai CoreTag";

    console.log(element);
}


document.body.addEventListener('click', itemSelected);

function itemSelected(e) {
    console.log(e.target);
}


