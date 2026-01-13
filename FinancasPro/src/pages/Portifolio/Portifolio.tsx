import { useState } from "react";
import "./Portifolio.css";

export default function Portifolio() {
  const [patrimonio, setPatrimonio] = useState([
    { ticker: "PETR4", qtd: 50, precoMedio: 34.20, atual: 38.50 },
  ]);

  // Estados para o formulário
  const [novoTicker, setNovoTicker] = useState("");
  const [novaQtd, setNovaQtd] = useState(0);
  const [novoPreco, setNovoPreco] = useState(0);

  const adicionarAtivo = () => {
    if (novoTicker && novaQtd > 0) {
      const novoAtivo = {
        ticker: novoTicker.toUpperCase(),
        qtd: novaQtd,
        precoMedio: novoPreco,
        atual: novoPreco // No MVP, assumimos que o atual é o de compra
      };
      setPatrimonio([...patrimonio, novoAtivo]); // AQUI usamos o setPatrimonio!
      setNovoTicker(""); setNovaQtd(0); setNovoPreco(0);
    }
  };

  return (
    <main className="portfolio-container">
      <h1>Meu Portfólio (RF-06)</h1>
      
      <section className="add-asset-form" style={{ marginBottom: '20px', padding: '15px', border: '1px solid #ddd' }}>
        <h3>Adicionar Novo Ativo</h3>
        <input type="text" placeholder="Ticker" value={novoTicker} onChange={(e) => setNovoTicker(e.target.value)} />
        <input type="number" placeholder="Qtd" value={novaQtd} onChange={(e) => setNovaQtd(Number(e.target.value))} />
        <input type="number" placeholder="Preço" value={novoPreco} onChange={(e) => setNovoPreco(Number(e.target.value))} />
        <button onClick={adicionarAtivo}>Adicionar</button>
      </section>

      <table className="portfolio-table" style={{ width: '100%', textAlign: 'left' }}>
        <thead>
          <tr>
            <th>Ticker</th>
            <th>Qtd</th>
            <th>PM</th>
            <th>Desempenho</th>
          </tr>
        </thead>
        <tbody>
          {patrimonio.map((item, index) => (
            <tr key={index}>
              <td>{item.ticker}</td>
              <td>{item.qtd}</td>
              <td>R$ {item.precoMedio.toFixed(2)}</td>
              <td style={{ color: item.atual >= item.precoMedio ? "green" : "red" }}>
                {((item.atual / item.precoMedio - 1) * 100).toFixed(2)}%
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}