import styles from "../src/styles/experience.module.css";
import { Inter } from "@next/font/google";
const inter = Inter({ subsets: ["latin"] });
const Experience = () => {
  return (
    <div id="experience" className="section">
      <h1 className="title">Employment History</h1>
      <div className={`${styles.container} reveal`}>
        <div className={styles.containerExperience}>
          <div className={styles.experience}>
            <h1>Trust Certifications LTDA - Technical Intern,2022-2023</h1>
            <br />
            <p>
              During my technical internship in the technical support
              department, I designed programs that automated workflows and I
              ensured the organization s computers stayed performant. I
              sharpened my problem-solving and communication skills,
              consistently delivering projects both on time and to high
              standards. This experience enhanced my IT expertise, positioning
              me as a proficient professional poised to tackle challenges in the
              technical field.
            </p>
          </div>
        </div>
        <div className={styles.containerExperience}>
          <div className={styles.experience}>
            <h1>ZAKKY - Software developer , 2022</h1>
            <br />
            <p>
              I worked as a front-end developer for both mobile and web
              applications. One of my main projects was contributing to the
              development of the MovieMatter mobile app. I also participated in
              the creation of several websites, combining technical know-how
              with a consideration for design. This experience taught me the
              importance of teamwork and project management, ensuring quality in
              every task I undertook.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Experience;
