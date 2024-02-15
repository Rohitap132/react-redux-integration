import React, { useState } from 'react'

function HookCounter2({number}) {
    const initialCount=0
    let [count,setCount]=useState(initialCount)

    const IncrementByNumber=()=>{
        for (var i = 0; i <5; i++) {
            setCount(prevState=>prevState+number)
        }
    }

    return (
    <div>
       <button onClick={()=>IncrementByNumber()}>Increment By Number</button><br/>
       {count}<br/>
       <button onClick={()=>setCount(0)}>Reset</button>

    </div>
  )
}

export default HookCounter2