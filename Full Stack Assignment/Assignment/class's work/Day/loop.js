// loops  , strict mode , console ypes, array methods
//while , do while , for

let count = 1;
// while(count <=10){
//     console.log(count);
//     count++;
// }

// do while
    // do{
    //     console.log(count);
    //     count++;

    // } while(count < 10);
    // for(let i=10; i>0;i--){
    //     console.log(i);
    // }

    // // break and continue

    // for(let i=0;i<10;i++){

    // }

    // let arr =[10,20,30,4,50,60,70];
    // for(let i =0 ; i<arr.length; i++){
    //     console.log(arr[i]*10)
    // }

    // let arr =[10,20,30,4,50,60,70];

    // for(let element of arr){
    //     console.log(element)
    // }
    // for(let index in arr){
    //     console.log(index);
    // }
    // let items = ["first","second",3,4, "fifth"];
    // for(let item of items){
    //     console.log(item);
    // }

    //---------------------------type of console
    //  console.log("helo techno")
    //  console.error("this ia an erroe console")
    //  console.warn("this is a worninng console")
    //  console.assert(5>10,"5 is not grater than 10")
    //  console.assert(10>5,"10 is not grater than 5")

    //  let person = {
    //     name: "Shubham",
    //     age :"**",
    //     address : {
    //         city : "jaipur",
    //         pincode : "302018"

    //     },
    //     hobbies : ["Riding", "Travelling"]
    //  }
    //  console.dir(person);
    //  let data = [
    //     {
    //         name: "ram", city:"jaipur", dept:"FSD"
    //     },
    //     {
    //         name: "ram", city:"jaipur", dept:"FSD"
    //     },
    //     {
    //         name: "ram", city:"jaipur", dept:"FSD"
    //     },
    //  ]

    // push , pop , shift , unshift

    // let arr =[10,20,30,40];
    // arr.push(1000)
    // console.log(arr);
    // let result= arr


    //------------------------------------map , filter , reduce , forEach
    let arr =[10,20,30,40];
    arr.map(() =>{})
    /// callback functions
    // Higher order functions
    
    let newArr= arr.map((item) =>{
        return item * 10;
        // console.log(item);
    })
    console.log(newArr);

    // map return new array with the sme length as original

    // forEach
    