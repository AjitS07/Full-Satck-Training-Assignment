// let arr = [10,20,30,40,50]

// let filteredArr = arr.filter(item=>item>20);
//console.log(filteredArr);


// let arr = [10,20,30,40,50,60];

// let sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

// // let sum = 0;
// // acc   curr
// // 0    10  10


// console.log(sum);

// let arr = [10,20,30,40,50,60];
//let foundItem = 


// object Methods

// let obj = {
//     name: "John",
    
//     city: "New York"
// }


// let keys = Object.keys(obj);
// console.log(keys);

// let values = Object.values(obj);    

// console.log(values);

// let entries = Object.entries(obj);

// console.log(entries);

// let result = entries.filter(([key,value])=> key === "city");

// let obj ={
//     firstName :"Ajit",
//     lastNmae  : "kumar"

// }
// Object.freeze(obj);

// obj.firstName = "ram";
// obj.address = "jaipur"

// console.log(obj);
// const num = {
//     firstName :"Ajit sharma",
//     lastNmae : "lapta"
// }

// num.firstName = "Rohan"

// console.log(num);


// let obj ={
//     firstName :"Ajit",
//     lastNmae  : "kumar"

// }
// Object.seal(obj);
// obj.firstName="Rohan",
// obj.address="jaipur"
// console.log(obj);
// console.log(obj,hasOwnProperty("address"));

//let result = Object.entries(obj).filter(([key,value])=> key === "firstName");



// ----------------------------------------math object
// let num = math.random();
// console.log(num);
// let floatNum=10.534;
// console.log(Mth.pow(2,5));


//-- generate four digit OTP ----

// let otp = "";
// for(let i=0; i<4; i++){
//     otp = otp + Math.floor(Math.random()*10);
// }
// console.log(otp);

//-- generate four digit OTP without loop ----

// let otp = Math.floor(Math.random()*1000) + 1000;
// console.log(otp);

// function generateOTP() {
//     return Math.floor(1000 + Math.random() * 9000).toString();
// }

// const otp = generateOTP();
// console.log(otp);

let otp= Math.floor(1000+Math.random()*9000);

console.log(otp);
