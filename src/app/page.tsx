"use client";

import styles from "../styles/page.module.css";
import Title from "components/title";
import About from "components/about";
import Projects from "components/projects";
import Contact from "components/contact";
import Education from "components/education";
import Experience from "components/experience";

import { useEffect } from "react";
import { inView } from "components/inView";
import Fab from "components/fab";
import Bubbles from "components/bubbles";

export default function Home() {
  useEffect(() => {
    // handle scroll in view animation
    function handleScroll() {
      inView({
        elements: document.querySelectorAll(".reveal"),
        elementVisibleThreshold: 100,
        inViewFn: (e, i) => {
          e.classList.add("revealShowing");
        },
      });
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Bubbles
        minSize={1}
        maxSize={50}
        quantity={10}
        blur={80}
        maxSpeed={70}
        minSpeed={50}
      />
      <main className={styles.main}>
        <Title />
        <About />
        <Experience />
        <Education />
        <Projects />
        <Contact />
        <Fab />
        <div id="contact"></div>
      </main>
    </>
  );
}
