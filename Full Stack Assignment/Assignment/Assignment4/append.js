//. Create and Append Elements
//Task: Write a JavaScript function that creates a <div> element with a unique id and some text content. Append this div to the body of the document.

// function createAndAppendDiv() {
//     let newDiv = document.createElement('div');
//     let uniqueId = 'div' + Date.now();
//     newDiv.id = uniqueId;
//     let textNode = document.createTextNode('Introduction: In todays digital age, where data reigns supreme, the need for robust, scalable, and flexible database solutions is paramount. MongoDB, a leading NoSQL database, has emerged as a popular choice among developers and enterprises alike. In this article, we will embark on a journey to explore the fundamentals of MongoDB and dive into the world of MongoDB Atlas, the Developer Data Platform, to kickstart your database journey.');
//     newDiv.appendChild(textNode); 
//     document.body.appendChild(newDiv);
// }
// createAndAppendDiv();

var arr  = [1,2,3,4,5]

// for(let a=0 ; a<=3;a++){
//     console.log(arr[a]);
// }
arr.unshift(4)
console.log(arr);