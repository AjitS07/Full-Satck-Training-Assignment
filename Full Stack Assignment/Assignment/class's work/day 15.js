// even loop, times functions, call back hell, promises, asynchronous await, constructor,classes

// let a = 30;
// let b = 100;


// Timer functions
// setTimeout(() => {
//     console.log("Hello Techno");
// }, 2000);  // output: "Hello Techno" after 2seconds

// let interval = setInterval(() => {
//     console.log(Math.random());
// }, 2000);   // generate random number until you stop 

// // used to stop interval by button
// document.getElementById("button").addEventListener("click", function () {
//     console.log("stop button clicked");
//     clearInterval(interval);
// })

// let timeout = setInterval(() => {
//     console.log("Hello Techno");
// }, 5000);

// document.getElementById("timeout").addEventListener("click", function () {
//     console.log("Time out btn clicked");
//     clearInterval(timeout);
// })


// Asynchrounous js
// let a = 20;
// let b = 30;
// console.log(a + b);

// setTimeout(() => {
//     console.log("Hello Fellow developer!");
// }, 4000);

// console.log(a);

// setTimeout(() => {
//     console.log("Second Timeout");
// }, 6000);

// console.log(b);



// Promises
// call back

// function step1(callback) {
//     setTimeout(() => {
//         console.log("step 1 completed");
//     }, 1000);
// }

// function step2(callback) {
//     setTimeout(() => {
//         console.log("step 2 completed");
//     }, 2000);
//     callback();
// }

// function step3(callback) {
//     setTimeout(() => {
//         console.log("Step 3 completed");
//     }, 3000);
//     callback();
// }

// function fetchData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let data = {
//                 firstName: "Divyshakti",
//                 lastName: "Pal",
//             };
//             return reject(data);
//         })
//     }, 2000);
// }

// // try-catch method
// function fetchData() {
//     return new Promise((resolve, reject) =>
//         setTimeout(() => {
//             try {
//                 let data = {
//                     firstName: "Divyashakti",
//                     lastName: "Pal",
//                 };
//                 return resolve(data);
//             } catch (error) {
//                 return reject(error);
//             }

//         }, 2000);
// })
// }



// promise states --> pending, fullfill , rejected
// prending --> fulfilled
// pending --> reject

// // fetch the data of promises:
// fetchData
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((error) => {
//         console.log(error);
//     });


// api
// https://fakestoreapi.com/products

function fetchData() {
    let data = fetch("https://fakestoreapi.com/products");
    // console.log("next step after fetching");
    return data;
}
let fetchedData = fetchData();
console.log(fetchedData);

fetchedData
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    });
    // console.log("last step");
    //DOM
    // document.getElementById("app").innerHTML = JSON.stringify(data);
    // console.log(document.getElementById("app"));
 
    // document.getElementById("card").innerHTML=JSON.stringify(data);
    //  console.log(document.getElementById("card"));
    //  //map
    //  data.map((product) => {
    //      let card = document.createElement("div");
    //      card.classList.add("card");
    //      card.innerHTML = `
    //      <img src="${product.image}" alt="${product.title}">
    //      <h3>${product.title}</h3>
    //      <p>${product.description}</p>
    //      <p>$${product.price}</p>
         
    //      <button>Add to Cart</button>
    //      `;
    //      document.getElementById("app").appendChild(card);
    //  });
 


    document.getElementById("product-button").addEventListener("click",
        function(){
            let data = fetch("https://fakestoreapi.com/products")
            .then((res)=>res.json())
            .then((data)=>{
                data.forEach((item)=>{
                    let newDiv = document.createElement("div");
                    newDiv.innerHTML = `
                    <img src="${item.image}" alt="${item.title}">
                    <h3>${item.title}</h3>
                    <p>${item.description}</p>
                    <p>$${item.price}</p>`;
                    let myDiv=document.getElementById("product")
                })
            })
        }
    )


