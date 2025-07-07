import React, { useState } from "react";

interface CalculatorProps {
  preciosTela: { [key: string]: number } | null;
  preciosSistema: { [key: string]: { [key: string]: number } } | null;
}

const subtipos = ["Enrollable", "Riel", "Persiana"];

const Calculator: React.FC<CalculatorProps> = ({ preciosTela, preciosSistema }) => {
  const [ancho, setAncho] = useState("");
  const [alto, setAlto] = useState("");
  const [tipoTela, setTipoTela] = useState("Blackout");
  const [sistema, setSistema] = useState("Manual");
  const [subtipo, setSubtipo] = useState("Enrollable");
  const [presupuesto, setPresupuesto] = useState<string | null>(null);

  if (!preciosTela || !preciosSistema) {
    return <p style={{color: "red"}}>Precios no configurados. Ingrese como admin para establecerlos.</p>;
  }

 const calcularPresupuesto = (e: React.FormEvent) => {
    e.preventDefault();
    if (!ancho || !alto) return;
    // Área mínima 1 m²
    const area = Math.max((parseFloat(ancho) * parseFloat(alto)) / 10000, 1);
    // Metros lineales mínimos: 1 metro
    const metrosLineales = Math.max(parseFloat(ancho) / 100, 1);
    const precioTela = area * preciosTela[tipoTela];
    const precioSistema = metrosLineales * preciosSistema[sistema][subtipo];
    const precio = precioTela + precioSistema;
    setPresupuesto(precio.toFixed(2));
};

  return (
    <>
      <h2>Calculadora de Presupuesto a Medida</h2>
      <form onSubmit={calcularPresupuesto}>
        <label>
          Ancho (cm):
          <input type="number" value={ancho} onChange={e => setAncho(e.target.value)} required />
        </label>
        <label>
          Alto (cm):
          <input type="number" value={alto} onChange={e => setAlto(e.target.value)} required />
        </label>
        <label>
          Tipo de tela:
          <select value={tipoTela} onChange={e => setTipoTela(e.target.value)}>
            {Object.keys(preciosTela).map((tela) => (
              <option key={tela} value={tela}>{tela}</option>
            ))}
          </select>
        </label>
        <label>
          Sistema de instalación:
          <select value={sistema} onChange={e => { setSistema(e.target.value); setSubtipo("Enrollable"); }}>
            {Object.keys(preciosSistema).map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </label>
        <label>
          Tipo de sistema:
          <select value={subtipo} onChange={e => setSubtipo(e.target.value)}>
            {subtipos.map((st) => (
              <option key={st} value={st}>{st}</option>
            ))}
          </select>
        </label>
        <button type="submit">Calcular presupuesto</button>
      </form>
      {presupuesto && (
        <div style={{ marginTop: 20, fontWeight: "bold", fontSize: "1.2rem" }}>
          Presupuesto estimado: ${presupuesto}
        </div>
      )}
    </>
  );
};

export default Calculator;