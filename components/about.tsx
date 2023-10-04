import styles from "../src/styles/page.module.css";
import ProfileImage from "public/images/profileimage2.jpg";
import Image from "next/image";
const About = () => {
  return (
    <div id="aboutMe" className="section">
      <h1 className="title">About me</h1>
      <div className={`${styles.aboutMe} reveal`}>
        {/* profile image and data */}
        <div className={styles.profile}>
          <div className={styles.profileImage}>
            <Image
              className={styles.profileImage2}
              src={ProfileImage}
              alt={""}
            ></Image>
          </div>
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
            Motivated software developer with a knack for problem-solving and
            creativity. Committed to growth and innovation, I bring empathy and
            passion to each project, ensuring successful outcomes.
          </p>
        </div>
      </div>
    </div>
  );
};
export default About;
