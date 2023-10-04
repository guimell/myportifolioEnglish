import styles from "../src/styles/education.module.css";
import { Inter } from "@next/font/google";
const inter = Inter({ subsets: ["latin"] });

const Education = () => {
  return (
    <div id="education" className="section">
      <h1 className="title">Education</h1>
      <div className={styles.educationGrid}>
        <div className={`${styles.educationContainer} reveal`}>
          <h1>Computer Science</h1>
          <br />
          <li>UNIFACS - Salvador - Brazil </li>
          <br />
          <li>2019-2022</li>
        </div>
        <div className={`${styles.educationContainer} reveal`}>
          <h1>Mobile Application Fundamental</h1>
          <br />
          <li>Certificate - Bradesco Foundation</li>
          <br />
          <li>2022</li>
        </div>
        <div className={`${styles.educationContainer} reveal`}>
          <h1>Innovating with CSS</h1>
          <br />
          <li>Certificate - Bradesco Foundation</li>
          <br />
          <li>2022</li>
        </div>
        <div className={`${styles.educationContainer} reveal`}>
          <h1>Introduction to JavaScript</h1>
          <br />
          <li>Certificate - Bradesco Foundation </li>
          <br />
          <li>2022</li>
        </div>
      </div>
    </div>
  );
};
export default Education;
