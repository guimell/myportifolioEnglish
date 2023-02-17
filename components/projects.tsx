import Image, { StaticImageData } from "next/image";
import styles from "../src/styles/projects.module.css";
import { Inter } from "@next/font/google";
import movieMatterImage from "public/images/movieMatter.png";
import atlas from "public/images/atlas.jpg";
const inter = Inter({ subsets: ["latin"] });

const Project = ({
  src,
  alt,
  title,
  subTitle,
  description,
}: {
  src: StaticImageData;
  alt: string;
  title: string;
  subTitle?: string;
  description: string;
}) => {
  return (
    <div className={styles.flipCard}>
      <div className={styles.flipCardInner}>
        <div className={styles.flipCardFront}>
          <div className={styles.image}>
            <Image src={src} alt={alt} className={styles.image} fill priority />
          </div>
        </div>
        <div className={styles.flipCardBack}>
          <h1>{title}</h1>
          <p>{subTitle}</p>
          <br />
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <div id="portifolio" className="section">
      {/* my projects */}
      <h1 className="title">Projetos</h1>
      <div className={`${styles.portifolio} reveal`}>
        <Project
          src={movieMatterImage}
          alt={"movieMatter app image"}
          title={"MovieMatter"}
          description={`Um aplicativo para iOS e Android que mostra aos usuários filmes,
                programas de TV e celebridades relevantes usando a API TMDB. Os
                usuários podem fazer login e adicionar às suas listas para obter
                recomendações exclusivas de mídia.`}
        />
        <Project
          src={atlas}
          alt={"atlas"}
          title={"Atlas"}
          subTitle={"[Em desenvolvimento]"}
          description={` Um jogo de pixel art onde você, Atlas, defende sua casa de ondas
                infinitas de inimigos. Você pode escolher um Cavaleiro, um Mago
                ou um Arqueiro nesta missão para defender sua casa!`}
        />

        <Project
          src={atlas}
          alt={"atlas"}
          title={"Andarilho"}
          subTitle={"[Em desenvolvimento]"}
          description={` Um jogo de pixel art onde você, Atlas, defende sua casa de ondas
                infinitas de inimigos. Você pode escolher um Cavaleiro, um Mago
                ou um Arqueiro nesta missão para defender sua casa!`}
        />
      </div>
    </div>
  );
};
export default Projects;
