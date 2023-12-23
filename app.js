
var containerBox = document.querySelector(".container");

function show(){
    var divBox = document.querySelector("#sample-box").style.display = "block";
    
    // document.querySelector("body").style.backgroundColor = "black";
    // document.querySelector("body").style.opacity = "0.5";


    // document.querySelector("#sample-box").style.opacity = "1";




 
  

}


function addBook(){
    var inputBox1 = document.querySelector("#book-name").value;
    let textArea = document.querySelector("#text-area").value;
    var newDivBox = document.createElement("div");
    newDivBox.id = "divBox";
    var h3 = document.createElement("h3");
    var pTag = document.createElement("p");
    var preTag = document.createElement("pre");
    var deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Delete";
    deleteButton.addEventListener("click", deleteBook)
    deleteButton.id = "delete"
  
    var authorName = document.querySelector("#author-name").value;
    preTag.innerHTML = "-" + authorName; 
    pTag.textContent = textArea;
    h3.textContent = inputBox1;
    newDivBox.append(h3);
    newDivBox.append(pTag);
    newDivBox.append(preTag);
    newDivBox.append(deleteButton);
    containerBox.append(newDivBox);
 

    document.querySelector("#sample-box").style.display = "none";

    // This below code for clear the input boxes
    document.querySelector("#book-name").value = "";
    document.querySelector("#author-name").value = "";
    document.querySelector("#text-area").value = "";



   

}

function cancel(){
    document.querySelector("#sample-box").style.display = "none";
}

function deleteBook(event){
    event.target.parentElement.remove();
}