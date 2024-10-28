document.getElementById("home-board").innerHTML = 0
document.getElementById("guest-board").innerHTML = 0

//Function that adds one point to the Home team when the button is clicked
function addOneHome(){
    //Convert the inner HTML to a number
    let homeBoardNumber = Number(document.getElementById("home-board").innerHTML)
    //Add 1 to the homeBoard 
    homeBoardNumber +=1
    //Update the innerHtml with the result else, it wont be displayed on the screen
    document.getElementById("home-board").innerHTML = homeBoardNumber
}

//Function that adds one point to the Home team when the button is clicked
function addTwoHome(){
    let homeBoardNumber = Number(document.getElementById("home-board").innerHTML)
    homeBoardNumber += 2
    document.getElementById("home-board").innerHTML = homeBoardNumber
  
}

//Function that adds one point to the Home team when the button is clicked
function addThreeHome(){
    let homeBoardNumber = Number(document.getElementById("home-board").innerHTML);
    homeBoardNumber += 3;
    document.getElementById("home-board").innerHTML = homeBoardNumber
    
}
function addOneGuest(){
    let homeBoardNumber = Number(document.getElementById("guest-board").innerHTML)
    homeBoardNumber +=1
    document.getElementById("guest-board").innerHTML = homeBoardNumber
}

function addTwoGuest(){
    let homeBoardNumber = Number(document.getElementById("guest-board").innerHTML);
    homeBoardNumber += 2
    document.getElementById("guest-board").innerHTML = homeBoardNumber
}

function addThreeGuest(){
    let homeBoardNumber = Number(document.getElementById("guest-board").innerHTML);
    homeBoardNumber += 3
    document.getElementById("guest-board").innerHTML = homeBoardNumber
}
function reset(){
   let boards = 0
    document.getElementById("home-board").innerHTML  = boards
    document.getElementById("guest-board").innerHTML = boards
    
    
}

