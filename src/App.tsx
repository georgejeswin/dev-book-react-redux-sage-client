import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import { PATH } from "./routes/constants";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path={PATH.SIGNUP} element={<Signup />} />
        <Route path={PATH.LOGIN} element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
