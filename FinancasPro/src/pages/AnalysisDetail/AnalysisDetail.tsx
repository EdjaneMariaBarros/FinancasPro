import { useParams, Link } from "react-router-dom";
import { marketAnalysis } from "../../data/marketData";
import "./AnalysisDetail.css";

export default function AnalysisDetail() {
  const { ticker } = useParams();
  const dados = marketAnalysis[ticker as keyof typeof marketAnalysis];

  if (!dados) {
    return (
      <main className="analysis-container">
        <h1>Análise não encontrada</h1>
        <Link to="/recommendations">Voltar para recomendações</Link>
      </main>
    );
  }

  return (
    <main className="analysis-container">
      <div className="analysis-card">
        <header className="analysis-header-content">
          <span className="ticker-badge">{ticker}</span>
          <h1>{dados.nome}</h1>
          <p className="sector-tag">{dados.setor}</p>
        </header>

        <section className="main-content">
          <h3>Veredito da IA</h3>
          <p>{dados.analise}</p>
        </section>

        <footer className="metrics-grid">
          <div className="metric">
            <span>Recomendação</span>
            <strong className="buy">{dados.recomendacao}</strong>
          </div>
          <div className="metric">
            <span>Dividend Yield</span>
            <strong>{dados.dividendYield}</strong>
          </div>
          <div className="metric">
            <span>Risco</span>
            <strong>{dados.risco}</strong>
          </div>
        </footer>
        
        <div className="analysis-actions">
          <Link to="/recommendations" className="btn-back">
            Voltar
          </Link>
          
          <Link to="/portifolio" className="btn-buy-action">
            Comprar {ticker}
          </Link>
        </div>
      </div>
    </main>
  );
}