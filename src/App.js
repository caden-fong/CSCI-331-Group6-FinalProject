import React, {useEffect, useState} from 'react';
import { BrowserRouter as Router, Route, Routes, useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"

import Navbar from "./components/navbar.component"
import Home from "./components/home.component";
import Signup from "./components/signup.component";
import Login from "./components/login.component";
import More from "./components/more.component";
import Profile from './components/profile.component';
import Viewer from './components/viewer.component';
import Creator from './components/creator.component';

 
function App() {
  const [user,setLoginUser] = useState({});
  useEffect(() => {
    const loggedIn = localStorage.getItem('user');
    if (loggedIn) {
      setLoginUser(JSON.parse(loggedIn));
    }
  }, []);

  return (
    <Router>
      <div className="container-fluid bg">
        <Navbar user={user}/>
        <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/login" element={<Login setLoginUser={setLoginUser}/>} />
        <Route path="/more" element={<More user={user}/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/creator" element={<Creator/>} />
        <Route path="/viewer" element={<Viewer/>} />
        <Route path="/create" element={<Creator/>} />
        </Routes>
      </div>
    </Router>
  );
}
 
export default App;