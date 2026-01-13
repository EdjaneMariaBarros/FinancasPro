import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Signup.css";

export default function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSignup = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulação de criação de conta
        if (name && email && password) {
            alert("Conta criada com sucesso! Faça login.");
            navigate("/login");
        } else {
            alert("Preencha todos os campos.");
        }
    };

    return (
        <main className="signup-container">
            <div className="signup-card">
                <h1>Criar Conta</h1>
                <p>Junte-se ao Finanças Pro</p>
                
                <form onSubmit={handleSignup}>
                    <div className="input-group">
                        <label>Nome Completo</label>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Seu nome" />
                    </div>
                    <div className="input-group">
                        <label>E-mail</label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="seu@email.com" />
                    </div>
                    <div className="input-group">
                        <label>Senha</label>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="******" />
                    </div>
                    <button type="submit" className="signup-button">Cadastrar</button>
                </form>
                <p className="login-link">
                    Já tem conta? <Link to="/login">Entrar</Link>
                </p>
            </div>
        </main>
    );
}