import logo from './logo.svg';
import './App.css';
import NavBar from "./components/NavBar";
import Login from "./pages/Login";
import './styles/colors.css'
import './styles/utilities.css'
import './styles/login.css'

import { Routes, Route, useLocation } from "react-router-dom";

const App = () => {
  const location = useLocation();

  return (
    <div className="App">
      {location.pathname !== "/" && <NavBar />}

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/*" element={<h1>Not Found</h1>} />
      </Routes>
    </div>
  );
};

export default App;

