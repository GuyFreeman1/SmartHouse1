import React,{useState} from 'react'
import AddProduct from './AddProduct'
// import AddRoom from './AddRoom';
// import AddProduct from './AddProduct'

export default function Rooms(props) {

  const [flag,setFlag] =useState(false) 

  const show =()=>{
      if(flag === false){
  
          return <div> <AddProduct index={props.index} addProduct={props.addProduct} add={props.add} room={props.room} product={props.product} rooms={props.rooms}/></div>
    

      }else{
          return <button onClick={change}>+</button> 
      }
  }
  const change =()=>{ 
      setFlag(!flag) 
  }
  
    return (
      <div>
  
  <h1>{props.name}</h1> 
  <h1>{props.rooms}</h1> 
  
  {show()} 
  

  

  

  {props.product.map((val,index)=>{
  
  let condition = val.condition ? 'green' : 'red'
  return (
  
  <button  class="lvl-btn" onClick={()=>{props.changeCondition(props.index,index)}}   style={{backgroundColor:condition}}>{val.type}</button> 

  
  )
  
  })}
  
  
  
  
      </div>
    )
  }