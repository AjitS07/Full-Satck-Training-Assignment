// import Vector from "./assets/card-1.jpeg"
import Card from"./Card"


const data = [
  {
    heading : "Card 1",
    desc : "This is card 1 desc",
    color : "bg-slate-100",
    image: "https://img.freepik.com/premium-photo/product-that-is-called-natural-hair_1191871-14558.jpg?w=740"
  },
  {
    heading : "Card 1",
    desc : "This is card 1 desc",
    color : "bg-slate-100",
    image: "https://img.freepik.com/premium-photo/product-that-is-called-natural-hair_1191871-14558.jpg?w=740"
  },
  {
    heading : "Card 1",
    desc : "This is card 1 desc",
    color : "bg-slate-100",
    image: "https://img.freepik.com/premium-photo/product-that-is-called-natural-hair_1191871-14558.jpg?w=740"
  },
  {
    heading : "Card 1",
    desc : "This is card 1 desc",
    color : "bg-slate-100",
    image: "https://img.freepik.com/premium-photo/product-that-is-called-natural-hair_1191871-14558.jpg?w=740"
  },
  {
    heading : "Card 1",
    desc : "This is card 1 desc",
    color : "bg-slate-100",
    image: "https://img.freepik.com/premium-photo/product-that-is-called-natural-hair_1191871-14558.jpg?w=740"
  },
  {
    heading : "Card 1",
    desc : "This is card 1 desc",
    color : "bg-slate-100",
    image: "https://img.freepik.com/premium-photo/product-that-is-called-natural-hair_1191871-14558.jpg?w=740"
  }

]


function App(){

  return(
    <div className="grid grid-cols-4 gap-4 p-4">
      {/* <div className="flex flex-col items-center bg-black p-4 rounded shadow-lg">
        {/* <img src="https://img.freepik.com/premium-photo/product-that-is-called-natural-hair_1191871-14558.jpg?w=740" alt="" className="w-48"/> */}
        {/* <img src={Vector} alt="" className="w-48"/>

        <h1 className="text-2xl font-medium text-white">card 1</h1>
        <p className="text-gray-600">Card 1 Description</p>
      </div> */} 
      {/* <Card heading="Card 1" desc="This is card 1 desc" color="bg-slate-100"/>
      <Card heading="Card 2" desc="This is card 2 desc" color=" bg-green-200"/>
      <Card heading="Card 3" desc="This is card 3 desc" color="bg-red-300"/>
      <Card heading="Card 4" desc="This is card 4 desc" color="bg-yellow-400"/>
      <Card heading="Card 5" desc="This is card 5 desc" color="bg-blue-600"/>
      <Card heading="Card 6" desc="This is card 6 desc" color="bg-black"/>
      <Card heading="Card 7" desc="This is card 7 desc" color="bg-orange-200"/>
      <Card heading="Card 8" desc="This is card 8 desc" color="bg-white"/>
      {/* <Card heading="Card 9" desc="This is card 9 desc"/> */}

      {data.map((item, i) => {

        return (
          // <Card key={i} heading={item.heading} desc={item.desc} color={item.color} image={item.image}/>
          <Card item={item}/>
        )
      
        
})}
    </div>
  )
}
export default App