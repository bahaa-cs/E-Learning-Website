import logo from './logo.svg';
import './App.css';
import NavBar from "./components/NavBar";
import Login from "./pages/Login";
import './styles/colors.css'
import './styles/utilities.css'
import './styles/login.css'
import './styles/base.css'
import { Routes, Route, useLocation } from "react-router-dom";
import Streams from './pages/Streams';
import SignUp from './pages/SignUp';

const App = () => {
  const location = useLocation();

  return (
    <div className="App">
      {location.pathname !== "/" && location.pathname !== "/signUp" && <NavBar /> }

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/streams" element={<Streams />} />
        <Route path="/*" element={<h1>Not Found</h1>} />
      </Routes>
    </div>
  );
};

export default App;
