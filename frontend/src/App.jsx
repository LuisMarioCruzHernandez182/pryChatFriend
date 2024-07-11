import { Authprovider } from "./context/auth-context";
import Home from "./pages/Home"
import Login from "./pages/Login"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Reportes from "./pages/Reportes";

function App() {

  return (
    <>
    <Authprovider>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/reportes" element={<Reportes/>} />
      </Routes>
    </Router>
    </Authprovider>
    </>
  )
}

export default App
