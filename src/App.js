import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Routes, useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"

import Navbar from "./components/navbar.component"
import Home from "./components/home.component";
import Signup from "./components/signup.component";
import Login from "./components/login.component";
import More from "./components/more.component";

 
function App() {
  const [user,setLoginUser] = useState({_id: 'alsdkfja'});

  return (
    <Router>
      <div className="container-fluid bg">
        <Navbar />
        <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/login" element={<Login setLoginUser={setLoginUser}/>} />
        <Route path="/more" element={<More user={user}/>} />
        </Routes>
      </div>
    </Router>
  );
}
 
export default App;