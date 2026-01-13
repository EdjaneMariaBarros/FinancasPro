import { useLocation, Link } from "react-router-dom";
import "./Results.css";

export default function Results() {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("q")?.toUpperCase() || "";

 
  const resultado = {
    ticker: query,
    nome: "Empresa Exemplo S.A.",
    preco: "R$ 42,15",
    variacao: "+0.85%"
  };

  return (
    <main className="results-container">
      <h1>Resultados para: {query}</h1>
      {query ? (
        <div className="result-card">
          <h2>{resultado.ticker}</h2>
          <p>{resultado.nome}</p>
          <div className="price-info">
            <span className="price">{resultado.preco}</span>
            <span className="up">{resultado.variacao}</span>
          </div>
          <div className="result-actions">
            <Link to={`/asset/${resultado.ticker}`} className="btn-details">Ver Detalhes</Link>
            <button className="btn-add">Adicionar ao Portfólio</button>
          </div>
        </div>
      ) : (
        <p>Nenhum ativo pesquisado.</p>
      )}
    </main>
  );
}