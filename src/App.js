import React, {useEffect, useState} from 'react';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"

import Navbar from "./components/navbar.component"
import Home from "./components/home.component";
import Signup from "./components/signup.component";
import Login from "./components/login.component";
import More from "./components/more.component";
import Profile from './components/profile.component';
import Viewer from './components/viewer.component';
import Create from './components/create.component';

 
function App() {
  const [user,setLoginUser] = useState({});

  useEffect(() => {
    const loggedIn = localStorage.getItem('user');
    if (loggedIn && !user.id) {
      setLoginUser(JSON.parse(loggedIn));
    }
  });

  return (
    <Router>
      <div className="container-fluid bg">
        <Navbar user={user} logout={setLoginUser}/>
        <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/login" element={<Login setLoginUser={setLoginUser}/>} />
        <Route path="/more" element={<More />} />
        <Route path="/profile" element={<Profile user={user}/>} />
        <Route path="/create" element={<Create user={user}/>} />
        <Route path="/viewer/:id" element={<Viewer user={user} />} />
        </Routes>
      </div>
    </Router>
  );
}
 
export default App;