import React from 'react'
import PropTypes from 'prop-types'
import './hel.css';



const Register = props => {
  return (
    <div>
        <table className="h">
          <tr>
            <td>Name</td>
            <td>{props.name}</td>
          </tr>
          <tr>
            <td>Age</td>
            <td>{props.na}</td>
          </tr>
          <tr>
            <td>department</td>
            <td>{props.dpt}</td>
          </tr>
          <tr>
            <td>Image</td>
            <td><img src={props.picture} alt="sorry"/></td>
          </tr>
        </table>
      
    </div>
  )
}

Register.propTypes = {
 na:PropTypes.number
}
Register.defaultProps = {
  name:"Rohit" ,
  na:21 ,
  picture:<img alt="sorry"/>,
  dpt:"AEROSPACE"
}

export default Register
