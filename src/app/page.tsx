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

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Contato <span>-&gt;</span>
          </h2>
          <p className={inter.className}>Econtre minhas formas de contato</p>
        </a>
      </div>
      <div id="aboutMe" className={styles.aboutMe}>
        <h2>About me</h2>
      </div>
      <div id="portifolio" className={styles.portifolio}>
        <div className={styles.projects}>x</div>
        <div className={styles.projects}>y</div>
        <div className={styles.projects}>z</div>
      </div>
    </main>
  );
}
