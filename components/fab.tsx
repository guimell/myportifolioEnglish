import Image from "next/image";
import styles from "../src/styles/favButton.module.css";
import { Inter } from "@next/font/google";
const inter = Inter({ subsets: ["latin"] });
const Fab = () => {
  return (
    <>
      <div className={styles.favButton}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>

        <a href="#aboutMe">Sobre me</a>
        <a href="#experience">Experiencia</a>
        <a href="#education">Educação</a>
        <a href="#portifolio">Projetos</a>
        <a href="#contact">Contato</a>
      </div>
    </>
  );
};
export default Fab;
