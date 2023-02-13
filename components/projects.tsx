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
        <div className={styles.flipCard}>
          <div className={styles.flipCardInner}>
            <div className={styles.flipCardFront}>
              <Image
                src={movieMatterImage}
                alt="movieMatter app image"
                className={styles.image}
                width={400}
                height={350}
                priority
              />
            </div>
            <div className={styles.flipCardBack}>
              <h1>MovieMatter</h1>
              <p>
                Um aplicativo para iOS e Android que mostra aos usuários filmes,
                programas de TV e celebridades relevantes usando a API TMDB. Os
                usuários podem fazer login e adicionar às suas listas para obter
                recomendações exclusivas de mídia.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.flipCard}>
          <div className={styles.flipCardInner}>
            <div className={styles.flipCardFront}>
              <Image
                src={atlas}
                alt="atlas app image"
                className={styles.image}
                width={400}
                height={350}
                priority
              />
            </div>
            <div className={styles.flipCardBack}>
              <h1>Atlas</h1>
              <p>[Em desenvolvimento]</p>
              <p>
                Um jogo de pixel art onde você, Atlas, defende sua casa de ondas
                infinitas de inimigos. Você pode escolher um Cavaleiro, um Mago
                ou um Arqueiro nesta missão para defender sua casa!
              </p>
            </div>
          </div>
        </div>
        <div className={styles.flipCard}>
          <div className={styles.flipCardInner}>
            <div className={styles.flipCardFront}>
              <Image
                src={atlas}
                alt="atlas app image"
                className={styles.image}
                width={400}
                height={350}
                priority
              />
            </div>
            <div className={styles.flipCardBack}>
              <h1>Andarilho</h1>
              <p>Architect & Engineer</p>
              <p>We love that guy</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Projects;
