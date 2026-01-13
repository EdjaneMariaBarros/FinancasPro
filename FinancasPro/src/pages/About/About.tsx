import "./About.css";

export default function About() {
  const equipe = [
    {
      nome: "Edjane Maria Barros de Sá",
      função: "Desenvolvedora Front-end / UX Designer",
      foto: "./edjane.jpg.jpg" // Substitua pelo caminho da foto real
    }
   
  ];

  return (
    <main className="about-container">
      <section className="about-intro">
        <h1>Sobre o Finanças Pro</h1>
        <p>
          O Finanças Pro nasceu da necessidade de democratizar o acesso a análises financeiras 
          complexas. Nosso objetivo é transformar dados da bolsa de valores em decisões 
          inteligentes através de tecnologia de ponta e uma interface intuitiva.
        </p>
      </section>

      <section className="team-section">
        <h2>Nossa Equipe</h2>
        <div className="team-grid">
          {equipe.map((membro, index) => (
            <div key={index} className="team-card">
              <img src={membro.foto} alt={membro.nome} className="team-photo" />
              <h3>{membro.nome}</h3>
              <p>{membro.função}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="project-info">
        <h3>Projeto Integrador - 2026</h3>
        <p>Desenvolvido para o curso de Front-end do programa Bolsa Futuro Digital.</p>
      </section>
    </main>
  );
}