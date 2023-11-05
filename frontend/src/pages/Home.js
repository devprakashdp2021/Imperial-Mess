import React from 'react'
import Register from './Register';
import Slide from './Slide';
import Login from './Login';
import { useState } from 'react';

function Home() {
    const [isAuthenticated, setAuthenticated] = useState(true);
  function handleAuthentication(){
    setAuthenticated(!isAuthenticated);
  }
  return (
    <div>
      <h1 style={{fontSize:30, margin:"0px", fontFamily: 'Dancing Script'}}>Imperial Mess</h1>
     <Slide />
     <div style={{margin: "10px auto",width:"50%"}}>
      {
        isAuthenticated?<Login handleRegisterNow={handleAuthentication}/>:<Register handleLoginNow={handleAuthentication}/>
      }
     </div>
    </div>
  )
}

export default Home;
