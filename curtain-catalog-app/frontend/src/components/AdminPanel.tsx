import React, { useState } from "react";

interface AdminPanelProps {
  setPreciosTela: (precios: { [key: string]: number }) => void;
  setPreciosSistema: (precios: { [key: string]: { [key: string]: number } }) => void;
}

const subtipos = ["Enrollable", "Riel", "Persiana"];

const AdminPanel: React.FC<AdminPanelProps> = ({ setPreciosTela, setPreciosSistema }) => {
  const [tela, setTela] = useState({ Blackout: "", Screen: "", Tradicional: "" });
  const [sistema, setSistema] = useState({
    Manual: { Enrollable: "", Riel: "", Persiana: "" },
    Motorizado: { Enrollable: "", Riel: "", Persiana: "" }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      Object.values(tela).every(v => v) &&
      Object.values(sistema.Manual).every(v => v) &&
      Object.values(sistema.Motorizado).every(v => v)
    ) {
      setPreciosTela({
        Blackout: Number(tela.Blackout),
        Screen: Number(tela.Screen),
        Tradicional: Number(tela.Tradicional),
      });
      setPreciosSistema({
        Manual: {
          Enrollable: Number(sistema.Manual.Enrollable),
          Riel: Number(sistema.Manual.Riel),
          Persiana: Number(sistema.Manual.Persiana),
        },
        Motorizado: {
          Enrollable: Number(sistema.Motorizado.Enrollable),
          Riel: Number(sistema.Motorizado.Riel),
          Persiana: Number(sistema.Motorizado.Persiana),
        }
      });
      alert("¡Precios guardados!");
    } else {
      alert("Completa todos los campos antes de guardar.");
    }
  };

  return (
    <div>
      <h2>Panel de Administración</h2>
      <form onSubmit={handleSubmit}>
        <h3>Precios de Telas ($ por m²)</h3>
        <label>
          Blackout:
          <input type="number" value={tela.Blackout} onChange={e => setTela({ ...tela, Blackout: e.target.value })} required />
        </label>
        <label>
          Screen:
          <input type="number" value={tela.Screen} onChange={e => setTela({ ...tela, Screen: e.target.value })} required />
        </label>
        <label>
          Tradicional:
          <input type="number" value={tela.Tradicional} onChange={e => setTela({ ...tela, Tradicional: e.target.value })} required />
        </label>
        <h3>Precios de Sistemas Manuales ($ por m)</h3>
        {subtipos.map((tipo) => (
          <label key={`manual-${tipo}`}>
            {tipo}:
            <input
              type="number"
              value={sistema.Manual[tipo as keyof typeof sistema.Manual]}
              onChange={e =>
                setSistema({
                  ...sistema,
                  Manual: { ...sistema.Manual, [tipo]: e.target.value }
                })
              }
              required
            />
          </label>
        ))}
        <h3>Precios de Sistemas Motorizados ($ por m)</h3>
        {subtipos.map((tipo) => (
          <label key={`motorizado-${tipo}`}>
            {tipo}:
            <input
              type="number"
              value={sistema.Motorizado[tipo as keyof typeof sistema.Motorizado]}
              onChange={e =>
                setSistema({
                  ...sistema,
                  Motorizado: { ...sistema.Motorizado, [tipo]: e.target.value }
                })
              }
              required
            />
          </label>
        ))}
        <button type="submit" style={{ marginTop: 16 }}>Guardar precios</button>
      </form>
    </div>
  );
};

export default AdminPanel;