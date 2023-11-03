
import './App.css';
import Register from './component/Register';
import Slide from './component/Slide';


function App() {
  return (
    <div className="App">
     <h1 style={{fontSize:30, margin:"0px", fontFamily: 'Dancing Script'}}>Imperial Mess</h1>
     <Slide />
     <div style={{margin: "10px auto",width:"50%"}}>
     <Register />
     </div>
    </div>
  );
}

export default App;
