import { Authprovider } from "./context/auth-context";
import Home from "./pages/Home"
import Login from "./pages/Login"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Reportes from "./pages/Reportes";
import ProtectedRouterAdmin from "./utils/ProtectedRouter";

function App() {

  return (
    <>
    <Authprovider>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        
        <Route element={<ProtectedRouterAdmin/>}>
        <Route path="/reportes" element={<Reportes/>} />
        </Route>
      </Routes>
    </Router>
    </Authprovider>
    </>
  )
}

export default App
