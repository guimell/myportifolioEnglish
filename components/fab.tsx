import Image from "next/image";
import styles from "../src/styles/fab.module.css";
import { Inter } from "@next/font/google";
const inter = Inter({ subsets: ["latin"] });
const Fab = () => {
  return (
    <>
      <div className={`${styles.favButton} fab`}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>

        <div className={styles.links}>
          <a href="#aboutMe">Sobre mim</a>
          <a href="#experience">Experiencia</a>
          <a href="#education">Educação</a>
          <a href="#portifolio">Projetos</a>
          <a href="#contact">Contato</a>
        </div>
      </div>
    </>
  );
};
export default Fab;