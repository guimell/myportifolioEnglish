import Image from "next/image";
import styles from "../src/styles/experience.module.css";
import { Inter } from "@next/font/google";
const inter = Inter({ subsets: ["latin"] });
const Experience = () => {
  return (
    <div id="experience" className="section">
      <h1 className="title">Experiencia de trabalho</h1>
      <div className={`${styles.container} reveal`}>
        <div className={styles.containerExperience}>
          <div className={styles.experience}>
            <h1>Trust certificações LTDA</h1>
            <br />
            <li>Estagio</li>
            <br />
            <li>2022-2023</li>
          </div>
          <div className={styles.verticalLine}></div>
          <div className={styles.experience}>
            <h1>Tarefas:</h1>
            <br />
            <p>
              Desenvolver programas para automação de atividades e dar suporte
              as maquinas da empresa.
            </p>
          </div>
        </div>
        <div className={styles.containerExperience}>
          <div className={styles.experience}>
            <h1>Zakky</h1>
            <br />
            <li>Desenvolvedor web/Mobile</li>
            <br />
            <li>2022-2023</li>
          </div>
          <div className={styles.verticalLine}></div>
          <div className={styles.experience}>
            <h1>Tarefas:</h1>
            <br />
            <p>
              desenvolver Aplicações web e mobile, tanto na parte front end,
              quanto no back end. Participei da criação do aplicativo
              moviematter, e de alguns sites institucionais.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Experience;
