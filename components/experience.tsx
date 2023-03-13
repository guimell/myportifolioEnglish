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
            <h1>Trust certificações LTDA - Estagio,2022-2023</h1>
            <br />
            <p>
              Durante o meu estágio na empresa, atuei na área de suporte técnico
              com destreza, realizando a criação de programas que automatizaram
              processos e oferecendo suporte de alta qualidade para as máquinas
              utilizadas pela organização. Desenvolvi habilidades importantes de
              solução de problemas e comunicação, garantindo que todos os
              projetos fossem entregues dentro dos prazos estipulados e com
              excelência. A experiência adquirida me permitiu aprimorar minhas
              habilidades em tecnologia da informação e me tornou um
              profissional mais preparado para enfrentar desafios nessa área.
            </p>
          </div>
        </div>
        <div className={styles.containerExperience}>
          <div className={styles.experience}>
            <h1>ZAKKY - Desenvolvedor web/Mobile, 2022</h1>
            <br />
            <p>
              Atualmente, exerço a função de desenvolvedor front-end de
              aplicativos mobile e web na Zakky Co. Durante minha trajetória na
              organização, fui parte integrante da equipe responsável pelo
              desenvolvimento do aplicativo móvel MovieMatter, que obteve grande
              sucesso. Também contribuí para a criação de diversos sites
              institucionais, utilizando minhas habilidades técnicas em conjunto
              com uma visão apurada de design para entregar soluções de alta
              qualidade para os clientes. Essa experiência me permitiu aprimorar
              minha capacidade de trabalhar em equipe e liderar projetos de
              maneira eficaz, sempre priorizando a excelência em todos os
              aspectos do trabalho.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Experience;
