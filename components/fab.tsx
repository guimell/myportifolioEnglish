import Image from "next/image";
import styles from "../src/styles/fab.module.css";
import { useEffect } from "react";
import { inView } from "./inView";
const Fab = () => {
  useEffect(() => {
    // handle scroll in view animation
    function handleScroll() {
      const HeaderElements = document.querySelectorAll(".fabHeader");
      const SectionElements = document.querySelectorAll(".section");

      inView({
        elements: SectionElements,
        elementVisibleThreshold: 100,
        inViewFn: (e, i) => {
          HeaderElements[i].classList.add("highLightSectionHeader");
        },

        aboveViewFn: (e, i) => {
          HeaderElements[i].classList.remove("highLightSectionHeader");
        },
        belowViewFn: (e, i) => {
          HeaderElements[i].classList.remove("highLightSectionHeader");
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
      <div className={`${styles.favButton} fab`}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>

        <div className={styles.links}>
          <a href="#aboutMe" className="fabHeader">
            Sobre mim
          </a>
          <a href="#experience" className="fabHeader">
            Experiencia
          </a>
          <a href="#education" className="fabHeader">
            Educação
          </a>
          <a href="#portifolio" className="fabHeader">
            Projetos
          </a>
          <a href="#contact" className="fabHeader">
            Contato
          </a>
        </div>
      </div>
    </>
  );
};
export default Fab;
