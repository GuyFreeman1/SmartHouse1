import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import './addRoom.css';

export default function AddRoom(props) {

  const [name,setName]=useState(''); 
  const [color,setColor]=useState(''); 
  const [rooms,setRooms]=useState('default'); 



//----------------------------------------------------------------------------  



  const nav = useNavigate(); 


//---------------------------------------------------------------------------


  const checkRoom = ()=>{
    let room =document.getElementById('room') 
    if(room.value === "default" || name < 1 ){ 
      alert('ERROR'); 
      nav('/') 
   
  } else{ 
      alert('A Room Has Been Haded') 
      props.add(name, color, rooms , ); 
      nav('/') 
  }
 }



  return (
    <div>

<select onChange={(e)=>{setRooms(e.target.value)}} class="lvl-btn" id="room" name="rooms"> 
  <option value="default">Choose a room</option>
  <option value="Bed-Room">Bed-Room</option>
  <option value="Bathroom">Bath-Room</option>
  <option value="Kitchen">Kitchen</option>
</select>
<br /><br />
<input class="lvl-btn" onChange={(e)=>{setName(e.target.value) }} type="text" maxLength='5' minLength='1' placeholder='Enter A Room Name'/> {/*מעדכן לנו את הערך של שם החדר בהוק*/}
<br /><br />
<input class="lvl-btn" onChange={(e)=>{setColor(e.target.value) }} type="color" /> 
<br /><br />
<button class="lvl-btn" onClick={checkRoom}>Create</button> 
 </div>
  )
}