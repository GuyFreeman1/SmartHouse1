import './App.css';
import {HashRouter,Routes,Route} from 'react-router-dom'
import Main from './Comp/Main';
import AddRoom from './Comp/AddRoom';
import Rooms from './Comp/Rooms';
import Header from './Comp/Header';
import{useState} from 'react';


function App() {
const [room,setRoom]=useState([]); 


//------------------------------------------------------------

  const add = (n, c, r) => {
    let ne = {name:n, color:c,rooms:r, product:[]}; 
  setRoom([...room,ne]) 
  };
//------------------------------------------------------------
  

const addProduct =(index,typeOfProduct)=>{
  let temp = {condition:false,type:typeOfProduct} 
  room[index].product.push(temp) 
  setRoom([...room]) 
  }

  const changeCondition =(indexOfRoom,IndexOfProduct)=>{ 
  room[indexOfRoom].product[IndexOfProduct].condition  = !room[indexOfRoom].product[IndexOfProduct].condition
  setRoom([...room]) 
  }

  return (
    <div className="App">
      <Header/> 
      <HashRouter>
      

      <Routes>

      <Route path='/' element={<Main room={room}/>}/> 

      <Route path='/AddRoom' element={<AddRoom add={add}/>}/> 
      {room.map((val,index)=>{ 
        return <Route path={`room${val.name}`} element={<Rooms changeCondition={changeCondition} index={index} rooms={val.rooms} product={val.product} addProduct={addProduct} name={val.name} />}/>
      })}   

      

      </Routes>
      </HashRouter>

    </div>
  );
}

export default App;
