import Image from "next/image";
import styles from "../src/styles/projects.module.css";
import { Inter } from "@next/font/google";
import movieMatterImage from "public/images/movieMatter.png";
import atlas from "public/images/atlas.jpg";
const inter = Inter({ subsets: ["latin"] });
const Projects = () => {
  return (
    <div id="portifolio" className="section">
      {/* my projects */}
      <div className={styles.portifolio}>
        <div className={styles.projects}>
          <Image
            src={movieMatterImage}
            alt="movieMatter app image"
            className={styles.image}
            width={350}
            height={350}
            priority
          />
          <div className={styles.line}></div>
          <h2>MovieMatter</h2>
          <p></p>
        </div>
        <div className={styles.projects}>
          {" "}
          <Image
            src={atlas}
            alt="atlas app image"
            className={styles.image}
            width={400}
            height={400}
            priority
          />
          <div className={styles.line}></div>
          <h2>Atlas</h2>
        </div>
        <div className={styles.projects}>z</div>
      </div>
    </div>
  );
};
export default Projects;
