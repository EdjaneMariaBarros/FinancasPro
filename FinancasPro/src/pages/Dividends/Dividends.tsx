import "./Dividends.css";

export default function Dividends() {
  // Dados baseados no Glossário: Rendimento (Yield) [cite: 70]
  const agenda = [
    { ticker: "BBDC4", data: "15/02/2026", valor: "R$ 0,17", tipo: "JCP" },
    { ticker: "MXRF11", data: "18/02/2026", valor: "R$ 0,10", tipo: "Rendimento (FII)" },
    { ticker: "ITUB4", data: "20/02/2026", valor: "R$ 0,22", tipo: "Dividendo" },
  ];

  return (
    <main className="dividends-container">
      <h1>Agenda de Dividendos (RF-05)</h1>
      <p>Acompanhe e filtre os próximos pagamentos de proventos[cite: 32].</p>

      <div className="table-wrapper">
        <table className="dividends-table">
          <thead>
            <tr>
              <th>Ativo (Ticker) [cite: 76]</th>
              <th>Data Prevista</th>
              <th>Valor do Provento</th>
              <th>Tipo de Ativo [cite: 69]</th>
              <th>Ação</th>
            </tr>
          </thead>
          <tbody>
            {agenda.map((item, index) => (
              <tr key={index}>
                <td><strong>{item.ticker}</strong></td>
                <td>{item.data}</td>
                <td className="value">{item.valor}</td>
                <td>{item.tipo}</td>
                <td><button className="btn-notify">Lembrete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}