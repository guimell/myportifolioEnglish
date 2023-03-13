import styles from "../src/styles/education.module.css";
import { Inter } from "@next/font/google";
const inter = Inter({ subsets: ["latin"] });

const Education = () => {
  return (
    <div id="education" className="section">
      <h1 className="title">Educação</h1>
      <div className={styles.educationGrid}>
        <div className={`${styles.educationContainer} reveal`}>
          <h1>Ciências da computação</h1>
          <br />
          <li>Conclusão ensino superior - UNIFACS Universidade Salvador </li>
          <br />
          <li>2019-2023</li>
        </div>
        <div className={`${styles.educationContainer} reveal`}>
          <h1>Desenvolvendo aplicações mobile com android studio</h1>
          <br />
          <li>Certificado - Fundação Bradesco</li>
          <br />
          <li>2022</li>
        </div>
        <div className={`${styles.educationContainer} reveal`}>
          <h1>Inovando com CSS</h1>
          <br />
          <li>Certificado - Fundação Bradesco</li>
          <br />
          <li>2022</li>
        </div>
        <div className={`${styles.educationContainer} reveal`}>
          <h1>Introdução a JavaScript</h1>
          <br />
          <li>Certificado - Fundação Bradesco </li>
          <br />
          <li>2022</li>
        </div>
      </div>
    </div>
  );
};
export default Education;
