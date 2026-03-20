// import "../App.css";

import Link from "next/link";

function HOME() {
  const Style = `
 /* Variáveis de cor para facilitar a manutenção */
:root {
  --bg-main: #0d1117;
  --bg-card: #161b22;
  --border-color: #1f2937;
  --text-main: #f3f4f6;
  --text-muted: #9ca3af;
  --accent-blue: #3b82f6;
  --accent-blue-light: #60a5fa;
  --accent-pink: #f472b6;
  --accent-teal: #2dd4bf;
  --accent-purple: #c084fc;
  --accent-green: #4ade80;
}

/* Base */
.page-container {
  min-height: 100vh;
  background-color: var(--bg-main);
  color: var(--text-main);
  font-family: system-ui, -apple-system, sans-serif;
}

.page-container ::selection {
  background-color: rgba(59, 130, 246, 0.3);
}

/* Header */
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.5rem;
  border-bottom: 1px solid var(--border-color);
  max-width: 72rem;
  margin: 0 auto;
}

.logo {
  font-size: 1.25rem;
  font-weight: bold;
  letter-spacing: -0.025em;
  color: white;
}

.logo span {
  color: var(--accent-blue);
}

.btn-buy {
  background-color: white;
  color: black;
  padding: 0.5rem 1.25rem;
  border-radius: 0.375rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;
  border: none;
}

.btn-buy:hover {
  background-color: #e5e7eb;
}

/* Main Content */
.main-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5rem 1rem;
  margin: 0 auto;
  max-width: 64rem;
}

/* Hero Code Block */
.code-block {
  background-color: var(--bg-card);
  padding: 2rem;
  border-radius: 0.75rem;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  border: 1px solid var(--border-color);
  width: 100%;
  text-align: left;
  font-family: monospace;
  font-size: 1rem;
  line-height: 1.6;
}

.code-pink { color: var(--accent-pink); }
.code-blue { color: var(--accent-blue-light); }
.code-gray { color: var(--text-muted); }

.code-indent-1 {
  padding: 1rem 0 1rem 1.5rem;
}

.code-indent-2 {
  padding-left: 2rem;
  border-left: 2px solid #374151;
  margin: 0.5rem 0 0.5rem 0.5rem;
}

.hero-title {
  font-size: 3rem;
  font-weight: 800;
  color: white;
  margin: 0.5rem 0 1.5rem 0;
  letter-spacing: -0.025em;
  font-family: system-ui, -apple-system, sans-serif;
}

@media (max-width: 640px) {
  .hero-title { font-size: 2.25rem; }
}

.hero-subtitle {
  color: var(--text-muted);
  font-size: 1.25rem;
  font-family: system-ui, -apple-system, sans-serif;
  margin-bottom: 0.5rem;
}

/* Tech Grid */
.tech-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 5rem;
  width: 100%;
}

.tech-card {
  background-color: var(--bg-card);
  padding: 1.5rem;
  border-radius: 0.75rem;
  border: 1px solid var(--border-color);
  transition: border-color 0.2s;
}

.tech-card:hover {
  border-color: rgba(59, 130, 246, 0.5);
}

.tech-title {
  font-size: 1.125rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.tech-title.react { color: var(--accent-blue-light); }
.tech-title.css { color: var(--accent-teal); }
.tech-title.pay { color: var(--accent-purple); }

.tech-list {
  color: var(--text-muted);
  font-size: 0.875rem;
  list-style: none;
  padding: 0;
  margin: 0;
}

.tech-list li { margin-bottom: 0.5rem; }

/* Checkout Section */
.checkout-section {
  margin-top: 6rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background-color: var(--bg-card);
  padding: 3rem;
  border-radius: 1rem;
  border: 1px solid var(--border-color);
}

@media (min-width: 768px) {
  .checkout-section { flex-direction: row; }
}

.features-list {
  list-style: none;
  padding: 0;
  color: #d1d5db;
  font-size: 1.125rem;
  width: 100%;
}

@media (min-width: 768px) {
  .features-list { width: 50%; }
}

.features-list li {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.check-icon {
  background-color: rgba(34, 197, 94, 0.2);
  color: var(--accent-green);
  padding: 0.25rem;
  border-radius: 50%;
  width: 1.25rem;
  height: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.check-icon svg {
  width: 1.25rem;
  height: 1.25rem;
}

/* Pricing Area */
.pricing-area {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

@media (min-width: 768px) {
  .pricing-area {
    width: 50%;
    align-items: flex-end;
    text-align: right;
  }
}

.price-old {
  color: #6b7280;
  text-decoration: line-through;
  font-size: 1.125rem;
  margin-bottom: 0.25rem;
}

.price-new {
  font-size: 3rem;
  font-weight: 800;
  color: white;
  margin: 0 0 0.5rem 0;
}

.price-discount {
  font-size: 0.875rem;
  color: var(--accent-green);
  font-weight: 500;
  margin-bottom: 1.5rem;
}

.btn-large {
  width: 100%;
  background-color: white;
  color: black;
  font-weight: bold;
  padding: 1rem 3rem;
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;
  transition: transform 0.2s, background-color 0.2s;
}

@media (min-width: 640px) {
  .btn-large { width: auto; }
}

.btn-large:hover {
  background-color: #e5e7eb;
  transform: scale(1.05);
}
`;

  return (
    <>
      <style jsx>{Style}</style>
      <div className="page-container">
        {/* Header */}
        <header className="header">
          <div className="logo">
            SaaS<span>Template</span>
          </div>
          <button className="btn-buy">
            <Link href="/login">Login</Link>
          </button>
        </header>

        {/* Hero Section */}
        <main className="main-content">
          {/* Bloco de Código como Título Principal */}
          <div className="code-block">
            <p className="code-pink">
              export default function{" "}
              <span className="code-blue">TemplateSaaS</span>(props) {"{"}
            </p>
            <div className="code-indent-1">
              <p className="code-gray">return (</p>
              <div className="code-indent-2">
                <h1 className="hero-title">Crie seu SaaS rápido</h1>
                <p className="hero-subtitle">
                  // Construa as regras de negócio do seu app.
                </p>
                <p className="hero-subtitle">
                  // Deixe a infraestrutura e as partes chatas comigo.
                </p>
              </div>
              <p className="code-gray">)</p>
            </div>
            <p className="code-pink">{"}"}</p>
          </div>

          {/* Grade de Tecnologias */}
          <div className="tech-grid">
            {/* Card 1 */}
            <div className="tech-card">
              <h3 className="tech-title react">React & Node.js</h3>
              <ul className="tech-list">
                <li>• Componentes Otimizados</li>
                <li>• API Restful estruturada</li>
              </ul>
            </div>

            {/* Card 2 */}
            <div className="tech-card">
              <h3 className="tech-title css">CSS Modules / Vanilla</h3>
              <ul className="tech-list">
                <li>• Landing Page pronta</li>
                <li>• Sistema de design escalável</li>
              </ul>
            </div>

            {/* Card 3 */}
            <div className="tech-card">
              <h3 className="tech-title pay">Pagamentos</h3>
              <ul className="tech-list">
                <li>• Checkout via Stripe</li>
                <li>• Webhooks e assinaturas</li>
              </ul>
            </div>
          </div>

          {/* Seção de Checklist e Preço */}
          <div className="checkout-section">
            <ul className="features-list">
              <li>
                <div className="check-icon">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </div>
                Autenticação completa
              </li>
              <li>
                <div className="check-icon">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </div>
                Banco de dados configurado
              </li>
              <li>
                <div className="check-icon">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </div>
                Código 100% em JavaScript
              </li>
              <li>
                <div className="check-icon">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </div>
                Comunidade no Discord
              </li>
            </ul>

            <div className="pricing-area">
              <p className="price-old">R$ 399,00</p>
              <p className="price-new">R$ 249,00</p>
              <p className="price-discount">Desconto de lançamento</p>
              <button className="btn-large">COMPRAR</button>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default HOME;
