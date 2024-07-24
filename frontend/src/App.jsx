import { Authprovider } from "./context/auth-context";
import Home from "./pages/Home"
import Login from "./pages/Login"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Reportes from "./pages/Reportes";
import ProtectedRouterAdmin from "./utils/ProtectedRouter";
import TiposBullying from "./pages/TiposBullying";
import Impacto from "./pages/Impacto";
import Ayuda from "./pages/Ayuda";
import Incidencias from "./pages/Incidencias";

function App() {

  return (
    <>
    <Authprovider>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/tipos" element={<TiposBullying/>} />
        <Route path="/impacto" element={<Impacto/>} />
        <Route path="/ayuda" element={<Ayuda/>} />
        
        <Route element={<ProtectedRouterAdmin/>}>
          <Route path="/reportes" element={<Reportes/>} />
          <Route path="/grafica" element={<Incidencias/>} />
        </Route>
      </Routes>
    </Router>
    </Authprovider>
    </>
  )
}

export default App
