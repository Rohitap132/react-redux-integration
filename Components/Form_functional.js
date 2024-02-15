import React from 'react'

function Form_functional() {
    const [inp,setName]=useState({Username:'',comments:''})
    const handleUsernameChange=(event)=>{
        setName({
            Username:event.target.value
        })
    }
    const handleComments=(event)=>{
        setName({
            comments:event.target.value
        })
    }
    const handleSubmit=(event)=>{
        alert(`${this.state.Username} ,${this.state.comments}`)
    }
  return (
    <form onSubmit={()=>{clickHandle()}}>
        <label>Username:</label>
        <input type='text' value={Username} onChange={()=>{handleUsernameChange()}}></input>
        <br/>
        <label>Comments</label>
        <textarea value={comments} onChange={()=>{handleComments}}></textarea>
        <button type="Submit">Submit</button>
      </form>
  )
}

export default Form_functional
