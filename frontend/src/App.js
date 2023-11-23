import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import { useSelector } from "react-redux";
import Home from "./pages/Home";
import Student from "./pages/Student";
import ChiefWarden from "./pages/ChiefWarden";
import Accountant from './pages/Accountant';

function App() {
  const { loading } = useSelector((state) => state.loaders);
  const { user } = useSelector((state) => state.users);
  return (
    <div className='App'>
   
   {loading&&(
      <div className="loader-parent">
      <div className="loader"></div>
      </div>
    )}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProtectedRoute><Accountant/></ProtectedRoute>} />
          <Route path="/login" element={<Home/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
