import Props from './Props'

function App() {
 let Add = {
    FirstName :'Rohan',
    age : 25,
     address:'delhi'
 }
  
  return (
     <div className="p-4  ">
    <>
     
      <Props name={Add}   />
      
    
    </>
    </div>
  )
}

export default App

