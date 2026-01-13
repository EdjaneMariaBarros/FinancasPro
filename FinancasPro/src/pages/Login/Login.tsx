import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulação de validação de credenciais (RF-09)
        if (email && password) {
            navigate("/dashboard"); // Sucesso redireciona para Dashboard
        } else {
            alert("Por favor, preencha todos os campos.");
        }
    };

    return (
        <main className="login-container">
            <div className="login-card">
                <h1>Finanças Pro</h1>
                <p>Acesse seu portfólio e dividendos</p>
                
                <form onSubmit={handleLogin}>
                    <div className="input-group">
                        <label>E-mail</label>
                        <input 
                            type="email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            placeholder="seu@email.com"
                        />
                    </div>
                    
                    <div className="input-group">
                        <label>Senha</label>
                        <input 
                            type="password" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            placeholder="******"
                        />
                    </div>
                    
                    <button type="submit" className="login-button">Entrar</button>
                </form>
                
                <p className="signup-link">
    Não tem uma conta? <Link to="/signup">Cadastre-se</Link>
</p>
            </div>
        </main>
    );
}