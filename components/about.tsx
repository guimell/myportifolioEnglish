import Image from "next/image";
import imageProfile from "public/images/davi.jpg";
import styles from "../src/styles/page.module.css";
import { Inter } from "@next/font/google";
const inter = Inter({ subsets: ["latin"] });
const About = () => {
  return (
    <div id="aboutMe" className="section">
      <h1 className="title">Sobre mim</h1>
      <div className={`${styles.aboutMe} reveal`}>
        {/* profile image and data */}
        <div className={styles.profile}>
          <div className={styles.profileImage}>
            <Image
              src={imageProfile}
              alt="Vercel Logo"
              className={styles.image}
              width={100}
              height={100}
              priority
            />
          </div>
          <h2>Davi Guimell</h2>
          {/* skill */}
          <div className="inline">
            <div className={styles.skills}>
              <ul>
                <li>HTML & CSS</li>
                <li>NEXT.JS</li>
                <li>DART-FLUTTER</li>
              </ul>
            </div>
            <div className={styles.skills}>
              <ul>
                <li>JAVA</li>
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
