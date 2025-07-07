import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  setIsAdmin: (value: boolean) => void;
}

const AdminLogin: React.FC<Props> = ({ setIsAdmin }) => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Cambia "admin123" por la contraseña que quieras
    if (password === "admin123") {
      setIsAdmin(true);
      navigate("/admin");
    } else {
      setError("Contraseña incorrecta");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 300, margin: "40px auto" }}>
      <h2>Acceso Administrador</h2>
      <label>
        Contraseña:
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
      </label>
      <button type="submit">Entrar</button>
      {error && <div style={{ color: "red", marginTop: 10 }}>{error}</div>}
    </form>
  );
};

export default AdminLogin;