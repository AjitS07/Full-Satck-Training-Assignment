
// -----------------------------Event-----------------------
// document,getElementById("button").onclick = function(){
//     let newDiv = document.createElement("div");
//     newDiv.style.width="200px";
//     newDiv.style.height="200px";
//     newDiv.style.backgroundColor="red";
//     newDiv.style.border="2px solid black";
//     newDiv.style.margin="10px";
//     document.body.appendChild(newDiv);
// }

// -----------------------------Event-----------------------


// document.getElementById("box").addEventListener("mouseenter", function(){
//     document.getElementById("box").style.backgroundColor = "yellow";
// });

//--------------------input value ------------------------------------------------

// document.getElementById("name").addEventListener("change",function(){
//     let name1 = document.getElementById("name").value;
//     console.log(name1);
// })
// document.getElementById("name2").addEventListener("change",function(){
//     let name1 = document.getElementById("name2").value;
//     console.log(name1);
// })


//---------------------------------------------------------------------------------------------------------

let obj={};
function getValue(e){

obj[e.target.name]=e.target.value;

console.log(obj);
}

document.getElementById("field1").addEventListener("change",function(event){
    getValue(event);
})

document.getElementById("field2").addEventListener("change",function(event){
    getValue(event);
})