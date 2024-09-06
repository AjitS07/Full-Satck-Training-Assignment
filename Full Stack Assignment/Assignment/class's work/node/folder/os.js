const os = require ("os");

const path = require ("path");

const http = require ("http");



// console.log(os.arch()); //x64, arm64, ia32

// console.log(os.cpus()); // Array of CPU info objects

// console.log(os.freemem()); // free memory in bytes

// console.log(os.totalmem()); // total memory in bytes

// console.log(os.homedir()); // home directory

// console.log(os.tmpdir()); // temporary directory

// console.log(os.hostname());

// console.log(os.loadavg()); // system load averages

// console.log(os.type()); // system type

// console.log(os.uptime()); // system uptime in seconds

// console.log(os.userInfo()); // current user info

// console.log(os.release()); // system release

// console.log(os.tmpdir()); // temporary directory

// console.log(os.networkInterfaces()); // network interfaces



// console.log(os.cpus().length); // number of CPUs



// console.log(path.dirname("D:/Full Stack Training/Full Stack Assignment/Assignment/class's work/node/folder/os.js"));

// console.log(path.basename("D:/Full Stack Training/Full Stack Assignment/Assignment/class's work/node/folder/os.js"));

// console.log(path.extname("D:/Full Stack Training/Full Stack Assignment/Assignment/class's work/node/folder/os.js"));


// console.log(path.resolve("folder","os.js"));

// console.log(path.relative("D:/Full Stack Training/Full Stack Assignment/Assignment/class's work/node/folder","D:/Full Stack Training/Full Stack Assignment/Assignment/class's work/node/folder/os.js"));

// console.log(path.isAbsolute("D:/Full Stack Training/Full Stack Assignment/Assignment/class's work/node/folder/os.js"));

// console.log(path.parse("D:/Full Stack Training/Full Stack Assignment/Assignment/class's work/node/folder/os.js"));

// console.log(path.format({ root: "D:/", dir: "folder", base: "os.js"}));

// console.log(path.win32.resolve("folder","os.js"));

// console.log(path.posix.resolve("folder","os.js"));
// console.log(path.join("D:/Full Stack Training/Full Stack Assignment/Assignment/class's work/node/folder","os.js"));

// --------------------------------------------------------http--------------------------------------

// const server = http.createServer((req, res) => {
//     res.end("Welcome to http")
// });

// server.listen(5000,"127.0.0.1", ()=> {
//     console.log("Server is running on port 3000");
// });

const server = http.createServer((req,res)=>{
    if(req.url == "/"){
        res.end("Welcome to homepage")
    }
    else if(req.url == "/about"){
        res.end("Welcome to about page")
    }
    else{
       
        res.end("404 Not Found");
    }
});

server.listen(5000,"127.0.0.1",()=>{
    console.log("Server is running on port 3000");
});


    




