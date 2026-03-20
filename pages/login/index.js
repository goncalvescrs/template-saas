import { useState } from "react";

const Style = `
  .login-container {
    max-width: 400px;
    margin: 100px auto;
    padding: 2.5rem;
    background: #fff;
    border-radius: 12px;
    box-shadow: 0 10px 25px rgba(0,0,0,0.05);
    font-family: system-ui, sans-serif;
  }

  .login-header {
    text-align: center;
    margin-bottom: 2rem;
  }

  .login-header h2 {
    color: #2d3436;
    margin-bottom: 0.5rem;
  }

  .form-group {
    margin-bottom: 1.2rem;
  }

  .form-group label {
    display: block;
    margin-bottom: 0.5rem;
    color: #636e72;
    font-size: 0.9rem;
  }

  .form-group input {
    width: 100%;
    padding: 0.8rem;
    border: 1px solid #dfe6e9;
    border-radius: 6px;
    outline: none;
    transition: border-color 0.2s;
    box-sizing: border-box; /* Garante que o padding não estoure a largura */
  }

  .form-group input:focus {
    border-color: #0070f3;
  }

  .btn-login {
    width: 100%;
    padding: 1rem;
    background: #0070f3;
    color: white;
    border: none;
    border-radius: 6px;
    font-weight: bold;
    cursor: pointer;
    transition: background 0.2s;
  }

  .btn-login:hover {
    background: #0056b3;
  }

  .message {
    margin-top: 1rem;
    padding: 0.8rem;
    border-radius: 4px;
    text-align: center;
    font-size: 0.9rem;
  }

  .error { background: #ffeaea; color: #d63031; }
  .success { background: #e6fffa; color: #00b894; }

  @media (max-width: 480px) {
    .login-container { margin: 50px 20px; padding: 1.5rem; }
  }
`;

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState({ type: "", msg: "" });

  const handleLogin = async (e) => {
    e.preventDefault();
    setStatus({ type: "info", msg: "Autenticando..." });

    try {
      // Substitua pela URL da sua API
      const response = await fetch("http://localhost:3000/api/v1/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ type: "success", msg: "Login realizado com sucesso!" });
        console.log("Token/Data:", data);
      } else {
        setStatus({ type: "error", msg: data.message || "Erro ao logar." });
      }
    } catch (err) {
      setStatus({ type: "error", msg: "Erro de conexão com o servidor." });
    }
  };

  return (
    <div className="login-page">
      <style jsx>{Style}</style>

      <div className="login-container">
        <header className="login-header">
          <h2>Bem-vindo</h2>
          <p>Acesse seu painel SaaS</p>
        </header>

        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label>E-mail</label>
            <input
              type="email"
              placeholder="exemplo@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Senha</label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn-login">
            Entrar
          </button>
        </form>

        {status.msg && (
          <div className={`message ${status.type}`}>{status.msg}</div>
        )}
      </div>
    </div>
  );
}
