// import React, { Component } from 'react'

// export  class UserGreeting extends Component {
//     constructor(props) {
//       super(props)
    
//       this.state = {
//          isloggedIn:true
//       }
//     }
//     changeValue(){
//         this.setState({
//             isloggedIn:false
//         })
//     }
    
//   render() {
//     // let message 
//     // if(this.props.isloggedIn){
//     //     message = <h1>hello!</h1>
//     // }
//     // else{
//     //     message = <h1>welcome Guest!</h1>
//     // }
//     // return message

//     //if else
//     // if(this.state.isloggedIn){
//     //     return (
//     //         <div>
//     //           welcome everyone!
//     //         </div>
//     //       )
//     // }
//     // else{
//     //     return (
//     //         <div>
//     //           <button onClick={()=>{this.changeValue()}}>Click here</button>  
//     //           welcome Rohit!
//     //         </div>
//     //       )
//     // }

//     //ternary operator
//     return(
//         (this.state.isloggedIn)?
//         <h2>WELCOME ROHIT!</h2>:
//         <h2>WELOCME GUEST!</h2>
//     )
   
//   }
// }
// export default UserGreeting;

import React, { useState } from 'react'

function UserGreeting(props) {
    const {loggedIn} = props
    let [value,setState]= useState(loggedIn)


  if(loggedIn){
  return (
    <div>
      <h1>Welcome User !</h1>

    </div>
  )
  }
  
  }

export default UserGreeting

