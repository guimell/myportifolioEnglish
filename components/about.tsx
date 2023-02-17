import Image from "next/image";
import styles from "../src/styles/page.module.css";
import { Inter } from "@next/font/google";
import imageProfile from "public/images/davi.jpg";
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
            Realizarei o trabalho que me for passado com virtuosidade,
            ambicionando crescimento e desenvolvimento pessoal na área que
            escolhi, visando sempre uma boa comunicação com empatia,
            criatividade, abertura para inovações e gestão de projetos.
          </p>
        </div>
      </div>
    </div>
  );
};
export default About;
