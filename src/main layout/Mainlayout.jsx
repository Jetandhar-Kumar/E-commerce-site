import { BrowserRouter, Route, Routes } from "react-router";
import Navbar from "./../assets/components/navbar/Navbar";

import Home from "../pages/home/Home";
import Auth from "../pages/auth/Auth";
import Login from "../pages/auth/login/Login";
import Register from "../pages/auth/register/Register";
import Error from "../pages/error/Error";
import Authcheck from "../assets/authcheck/Authcheck";


const Mainlayout = () => {
  return (
    <BrowserRouter>
    {/* navbar */}
    <Navbar />
    <Routes>
      <Route path="/" element={
        <Authcheck >
        <Home />
        </Authcheck>
        }/>
      <Route path="/auth" element={<Auth/>}> 
          <Route path="login" element ={<Login />}/>
          <Route path="register" element={<Register />}/>
      </Route>

      {/* Not found routes */}
      <Route path="*" element={<Error />}/>
      
    </Routes>
    </BrowserRouter>
  );
};

export default Mainlayout