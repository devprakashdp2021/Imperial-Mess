
import './App.css';
import Register from './pages/Register';
import Slide from './pages/Slide';
import Login from './pages/Login';
import { useState } from 'react';

function App() {
  const [isAuthenticated, setAuthenticated] = useState(true);
  function handleAuthentication(){
    setAuthenticated(!isAuthenticated);
  }
  return (
    <div className="App">
     <h1 style={{fontSize:30, margin:"0px", fontFamily: 'Dancing Script'}}>Imperial Mess</h1>
     <Slide />
     <div style={{margin: "10px auto",width:"50%"}}>
      {
        isAuthenticated?<Login handleRegisterNow={handleAuthentication}/>:<Register handleLoginNow={handleAuthentication}/>
      }
     </div>
    </div>
  );
}

export default App;
