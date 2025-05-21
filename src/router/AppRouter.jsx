import React, { useState } from "react";
import Home from "../components/Home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Blog from "../components/Blog";
import Auth from "../components/Auth";
import ProtectedRoute from "./ProtectedRoute";
import { auth } from "../firebaseConfig";

const AppRouter = ({
}) => {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <nav>
        <Link to="/">Главная</Link> | <Link to="/posts">Блог</Link> |  {!user ? (<Link to="/login">Войти</Link>): (<button onClick={() => auth.signOut().then(() => setUser(null))}>Выйти</button>)}
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<ProtectedRoute user={user} element={<Blog user={user} />} />} />
        <Route path="/login" element={<Auth setUser={setUser} />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
