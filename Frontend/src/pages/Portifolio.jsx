import React, { useState } from "react";

import logo from '../assets/youtube_logo.png';
import udemy_logo from '../assets/udemy_logo1.svg';

import { AiFillGithub } from "react-icons/ai"
import styles from "./Portifolio.module.css";

function Portfolio() {
  const [showCursos, setShowCursos] = useState(false);
  const [expandedVideo, setExpandedVideo] = useState(null);

  const handleVideoClick = (index) => {
    setExpandedVideo(expandedVideo === index ? null : index);
  };

  const handleOverlayClick = () => {
    setExpandedVideo(null);
  };

  return (
    <div className={styles.container}>
      <div className={styles.backgroundAnimation}>
        {[...Array(10)].map((_, i) => (
          <div key={i} className={styles.box}></div>
        ))}
      </div>
      <nav className={styles.nav}>
        { <p onClick={() => setShowCursos(!showCursos)}>{!showCursos ? 'Exibir Cursos' : 'Fechar'}</p> }
      </nav>

      {showCursos && (
        <div className={styles.cursos}>
          <h2>Matheus Battisti - Hora de Codar <a href="https://www.youtube.com/watch?v=FXqX7oof0I4&t=1s"
            target="_blank"><img className={styles.logo} src={logo} alt=" logo youtube" /></a>
          </h2>
          <p>Curso React</p>
          <div className={styles.divider}></div>
          <h2>Luiz Otávio Miranda <a href="https://www.udemy.com/course/curso-de-javascript-moderno-do-
          // basico-ao-avancado/?couponCode=KEEPLEARNINGBR"
            target="_blank"><img className={styles.logo}  src={udemy_logo} alt="logo udemy" /><p className={styles.iconudemy}>demy</p> </a></h2>
          <p>
            JavaScript e TypeScript - front-end e back-end Full Stack Node,
            Express, noSQL, React, hooks, Redux, Design Patterns.
          </p>
        </div>
      )}

      <section className={styles.projects}>
        <h2>Projetos Desenvolvidos</h2>
        <div className={styles.gallery}>
          {[{
            Projeto: "Projeto portfólio atual",
            src: "https://drive.google.com/file/d/1Hd_vitVogOTHCpHrhj0xoWCyNiZfLOJQ/preview",
            skills: ["React Vite", "Node.js", "MongoDB"],
            gitLink: "https://github.com/Rodolfo12ads/portNovo", // Link do GitHub
          },
          {
            Projeto: "Clique para abrir o projeto Cost",
            src: "https://drive.google.com/file/d/1HdaHCsVRB8QdLnziPI8PMj8M0lpKbEUX/preview",
            skills: ["React", "Node.js", "DB Json"],
            gitLink: "https://github.com/Rodolfo12ads/costs", // Link do GitHub
            linkversel: ["https://costs-gamma-livid.vercel.app/" ]

          },
          {
            Projeto: "Logo estará disponivel",
            src: "https://drive.google.com/file/d/1HgdZh7UrHrbnzubFkXbNCpjbwqT5m49l/preview",
            skills: ["React Vite", "Node.js", "MongoDB"],
            gitLink: "https://github.com/Rodolfo12ads/CadastroUsuarios" // Link do GitHub
          }
          ].map((project, index) => (
            <div key={index} className={styles.projectCard}>
              <iframe
                src={project.src}
                className={styles.photo}
                allow="autoplay"
                title={`Projeto ${index + 1}`}
              ></iframe>
              <div className={styles.skillTags}>
                {project.skills.map((skill, idx) => (
                  <span key={idx}>{skill}</span>
                ))}
                <a
                  href={project.gitLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.icon} ${styles.github}`}
                  aria-label="GitHub"
                >
                  <AiFillGithub />
                </a>
                <a className={styles.skillpag}
                href={project.linkversel}
                target="_blank"
                aria-label="Projeto Custo"
                >
                  <p>{project.Projeto}</p>
                  
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.videos}>
        <h2>Vídeos Acadêmicos</h2>
        <div className={styles.videoGallery}>
          <div
            className={styles.videoCard}
            onClick={() => handleVideoClick(0)} // Modifique o índice conforme necessário
          >
            <iframe src="https://drive.google.com/file/d/1HdNt1IDHr7T_Cj7-lUmjBo72c8EdUl9l/preview"
              allow="autoplay">
            </iframe>
          </div>
        </div>
      </section>

      {expandedVideo !== null && (
        <div className={styles.overlay} onClick={handleOverlayClick}>
          <div className={styles.modal}>
            <video controls className={styles.expandedVideo}>
              <source src={`video${expandedVideo + 1}.mp4`} type="video/mp4" />
            </video>
          </div>
        </div>
      )}
    </div>
  );
}

export default Portfolio;
