import React from 'react'
import Logo from '../imges/logoB.png'
import axios from 'axios'


export const Login = () => {

  // const LoginSubmit = async (e) => {
  //   const 
  // }

  return (
      <div style={{border: "1px solid black", height: '600px', width: '400px', margin: 'auto', marginTop: '30px', backgroundColor: 'black', alignItems: 'center', display: 'flex', flexDirection: "column", justifyContent: 'center'}}>
        <img src={Logo} alt="" style={{width: '100px'}}/>
        <p style={{color: 'white'}}>Login or Register</p>
        <input type="text" />
        <input type="text" />
        <input type="button" value="login" />
    </div>
  )
}
