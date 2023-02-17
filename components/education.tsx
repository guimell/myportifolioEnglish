import Image from "next/image";
import styles from "../src/styles/education.module.css";
import { Inter } from "@next/font/google";
const inter = Inter({ subsets: ["latin"] });
const Education = () => {
  return (
    <div id="education" className="section">
      <h1 className="title">Educação</h1>
      <div className={styles.educationGrid}>
        <div className={`${styles.educationContainer} reveal`}>
          <h1>UNIFACS - Universidade Salvador</h1>
          <br />
          <li>Conclusão ensino superior - Ciências da computação</li>
          <br />
          <li>2019-2023</li>
        </div>
        <div className={`${styles.educationContainer} reveal`}>
          <h1>Fundação Bradesco</h1>
          <br />
          <li>
            Certificado - Desenvolvendo aplicações mobile com android studio
          </li>
          <br />
          <li>2022</li>
        </div>
        <div className={`${styles.educationContainer} reveal`}>
          <h1>Fundação Bradesco</h1>
          <br />
          <li>Certificado - Inovando com CSS</li>
          <br />
          <li>2022</li>
        </div>
        <div className={`${styles.educationContainer} reveal`}>
          <h1>Fundação Bradesco</h1>
          <br />
          <li>Certificado - Introdução a JavaScript</li>
          <br />
          <li>2022</li>
        </div>
      </div>
    </div>
  );
};
export default Education;
