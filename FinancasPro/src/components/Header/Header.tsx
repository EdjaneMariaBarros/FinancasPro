import { Link, useNavigate } from "react-router-dom";
import "./Header.css";

export default function Header() {
  const navigate = useNavigate();
  
  // Pegamos o estado de login e o nome do usuário do localStorage
  const isLogged = localStorage.getItem("isLogged") === "true";
  const userName = localStorage.getItem("userName") || "Usuário";

  // Função para limpar os dados e sair
  const handleLogout = () => {
    localStorage.removeItem("isLogged");
    localStorage.removeItem("userName");
    // Opcional: localStorage.removeItem("meuPortfolio"); // Limpar se quiser resetar tudo
    navigate("/"); // Volta para a Home
    window.location.reload(); // Recarrega para limpar os estados da tela
  };

  return (
    <header className="main-header">
      <div className="header-container">
        <div className="logo">
          <Link to="/" className="logo-link">Finanças<span>Pro</span></Link>
        </div>
        
        <nav className="nav-menu">
          <Link to="/">Home</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/portifolio">Portifólio</Link>
          <Link to="/dividends">Dividendos</Link>
          <Link to="/alerts">Alertas</Link>
          <Link to="/recommendations">IA</Link>
          <Link to="/about">Sobre</Link>
        </nav>

        <div className="header-actions">
          {isLogged ? (
            <div className="user-logged">
              <span>Olá, <strong>{userName}</strong></span>
              <button onClick={handleLogout} className="logout-btn">Sair</button>
            </div>
          ) : (
            <Link to="/login" className="login-btn">Entrar</Link>
          )}
        </div>
      </div>
    </header>
  );
}