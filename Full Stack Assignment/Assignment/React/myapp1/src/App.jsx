// // import Vector from "./assets/card-1.jpeg"
// //import Card from"./Card"
// import Login from"./Login"


// // const data = [
// //   {
// //     heading : "Card 1",
// //     desc : "This is card 1 desc",
// //     color : "bg-slate-100",
// //     image: "https://img.freepik.com/premium-photo/product-that-is-called-natural-hair_1191871-14558.jpg?w=740"
// //   },
// //   {
// //     heading : "Card 1",
// //     desc : "This is card 1 desc",
// //     color : "bg-slate-100",
// //     image: "https://img.freepik.com/premium-photo/product-that-is-called-natural-hair_1191871-14558.jpg?w=740"
// //   },
// //   {
// //     heading : "Card 1",
// //     desc : "This is card 1 desc",
// //     color : "bg-slate-100",
// //     image: "https://img.freepik.com/premium-photo/product-that-is-called-natural-hair_1191871-14558.jpg?w=740"
// //   },
// //   {
// //     heading : "Card 1",
// //     desc : "This is card 1 desc",
// //     color : "bg-slate-100",
// //     image: "https://img.freepik.com/premium-photo/product-that-is-called-natural-hair_1191871-14558.jpg?w=740"
// //   },
// //   {
// //     heading : "Card 1",
// //     desc : "This is card 1 desc",
// //     color : "bg-slate-100",
// //     image: "https://img.freepik.com/premium-photo/product-that-is-called-natural-hair_1191871-14558.jpg?w=740"
// //   },
// //   {
// //     heading : "Card 1",
// //     desc : "This is card 1 desc",
// //     color : "bg-slate-100",
// //     image: "https://img.freepik.com/premium-photo/product-that-is-called-natural-hair_1191871-14558.jpg?w=740"
// //   }

// // ]


// function App(){

//   return(
//     <div className="p-4">

//       <Navbar/>
//       <Routes>
//         <Route path="/" element={<Home data={data}/>}/>
//         <Route path="/about" element={<About/>}/>
//         <Route path="/contact" element={<Contact/>}/>
//         <Route path="/login" element={<Login/>}/>
//         <Route path="*" element={<NotFound/>}/>




//       </Routes>
//   //// <div className="grid grid-cols-4 gap-4 p-4">

//   //  // <Login/>
//   //   </div>
// //       {/* <div className="flex flex-col items-center bg-black p-4 rounded shadow-lg">
// //         {/* <img src="https://img.freepik.com/premium-photo/product-that-is-called-natural-hair_1191871-14558.jpg?w=740" alt="" className="w-48"/> */}
// //         {/* <img src={Vector} alt="" className="w-48"/>

// //         <h1 className="text-2xl font-medium text-white">card 1</h1>
// //         <p className="text-gray-600">Card 1 Description</p>
// //       </div> */} 
// //       {/* <Card heading="Card 1" desc="This is card 1 desc" color="bg-slate-100"/>
// //       <Card heading="Card 2" desc="This is card 2 desc" color=" bg-green-200"/>
// //       <Card heading="Card 3" desc="This is card 3 desc" color="bg-red-300"/>
// //       <Card heading="Card 4" desc="This is card 4 desc" color="bg-yellow-400"/>
// //       <Card heading="Card 5" desc="This is card 5 desc" color="bg-blue-600"/>
// //       <Card heading="Card 6" desc="This is card 6 desc" color="bg-black"/>
// //       <Card heading="Card 7" desc="This is card 7 desc" color="bg-orange-200"/>
// //       <Card heading="Card 8" desc="This is card 8 desc" color="bg-white"/>
// //       {/* <Card heading="Card 9" desc="This is card 9 desc"/> */}

// //      //</div> {data.map((item, i) => {

// //         return (
// //           // <Card key={i} heading={item.heading} desc={item.desc} color={item.color} image={item.image}/>
// //           <Card item={item}/>
// //         )
      
        
// // })}
    



// // <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 4 }}>
// // <h2>Login</h2>
// // <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', width: '300px' }}>
// //     <TextField
// //         label="Email"
// //         variant="outlined"
// //         value={email}
// //         onChange={(e) => setEmail(e.target.value)}
// //         margin="normal"
// //         required
// //     />
// //     <TextField
// //         label="Password"
// //         type="password"
// //         variant="outlined"
// //         value={password}
// //         onChange={(e) => setPassword(e.target.value)}
// //         margin="normal"
// //         required
// //     />
// //     <Button type="submit" variant="contained" color="primary" disabled={loading}>
// //         {loading ? <CircularProgress size={24} /> : "Login"}
// //     </Button>
// // </form>
// // </Box>






//   )
// }
// export default App



import Router from "./Router/Router";
// import Navbar from "./components/Navbar"; 
// import Home from "./components/Home";
// import About from "./components/About";
// import Contact from "./components/Contact";
// import Login from "./components/Login";
// import NotFound from "./components/NotFound";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}