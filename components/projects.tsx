import Image, { StaticImageData } from "next/image";
import styles from "../src/styles/projects.module.css";
import { Inter } from "@next/font/google";
import movieMatterImage from "public/images/movieMatter.png";
import atlas from "public/images/atlas.jpg";
import zakkyCo from "public/images/zakky.png";
import coPilot from "public/images/coPilot.png";
import marmoraria from "public/images/marmoraria2.png";
import { AndroidIcon, AppleIcon, InternetIcon, GitHub } from "./utility/mySvg";

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
      <h1 className="title">Projects</h1>

      <div className={`${styles.portifolio} reveal`}>
        <Project
          src={movieMatterImage}
          alt={"movieMatter app image"}
          title={"MovieMatter"}
          description={`An iOS and Android app that shows users relevant movies, TV shows, and celebrities using the TMDB API. Users can log in and add them to their lists to receive exclusive media recommendations.`}
          icons={[
            {
              svg: AppleIcon,
              link: "https://apps.apple.com/us/app/moviematter/id1631748579",
            },
            {
              svg: AndroidIcon,
              link: "https://play.google.com/store/apps/details?id=com.mjorge.MovieMatter&pli=1",
            },

            {
              svg: GitHub,
              link: "https://github.com/guimell",
            },
          ]}
        />
        <Project
          src={atlas}
          alt={"atlas"}
          title={"Atlas"}
          subTitle={"[In development]"}
          description={` A pixel art game where you, Atlas, defend your home from endless waves of enemies. You can choose a Knight, a Mage, or an Archer on this mission to protect your house!`}
          icons={[
            {
              svg: GitHub,
              link: "https://github.com/guimell",
            },
          ]}
        />

        <Project
          src={zakkyCo}
          alt={"Zakky Website"}
          title={"Zakky Company"}
          description={`The project is a landing page for Zakky, a digital marketing company. The page aims to present the services offered by the company clearly and concisely, as well as provide means of contact for interested parties. With a modern and intuitive design, the page highlights Zakky's strengths and offers an easy way to get in touch.`}
          icons={[
            {
              svg: InternetIcon,
              link: "https://zakky.agency",
            },
            {
              svg: GitHub,
              link: "https://github.com/guimell",
            },
          ]}
          iconsClassName={styles.iconClassName}
        />
        <Project
          src={coPilot}
          alt={"Co-Pilot website"}
          title={"Co-Pilot"}
          subTitle={"[In Development]"}
          description={`This platform offers a simplified user experience, with tools for efficient project completion. Users log in with Google and connect their Stripe accounts for payment processing. Users can create and collaborate on projects, bidding on projects submitted by others.`}
          icons={[
            {
              svg: InternetIcon,
              link: "https://co-pilot.netlify.app",
            },
            {
              svg: GitHub,
              link: "https://github.com/guimell",
            },
          ]}
          iconsClassName={styles.iconClassName}
        />
        <Project
          src={marmoraria}
          alt={"marmoraria santo antonio website"}
          title={"Marmoraria santo antonio"}
          description={`The project is a website for a marble workshop, which includes home, about, services, and contact pages. With a modern design, the website provides clear information about the company, its services, and how to get in touch.`}
          icons={[
            {
              svg: InternetIcon,
              link: "https://marmorariasa.com",
            },
            {
              svg: GitHub,
              link: "https://github.com/guimell",
            },
          ]}
          iconsClassName={styles.iconClassName}
        />
      </div>
    </div>
  );
};
export default Projects;
