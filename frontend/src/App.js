import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import { useSelector } from "react-redux";
import Home from "./pages/Home";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import Student from "./pages/Student";
import ChiefWarden from "./pages/ChiefWarden";
import Accountant from './pages/Accountant';

function App() {
  const { loading } = useSelector((state) => state.loaders);
  const { user } = useSelector((state) => state.users);
  return (
    <div className='App'>
    {/* <ChiefWarden /> */}

   {loading&&(
      <div className="loader-parent">
      <div className="loader"></div>
      </div>
    )}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProtectedRoute/>} />
          <Route path="/login" element={<Home/>} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password/:id/:token" element={<ResetPassword />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
