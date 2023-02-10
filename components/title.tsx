import Image from "next/image";
import styles from "../src/styles/page.module.css";
import { Inter } from "@next/font/google";
const inter = Inter({ subsets: ["latin"] });
const Title = () => {
  return (
    <div className={styles.section}>
      <div className={styles.center}>
        <h1>Davi Guimell Pereira Landulfo Jorge</h1>
        <div className={styles.description}>
          <p>Seja bem vindo ao meu portifolio&nbsp;</p>
        </div>
      </div>

      <div className={styles.grid}>
        <a href="#aboutMe" className={styles.card}>
          <h2 className={inter.className}>
            Sobre mim <span>-&gt;</span>
          </h2>
          <p className={inter.className}>Venha me conhecer melhor !</p>
        </a>

        <a href="#portifolio" className={styles.card}>
          <h2 className={inter.className}>
            Projetos <span>-&gt;</span>
          </h2>
          <p className={inter.className}>Conheça todos os meu projetos.</p>
        </a>

        <a href="#contact" className={styles.card}>
          <h2 className={inter.className}>
            Contato <span>-&gt;</span>
          </h2>
          <p className={inter.className}>Econtre minhas formas de contato</p>
        </a>
      </div>
    </div>
  );
};
export default Title;
