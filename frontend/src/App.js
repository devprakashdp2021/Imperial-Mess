import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import { useSelector } from "react-redux";
import Home from './pages/Home';
import Student from './pages/Student';
import ChiefWarden from "./pages/ChiefWarden";

function App() {
  const {loading}=useSelector((state)=>state.loaders);
  return (
    <div className='App'>
    {/* <ChiefWarden /> */}
    {/* <Student /> */}

   {loading&&(
      <div className="loader-parent">
      <div className="loader"></div>
      </div>
    )}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProtectedRoute><Student/></ProtectedRoute>} />
          <Route path="/login" element={<Home/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
