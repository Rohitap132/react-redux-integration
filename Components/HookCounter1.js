//rcfe
import React, { useState } from 'react'

function HookCounter1() {
    const [count,setCount]=useState(0)


function Both(){
    // setCount(count+1)
    // setCount(count-1)
    setCount(prevCount=>prevCount+1)
    setCount(prevCount=>prevCount-1)
}
    
  return (
    <div>
       <h1>Count-{count}</h1>
       <button onClick={()=>setCount(count+1)}>Increment</button>
       <button onClick={()=>setCount(count-1)}>Decrement</button>
       <button onClick={()=>Both()}>Both</button>
    </div>
  )
}

export default HookCounter1