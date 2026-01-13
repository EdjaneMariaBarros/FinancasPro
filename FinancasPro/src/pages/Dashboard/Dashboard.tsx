import { Link } from "react-router-dom";
import "./Dashboard.css";

export default function Dashboard() {
  // Simulação de dados (Tickers conforme o Glossário) [cite: 76, 77]
  const acoesDestaque = [
    { ticker: "PETR4", preco: "R$ 38,50", variacao: "+1.2%" },
    { ticker: "MGLU3", preco: "R$ 2,15", variacao: "-0.5%" },
    { ticker: "VALE3", preco: "R$ 65,20", variacao: "+0.8%" },
  ];

  return (
    <main className="dashboard-container">
      <header className="dashboard-header">
        <h1>Dashboard Financeiro</h1>
        <p>Visão geral dos seus ativos e rentabilidade[cite: 26].</p>
      </header>
      
      <section className="cards-grid">
        {acoesDestaque.map((ativo) => (
          <div key={ativo.ticker} className="asset-card">
            <h3>{ativo.ticker}</h3>
            <p className="price">{ativo.preco}</p>
            <span className={`status ${ativo.variacao.startsWith('+') ? 'up' : 'down'}`}>
              {ativo.variacao}
            </span>
            <Link to={`/asset/${ativo.ticker}`} className="details-link">Ver Detalhes</Link>
          </div>
        ))}
      </section>

      <section className="actions-section">
        <h2>Ações Rápidas (Must Have) [cite: 65]</h2>
        <div className="button-group">
          <button className="btn-primary" onClick={() => alert("Abrindo busca de ativos (RF-01)...")}>Buscar Ativo</button>
          <Link to="/alerts" className="btn-secondary">Configurar Alerta (RF-07)</Link>
        </div>
      </section>
    </main>
  );
}