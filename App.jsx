import { useState } from "react";
import "./styles.css"; // importa o CSS

export default function App() {
  const [forma, setForma] = useState("");
  const [base, setBase] = useState("");
  const [altura, setAltura] = useState("");
  const [lado, setLado] = useState("");
  const [resultado, setResultado] = useState(null);

  const calcular = () => {
    let area = 0;
    if (forma === "triangulo") {
      area = (parseFloat(base) * parseFloat(altura)) / 2;
    } else if (forma === "retangulo") {
      area = parseFloat(base) * parseFloat(altura);
    } else if (forma === "quadrado") {
      area = parseFloat(lado) * parseFloat(lado);
    }
    setResultado(area.toFixed(2));
  };

  return (
    <div className="container">
      <h1>Calculadora de Áreas</h1>

      <select value={forma} onChange={(e) => setForma(e.target.value)}>
        <option value="">Selecione a forma</option>
        <option value="triangulo">Triângulo</option>
        <option value="retangulo">Retângulo</option>
        <option value="quadrado">Quadrado</option>
      </select>

      {forma === "triangulo" && (
        <>
          <input
            type="number"
            placeholder="Base"
            value={base}
            onChange={(e) => setBase(e.target.value)}
          />
          <input
            type="number"
            placeholder="Altura"
            value={altura}
            onChange={(e) => setAltura(e.target.value)}
          />
        </>
      )}

      {forma === "retangulo" && (
        <>
          <input
            type="number"
            placeholder="Base"
            value={base}
            onChange={(e) => setBase(e.target.value)}
          />
          <input
            type="number"
            placeholder="Altura"
            value={altura}
            onChange={(e) => setAltura(e.target.value)}
          />
        </>
      )}

      {forma === "quadrado" && (
        <input
          type="number"
          placeholder="Lado"
          value={lado}
          onChange={(e) => setLado(e.target.value)}
        />
      )}

      <button onClick={calcular}>Calcular</button>

      {resultado && (
        <p>
          Área do {forma}: <strong>{resultado}</strong>
        </p>
      )}
    </div>
  );
}
