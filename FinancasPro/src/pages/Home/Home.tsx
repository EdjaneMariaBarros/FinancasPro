import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <main className="home-container">
      <section className="hero">
        <h1>Sua jornada para a liberdade financeira começa aqui</h1>
        <p>
          O <strong>Finanças Pro</strong> utiliza inteligência artificial para 
          otimizar seus investimentos, monitorar dividendos e alertar sobre as 
          melhores oportunidades do mercado.
        </p>
        <div className="cta-buttons">
          <Link to="/login" className="btn-primary">Começar Agora</Link>
          <Link to="/about" className="btn-secondary">Saber Mais</Link>
        </div>
      </section>

      <section className="features-overview">
        <div className="feature-item">
          <h3>📊 Gestão de Ativos</h3>
          <p>Acompanhe cotações em tempo real e seu portfólio completo.</p>
        </div>
        <div className="feature-item">
          <h3>💰 Agenda de Dividendos</h3>
          <p>Nunca mais perca uma data de pagamento de proventos.</p>
        </div>
        <div className="feature-item">
          <h3>🤖 Recomendações IA</h3>
          <p>Sugestões personalizadas baseadas no seu perfil de risco.</p>
        </div>
      </section>
    </main>
  );
}