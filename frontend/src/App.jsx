import logo from './logo.svg';
import './App.css';
import NavBar from "./components/NavBar";
import Login from "./pages/Login";
import './styles/colors.css'
import './styles/utilities.css'
import './styles/login.css'
import './styles/base.css'
import './styles/courses.css'
import './styles/stream.css'
import { Routes, Route, useLocation } from "react-router-dom";
import CoursesStreams from './pages/CoursesStreams';
import Courses from './pages/Courses';
import SignUp from './pages/SignUp';
import Stream from './pages/Stream';

const App = () => {
  const location = useLocation();

  return (
    <div className="App">
      {location.pathname !== "/" && location.pathname !== "/signUp" && <NavBar /> }

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/coursesStreams" element={<CoursesStreams />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/stream/:streamID" element={<Stream />} />
        <Route path="/*" element={<h1>Not Found</h1>} />
      </Routes>
    </div>
  );
};

export default App;

