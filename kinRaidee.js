//create array for keep the menu
const listOfMenu = [];
//url = 'https://pjuuud.github.io/KinRaiDee/menu.json';
//fetch menu to keep the default
fetch('menu.json').then(response => {
    return response.json();
}).then(data => {
    for(let menu of data) {
        //keep the only name of food from the menu
        listOfMenu.push(menu.name);
    }
    console.log(listOfMenu);
})

// Get the button element
let randomButton = document.getElementById('random');
let listFoodButton = document.getElementById('listMenu');
let addMenuButton = document.getElementById('addMenu');
// Get PopUp element
let popUp = document.getElementById("myPopUp"); 
let popUpChecked = document.getElementById("myPopUp-checked");  
// Get the <span> element that closes the popup
var span = document.querySelectorAll("#close");

//function random food in the menu
let randomFood = function() {
    let index =  Math.floor(Math.random() * listOfMenu.length); //random index 0 to list menu length
    // console.log(data.length);
    // console.log(data[index].name);
    document.getElementById("menuName").innerHTML = listOfMenu[index];
}

//function show food in the menu
let count = 0; //for count write the menu
let listFood = function() {
    document.getElementById("head").innerHTML =  "เมนูอาหาร";
    if (count == 0 ) {
        for(let menu of listOfMenu) {
            document.getElementById("list").innerHTML +=  menu + "</br>";
        }
        count++; //increment for write the menu just one time
    }
}

//function add food in array menu and check
let addFood = function() {
    let mode = 0;  //mode0 for add name of food in the menu
    let newfood = document.getElementById("add").value;
    for(let menu of listOfMenu) {
        if (newfood == menu) {
            document.getElementById("menuChecked").innerHTML =  "มีเมนู '" + newfood + "' นี้อยู่แล้ว";
            mode++; //mode = 1;
            //increment mode for not go to add food successfully
            break;
        }
    }
    if (mode == 0) {
        document.getElementById("menuChecked").innerHTML =  "เพิ่มเมนู '" + newfood + "' สำเร็จ";
        //add food
        listOfMenu.push(newfood);
    }
    console.log(listOfMenu);
}

randomButton.addEventListener('click', randomFood);
// When the user clicks the button, open the popup 
listFoodButton.addEventListener('click', listFood);
addMenuButton.addEventListener('click', addFood);

//for popup
listFoodButton.onclick = function() {
    popUp.style.display = "block";
}
addMenuButton.onclick = function() {
    popUpChecked.style.display = "block";
}

// When the user clicks on <span> (x), close the popup
//frist span for popup list of food
span[0].onclick = function() {
    popUp.style.display = "none";
}

//frist span for popup add food
span[1].onclick = function() {
    popUpChecked.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == popUp) {
        popUp.style.display = "none";
    }
    else if (event.target == popUpChecked) {
        popUpChecked.style.display = "none";
    }
}