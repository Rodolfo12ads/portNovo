import React, { useEffect, useState } from "react";
import styles from './Home.module.css';

import api from "../services/api";
import { FaEnvelope } from "react-icons/fa";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { Link } from "react-router-dom";

function Home() {
  const [user, setUser] = useState(null);

  async function getUsers() {
    try {
      const response = await api.get('/usuarios');
      setUser(response.data[0]);
    } catch (error) {
      console.error("Erro ao buscar os dados do usuário:", error);
    }
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.backgroundAnimation}>
        {[...Array(10)].map((_, i) => (
          <div key={i} className={styles.box}></div>
        ))}
      </div>
      <aside className={styles.sidebar}>
        <h2>Sobre Mim</h2>
        <p>
          Olá, meu nome é {user ? user.nome : "Rodolfo"},
          estou iniciando minha jornada como desenvolvedor Fullstack,
           aprendendo a criar experiências digitais modernas e interativas.
        </p>
        <p>
          Descubra mais sobre meu trabalho:{" "}
          <Link to="/portfolio" className={styles.portfolioLink}>
            Portfólio Completo
          </Link>
        </p>
        <div className={styles.socialIcons}>
          <a
            href={user ? user.email : "email@gmail.com"}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.icon} ${styles.email}`}
            aria-label="Enviar Email"
          >
            <FaEnvelope />
          </a>
          <a
            href={user ? user.linkedin : "https://www.linkedin.com/in/seu-perfil/"}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.icon} ${styles.linkedin}`}
            aria-label="LinkedIn"
          >
            <AiFillLinkedin />
          </a>
          <a
            href={user ? user.git : "https://github.com/seu-usuario"}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.icon} ${styles.github}`}
            aria-label="GitHub"
          >
            <AiFillGithub />
          </a>
        </div>
      </aside>
      <main className={styles.mainContent}>
        <header className={styles.header}>
          <h1 translate="no">Bem-vindo</h1>
          <p>
            Transformo ideias em realidade com projetos que unem inovação,
            funcionalidade e design.
          </p>
        </header>
        <section className={styles.highlightSection}>
          <h2 translate="no">Por que Escolher-me?</h2>
          <ul className={styles.features}>
            <li>
              <strong>Início Promissor:</strong> Começando minha jornada no desenvolvimento Fullstack.
            </li>
            <li>
              <strong>Abordagem Criativa:</strong> Buscando desenvolvimento em Design de interfaces modernas e intuitivas.
            </li>
            <li>
              <strong>Aprendizado Contínuo:</strong> Explorando tecnologias como React, Node.js, MongoDB, e muito mais.
            </li>
          </ul>
        </section>
        <section className={styles.skills}>
          <h2>Habilidades Técnicas</h2>
          <div className={styles.skillTags}>
            <span>React</span>
            <span>Node.js</span>
            <span>JavaScript</span>
            <span>MongoDB</span>
            <span>HTML5</span>
            <span>CSS3</span>
            <span>Git</span>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;
