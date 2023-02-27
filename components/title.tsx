import Image from "next/image";
import styles from "../src/styles/page.module.css";

const Title = () => {
  return (
    <div className="section">
      <div className={styles.center}>
        <h1 className="home-title">Davi Guimell Jorge</h1>
        <div className={styles.description}>
          <p>Seja bem vindo ao meu portifolio&nbsp;</p>
        </div>
      </div>

      <div className={styles.grid}>
        <a href="#aboutMe" className={styles.card}>
          <h2>
            Sobre mim <span>-&gt;</span>
          </h2>
          <p>Venha me conhecer melhor !</p>
        </a>

        <a href="#experience" className={styles.card}>
          <h2>
            Experiencia <span>-&gt;</span>
          </h2>
          <p>Experiencia de trabalho</p>
        </a>

        <a href="#education" className={styles.card}>
          <h2>
            Escolaridade <span>-&gt;</span>
          </h2>
          <p>insituições que frequentei</p>
        </a>

        <a href="#portifolio" className={styles.card}>
          <h2>
            Projetos <span>-&gt;</span>
          </h2>
          <p>Conheça todos os meu projetos</p>
        </a>

        <a href="#contact" className={styles.card}>
          <h2>
            Contato <span>-&gt;</span>
          </h2>
          <p>Econtre minhas formas de contato</p>
        </a>
      </div>
    </div>
  );
};
export default Title;
