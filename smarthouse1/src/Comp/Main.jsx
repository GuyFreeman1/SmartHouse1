import React from 'react';
import { Link,useNavigate } from 'react-router-dom';
import './Main.css';

export default function Main(props) {

  const nav = useNavigate();


  return (
    <div>
{props.room.map((val)=>{
  return  <button class="lvl-btn1" onClick={()=>{nav(`room${val.name}`)}}  style={{backgroundColor:val.color}}>{val.name}</button>
})}    
      <br /><br /><br />
       <Link to={'/AddRoom'}> <button className='btn'>+</button></Link> 
    </div>
  )
}