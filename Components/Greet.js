//rfc
// import React from 'react'
// import Hello from './Hello'

// export default function Greet() {
//   return (
//     <div>
//       <h1>Greet!</h1>
//       <Hello></Hello>
//     </div>
//   )
// }

//rafce
// import React from 'react'

// const Greet = ({firstName,lastname}) => {
  
//   return (
//     <div>
//       <h3>good morning! - {firstName} {lastname}</h3>
//     </div>
//   )
// }

// export default Greet
// import React from 'react'

// export default function Greet(props) {
//   return (
//     <div>
//       <h2>good morning! {props.firstName}</h2>
//     </div>
//   )
// }
// import React from 'react'
// import PropTypes from 'prop-types'

// const Greet = props => {
//   return (
//     <div>
//       <h2>{this.props.empid} , {this.props.ename}</h2>
//       {this.props.children}
//     </div>
//   )
// }

// Greet.propTypes = {
//  empid:PropTypes.number,
//  ename:PropTypes.string.isRequired
// }
// Greet.defaultProps = {
//   empid:132,
//   ename:"Farishta"
// }

// export default Greet
import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Greet extends Component {
  static propTypes = {
    empid:PropTypes.number,
    ename:PropTypes.string.isRequired
  }

  render() {
    return (
      <div>
      <h2>  {this.props.empid} {this.props.ename}</h2>
      {this.props.children}
      </div>
    )
  }
  static defaultProps = {
    empid:132,
    ename:"Farishta"
  }
}


export default Greet




