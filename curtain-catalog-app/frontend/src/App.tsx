import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Catalog from './components/Catalog';
import Calculator from './components/Calculator';
import AdminPanel from './components/AdminPanel';
import AdminLogin from './components/AdminLogin';

const App: React.FC = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [preciosTela, setPreciosTela] = useState<{ [key: string]: number } | null>(null);
const [preciosSistema, setPreciosSistema] = useState<{
  [key: string]: { [key: string]: number }
} | null>(null);
  return (
    <Router>
      <header>
        <h1>Catalogo Virtual</h1>
        <nav>
          <Link to="/">bienvenida</Link>
          <Link to="/catalog">Catálogo</Link>
          <Link to="/calculator">Calculadora</Link>
          {isAdmin ? (
            <>
              <Link to="/admin">Admin</Link>
              <button style={{marginLeft: 10}} onClick={() => setIsAdmin(false)}>Salir</button>
            </>
          ) : (
            <Link to="/admin-login">Admin</Link>
          )}
        </nav>
      </header>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog preciosTela={preciosTela} />} />
          <Route path="/calculator" element={<Calculator preciosTela={preciosTela} preciosSistema={preciosSistema} />} />
          <Route path="/admin" element={isAdmin ? <AdminPanel setPreciosTela={setPreciosTela} setPreciosSistema={setPreciosSistema} /> : <Navigate to="/admin-login" />} />
          <Route path="/admin-login" element={<AdminLogin setIsAdmin={setIsAdmin} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;