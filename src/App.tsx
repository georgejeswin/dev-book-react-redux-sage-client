import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile";
import Signup from "./pages/signup/Signup";
import { PATH } from "./routes/constants";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path={PATH.HOME} element={<Home />} />
        <Route path={PATH.LOGIN} element={<Login />} />
        <Route path={PATH.SIGNUP} element={<Signup />} />
        <Route path={PATH.USER_PROFILE} element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
