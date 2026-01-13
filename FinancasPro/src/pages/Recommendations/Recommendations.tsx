import "./Recommendations.css";

export default function Recommendations() {
  // Dados baseados no Relatório (Sugestões personalizadas por IA)
  const sugestoesIA = [
    { ticker: "WEGE3", motivo: "Forte geração de caixa e histórico de dividendos crescentes.", confianca: "Alta" },
    { ticker: "ITUB4", motivo: "Setor bancário resiliente com projeção de altos proventos em 2026.", confianca: "Média-Alta" },
    { ticker: "HGLG11", motivo: "FII de logística com vacância baixa e contratos atípicos seguros.", confianca: "Alta" },
  ];

  return (
    <main className="recom-container">
      <header className="recom-header">
        <div className="ia-badge">IA Finanças Pro</div>
        <h1>Recomendações Personalizadas</h1>
        <p>Análise baseada no seu perfil de investidor e metas financeiras.</p>
      </header>

      <section className="recom-grid">
        {sugestoesIA.map((item) => (
          <div key={item.ticker} className="recom-card">
            <div className="card-top">
              <span className="ticker-label">{item.ticker}</span>
              <span className="confidence-tag">{item.confianca}</span>
            </div>
            <p className="reason-text"><strong>Por que investir?</strong> {item.motivo}</p>
            <button className="btn-details">Análise Completa</button>
          </div>
        ))}
      </section>

      <div className="ia-disclaimer">
        <small>* As recomendações são geradas por algoritmos e não constituem oferta de compra. Consulte sempre um assessor.</small>
      </div>
    </main>
  );
}