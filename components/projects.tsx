import Image, { StaticImageData } from "next/image";
import styles from "../src/styles/projects.module.css";
import { Inter } from "@next/font/google";
import movieMatterImage from "public/images/movieMatter.png";
import atlas from "public/images/atlas.jpg";
import zakkyCo from "public/images/zakky.png";
import coPilot from "public/images/coPilot.png";
import marmoraria from "public/images/marmoraria2.png";
import { AndroidIcon, AppleIcon, InternetIcon } from "./utility/mySvg";
import { jsx } from "@emotion/react";
import { link } from "fs";
const inter = Inter({ subsets: ["latin"] });

type ProjectIcon = {
  svg: JSX.Element;
  link: string;
};
const Project = ({
  src,
  alt,
  title,
  subTitle,
  description,
  icons,
  iconsClassName,
}: {
  src: StaticImageData;
  alt: string;
  title: string;
  subTitle?: string;
  description: string;
  icons?: ProjectIcon[];
  iconsClassName?: string;
}) => {
  return (
    <div className={styles.flipCard}>
      <div className={styles.flipCardInner}>
        <div className={styles.flipCardFront}>
          <h1>{title}</h1>
          <br />
          <div className={styles.image}>
            <Image src={src} alt={alt} className={styles.image} priority />
          </div>
        </div>
        <div className={styles.flipCardBack}>
          <p>{subTitle}</p>
          <br />
          <p>{description}</p>
          <br />
          <div className={iconsClassName ? iconsClassName : styles.icons}>
            {icons?.map((icon, i) => (
              <a
                key={`${icon.link}-${i}`}
                href={icon.link}
                target="_blank"
                rel="noreferrer"
                className={styles.icon}
              >
                {icon.svg}
              </a>
            ))}
          </div>
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
          icons={[
            {
              svg: AppleIcon,
              link: "https://apps.apple.com/us/app/moviematter/id1631748579",
            },
            {
              svg: AndroidIcon,
              link: "https://play.google.com/store/apps/details?id=com.mjorge.MovieMatter&pli=1",
            },
          ]}
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
          src={zakkyCo}
          alt={"site da Zakky"}
          title={"Zakky Company"}
          description={`O projeto é uma landing page para a Zakky, uma empresa de marketing digital.
           A página tem como objetivo apresentar os serviços oferecidos pela empresa de forma clara e objetiva, 
           além de fornecer meios de contato para os interessados. 
          Com um design moderno e intuitivo, a página destaca os pontos fortes da Zakky e oferece uma forma fácil de entrar em contato.`}
          icons={[
            {
              svg: InternetIcon,
              link: "https://zakky.agency",
            },
          ]}
          iconsClassName={styles.iconClassName}
        />
        <Project
          src={coPilot}
          alt={"site Co-Pilot"}
          title={"Co-Pilot"}
          subTitle={"[Em desenvolvimento]"}
          description={`Esta plataforma oferece uma experiência de usuário simplificada,
           com ferramentas intuitivas de gerenciamento de projetos para uma conclusão eficiente dos projetos. 
           Os usuários fazem login com suas contas do Google e conectam suas contas do Stripe para processamento de pagamentos sem complicações.
           Os usuários podem criar e colaborar em projetos, além de fazer lances em projetos submetidos por outros.`}
          icons={[
            {
              svg: InternetIcon,
              link: "https://co-pilot.netlify.app",
            },
          ]}
          iconsClassName={styles.iconClassName}
        />
        <Project
          src={marmoraria}
          alt={"site da marmoraria santo antonio"}
          title={"Marmoraria santo antonio"}
          description={`O projeto é um site para uma marmoraria, que inclui páginas de inicio,
           sobre, serviços e contato.
           Com um design moderno, o site apresenta informações claras sobre a empresa, 
           seus serviços e como entrar em contato.`}
          icons={[
            {
              svg: InternetIcon,
              link: "https://marmorariasa.com",
            },
          ]}
          iconsClassName={styles.iconClassName}
        />
      </div>
    </div>
  );
};
export default Projects;
