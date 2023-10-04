import Image from "next/image";
import styles from "../src/styles/page.module.css";

const Title = () => {
  return (
    <div className="section">
      <div className={styles.center}>
        <h1 className="home-title">Davi Guimell Jorge</h1>
        <div className={styles.description}>
          <p>Welcome to my portfolio</p>
        </div>
      </div>

      <div className={styles.grid}>
        <a href="#aboutMe" className={styles.card}>
          <h2>
            About Me <span>-&gt;</span>
          </h2>
          <p>Come get to know me better!</p>
        </a>

        <a href="#experience" className={styles.card}>
          <h2>
            Experience <span>-&gt;</span>
          </h2>
          <p>Work History</p>
        </a>

        <a href="#education" className={styles.card}>
          <h2>
            Education <span>-&gt;</span>
          </h2>
          <p>Institutions I attended.</p>
        </a>

        <a href="#portifolio" className={styles.card}>
          <h2>
            Projects <span>-&gt;</span>
          </h2>
          <p>Get to know all my projects.</p>
        </a>

        <a href="#contact" className={styles.card}>
          <h2>
            Contact <span>-&gt;</span>
          </h2>
          <p>Find my contact methods</p>
        </a>
      </div>
    </div>
  );
};
export default Title;
