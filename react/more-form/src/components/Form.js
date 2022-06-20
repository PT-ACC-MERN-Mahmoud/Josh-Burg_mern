import React, { useState } from 'react';

const Form = (props) => {
  const [ firstName, setFirstName ] = useState("");
  const [ lastName, setLastName ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");
  const [ confirmPassword, setConfirmPassword] = useState("");

  // using an object to hold style options for our results div
  const formDataDivStyle = {
    textAlign: "left", 
    width: "450px", 
    margin: "auto",
  }

  const inputDataDivStyle = {
    borderRadius: "5px",
    backgroundColor: "#f2f2f2",
    border: "1px solid darkgrey",
    padding: "0px 10px",
    margin: "5px",
  }


  // The return can only return a single React element, it does NOT
  //    have to be a div.  It can be a form or any other element.
  return (
    <div>
      <form style={{ marginTop: "20px" }}>
        <div style={inputDataDivStyle}>
          <label htmlFor="firstName">First Name</label>
          <input 
            type="text" 
            name="firstName"
            onChange={ (e) => setFirstName(e.target.value) }
          />
        </div>
          { firstName.length > 0 && firstName.length < 2 ?
          (<p>First Name must be at least 2 Character</p>) : null
          }
        <div style={inputDataDivStyle}>
          <label htmlFor="lastName">Last Name</label>
          <input 
            type="text" 
            name="lastName" 
            onChange={ (e) => setLastName(e.target.value) }
          />
        </div>
        { lastName.length > 0 && lastName.length < 2 ?
          (<p>First Name must be at least 2 Character</p>) : null
          }
        <div style={inputDataDivStyle}>
          <label htmlFor="email">Email</label>
          <input 
            type="text" 
            name="email" 
            onChange={ (e) => setEmail(e.target.value) }
          />
        </div>
        { email.length > 0 && email.length < 5 ?
          (<p>email must be at least 5 Character</p>) : null
          }
        <div style={inputDataDivStyle}>
          <label htmlFor="password">Password</label>
          <input 
            type="password" 
            name="password" 
            onChange={ (e) => setPassword(e.target.value) }
          />
        </div>
        { password.length > 0 && password.length < 8 ?
          (<p>First Name must be at least 8 Character</p>) : null
          }
        <div style={inputDataDivStyle}>
          <label htmlFor="confirmPassord">Confirm Password</label>
          <input 
            type="password" 
            name="confirmPassword" 
            onChange={ (e) => setConfirmPassword(e.target.value) }
          />
        </div>
        { confirmPassword !== password ?
          (<p>Passwords must be matching</p>) : null
          }
      </form>

      <div style={ formDataDivStyle }>
        <h3 style={{ textAlign: 'center' }}>Your Form Data</h3>
        <p>
          <label>First Name: </label>{ firstName }
        </p>
        <p>
          <label>Last Name: </label>{ lastName }
        </p>
        <p>
          <label>Email: </label>{ email }
        </p>
        <p>
          <label>Password: </label>{ password }
        </p>
        <p>
          <label>Confirm Password: </label>{ confirmPassword }
        </p>
      </div>
    </div>
  )
}

export default Form;