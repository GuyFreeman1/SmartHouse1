import React,{useState} from 'react'

export default function AddProduct(props) {

const [products,setProduct]=useState('Air conditioner') 

//-----------------------------------------------------------------------------------------------------------


const checkProducts =()=>{
  let product = props.product  
  if (products === 'Stereo system' && product.filter(x => x.type === 'Stereo system').length > 0) { 
      alert('Error! you can have 1 stereo system only'); 
  } else if (products === 'Heater' && props.rooms !== "Bathroom") { 
      alert('Error! only Bath-Room can have heaters'); 
  } else if (product.length === 5) {
      alert('Error! you can contain 5 products maximum')
  } else {
      props.addProduct(props.index, products); 
  }
  props.show(false); 

}
  return (
    <div>
        
        <select class="lvl-btn" onChange={(e)=>{setProduct(e.target.value)}} > 
         <option value="Air conditioner">Air conditioner</option>
              <option value="Heater">Heater</option>
              <option value="Stereo system">Stereo system</option>
              <option value="Lamp">Lamp</option>
        </select>

<br /><br />
<button class="lvl-btn" onClick={() => checkProducts()}>Add</button> 
<br /><br />
    </div>
  )
}