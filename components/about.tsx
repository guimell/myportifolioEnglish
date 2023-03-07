import styles from "../src/styles/page.module.css";
import { ProfileImage } from "./utility/mySvg";
const About = () => {
  return (
    <div id="aboutMe" className="section">
      <h1 className="title">Sobre mim</h1>
      <div className={`${styles.aboutMe} reveal`}>
        {/* profile image and data */}
        <div className={styles.profile}>
          <div className={styles.profileImage}>{ProfileImage}</div>
          <h2>Davi Guimell</h2>
          {/* skill */}
          <div className="inline">
            <div className={styles.skills}>
              <ul>
                <li>HTML & CSS</li>
                <li>NEXT.JS</li>
                <li>TYPESCRIPT</li>
              </ul>
            </div>
            <div className={styles.skills}>
              <ul>
                <li>DART-FLUTTER</li>
                <li>JAVASCRIPT</li>
                <li>PYTHON</li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.verticalLine}></div>
        {/* my goals */}
        <div className={styles.profileDescription}>
          <p>
            Como indivíduo altamente motivado, busco sempre a excelência em
            todas as tarefas que me são atribuídas. Estou comprometido com o
            crescimento e desenvolvimento pessoal na minha área escolhida e
            procuro consistentemente oportunidades para aprimoramento. A
            comunicação efetiva, empatia, criatividade e disposição para abraçar
            a inovação são pontos fortes que eu trago para qualquer projeto.
            Além disso, possuo habilidades fortes em gestão de projetos,
            garantindo a conclusão bem-sucedida de todos os empreendimentos.
          </p>
        </div>
      </div>
    </div>
  );
};
export default About;
