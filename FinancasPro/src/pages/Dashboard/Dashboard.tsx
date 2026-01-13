import {useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Dashboard.css";

export default function Dashboard() {
  const navigate = useNavigate();
  const [busca, setBusca] = useState("");

  const acoesDestaque = [
    { ticker: "PETR4", preco: "R$ 38,50", variacao: "+1.2%" },
    { ticker: "MGLU3", preco: "R$ 2,15", variacao: "-0.5%" },
    { ticker: "VALE3", preco: "R$ 65,20", variacao: "+0.8%" },
  ];
  const handleBusca = () => {
    if (busca.trim()) {
      navigate(`/results?q=${busca.toUpperCase()}`);
    } else {
      alert("Digite um ticker para buscar!");
    }
  };

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
        <h2>Ações Rápidas (Must Have)</h2>
        <div className="button-group" search-box>
          <input 
          type="text"
          placeholder="Ex:PETR4"
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          className="search-input"
          />
          <button className="btn-primary" onClick={handleBusca}>Buscar Ativo</button>
          <Link to="/alerts" className="btn-secondary">Configurar Alerta</Link>
          <Link to="/portifolio" className="btn-portfolio">Meu Portfólio</Link>
        </div>
      </section>
    </main>
  );
}