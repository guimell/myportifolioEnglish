import Image from "next/image";
import styles from "./page.module.css";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>Seja bem vindo ao meu portifolio&nbsp;</p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <h1>Davi Guimell Pereira Landulfo Jorge</h1>
      </div>

      <div className={styles.grid}>
        <a href="#aboutMe" className={styles.card}>
          <h2 className={inter.className}>
            Sobre mim <span>-&gt;</span>
          </h2>
          <p className={inter.className}>Venha me conhecer melhor !</p>
        </a>

        <a href="#portifolio" className={styles.card}>
          <h2 className={inter.className}>
            Projetos <span>-&gt;</span>
          </h2>
          <p className={inter.className}>Conheça todos os meu projetos.</p>
        </a>

        <a href="#contact" className={styles.card}>
          <h2 className={inter.className}>
            Contato <span>-&gt;</span>
          </h2>
          <p className={inter.className}>Econtre minhas formas de contato</p>
        </a>
      </div>
      <div id="aboutMe" className={styles.aboutMe}>
        {/* profile image and data */}
        <div className={styles.profile}>
          <div className={styles.profileImage}>
            <Image
              src="/vercel.svg"
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
          <h2>Sobre mim:</h2>
          <br />
          <p>
            Realizarei o trabalho que me for passado com virtuosidade,
            ambicionando crescimento e desenvolvimento pessoal na área que
            escolhi, visando sempre uma boa comunicação com empatia,
            criatividade, abertura para inovações e gestão de projetos.
          </p>
        </div>
      </div>
      {/* my projects */}
      <div id="portifolio" className={styles.portifolio}>
        <div className={styles.projects}>x</div>
        <div className={styles.projects}>y</div>
        <div className={styles.projects}>z</div>
      </div>
      {/* contact informations */}
      <div id="contact"></div>
    </main>
  );
}
