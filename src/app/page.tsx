import Image from "next/image";
import styles from "../styles/page.module.css";
import Title from "components/title";
import { Inter } from "@next/font/google";
import About from "components/about";
import Projects from "components/projects";
import Contact from "components/contact";
import Education from "components/education";
import Experience from "components/experience";
const inter = Inter({ subsets: ["latin"] });
export default function Home() {
  return (
    <main className={styles.main}>
      <Title />
      <About />
      <Experience />
      <Education />
      <Projects />
      <Contact />
      <div id="contact"></div>
    </main>
  );
}
