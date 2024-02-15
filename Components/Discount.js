import React, { useState } from 'react'

function Discount() {

    
    const [price,setPrice]=useState(3000)
    const [Discount,setDiscount]= useState(0.1)
    const [Discount2,setDiscount1]= useState(0.2)


    const discount1 = price - price*Discount
    const discount2 = price - price*Discount2
    

    // const discount1=()=>{
    //     setPrice(prevPrice1=>initialCount-prevPrice1*0.2)
    // }
    // const discount2=()=>{
    //     setPrice(prevPrice2=>initialCount-prevPrice2*0.3)
    // }
    // const discount3=()=>{
    //     setPrice(prevState=>initialCount-prevState*0.4)
    // }
    
  return (
    <div>
      <h1>Price:{price}</h1>
      <button onClick={()=>setPrice(discount1)}>discount1</button>
      <button onClick={()=>setPrice(discount2)}>discount2</button>
      <button onClick={()=>setPrice(3000)}>reset</button>


      {/* <button onClick={()=>setPrice(initialCount)}>Reset</button>
      <button onClick={()=>discount2()}>discount2</button>
      <button onClick={()=>discount3()}>discount2</button> */}


      
    </div>
  )
}

export default Discount
