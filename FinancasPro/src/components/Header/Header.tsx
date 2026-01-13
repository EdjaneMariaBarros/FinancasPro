import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <header className="main-header">
      <div className="header-container">
        <div className="logo">
          <Link to="/">Finanças<span>Pro</span></Link>
        </div>
        <nav className="nav-menu">
          <Link to="/">Home</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/dividends">Dividendos</Link>
          <Link to="/alerts">Alertas</Link>
          <Link to="/recommendations">IA</Link>
          <Link to="/about">Sobre</Link>
        </nav>
        <div className="header-actions">
          <Link to="/login" className="login-btn">Entrar</Link>
        </div>
      </div>
    </header>
  );
}