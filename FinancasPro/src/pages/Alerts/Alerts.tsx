import "./Alerts.css";

export default function Alerts() {
  return (
    <main className="alerts-container">
      <header className="alerts-header">
        <h1>Meus Alertas (RF-07)</h1>
        <p>Configure notificações push para os seus ativos favoritos.</p>
      </header>

      <section className="alert-form-card">
        <h2>Novo Alerta</h2>
        <div className="form-row">
          <input type="text" placeholder="Ticker (ex: PETR4)" className="input-field" />
          <select className="select-field">
            <option value="above">Preço acima de</option>
            <option value="below">Preço abaixo de</option>
          </select>
          <input type="number" placeholder="Valor (R$)" className="input-field" />
          <button className="btn-save">Salvar Alerta</button>
        </div>
      </section>

      <section className="active-alerts">
        <h3>Alertas Ativos</h3>
        <div className="alert-item">
          <p><strong>VALE3</strong> - Notificar se subir de <strong>R$ 70,00</strong></p>
          <button className="btn-delete">Remover</button>
        </div>
      </section>
    </main>
  );
}