import React from "react";

interface CatalogProps {
  preciosTela: { [key: string]: number } | null;
}

const modelos = [
  { id: 1, nombre: "Blackout", imagen: "https://my.cortinas.mx/imagenes/cortinas-black-out.jpg" },
  { id: 2, nombre: "Screen", imagen: "https://www.gravent.es/images/79491/content_image_full.jpg" },
  { id: 3, nombre: "Tradicional", imagen: "https://bellizzi.com.uy/wp-content/uploads/MG_0370-scaled.jpg" },
];

const Catalog: React.FC<CatalogProps> = ({ preciosTela }) => {
  if (!preciosTela) return <p style={{color: "red"}}>Precios no configurados. Ingrese como admin para establecerlos.</p>;
  return (
    <>
      <h2>Modelos Prefabricados</h2>
      <div className="catalog-grid">
        {modelos.map((m) => (
          <div key={m.id} className="catalog-card">
            <img src={m.imagen} alt={m.nombre} />
            <h3>Cortina {m.nombre}</h3>
            <p>Precio fijo: <b>${preciosTela[m.nombre]}</b></p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Catalog;