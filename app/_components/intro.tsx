"use client";
import styles from "./styles/Intro.module.css";

export function Intro() {
  function handleClick() {
    console.log("increment like count");
  }

  return (
    <section onClick={handleClick}>
      <h1 className={styles.nombre}>Antonia Bustamante</h1>
      <div className={styles.intro}>
        <div className={styles.columna}>
          Sound engineer, programmer, and Master's in Philosophy from Bogotá (Colombia). 
          My creative practice focuses on the critical and practical understanding of the intersection between arts and technologies. 
          I am interested in listening practices, collective forms of work, and local and experimental uses of technologies.
            I currently work mixing live music, developing sound projects, teaching at Universidad de Los Andes, 
            and building web projects.
          <p className={styles.link}>
            {" "}
            <a href="./CVEng2026.pdf">CV</a>
          </p>
        </div>
        <div className={styles.columna}>
          Ingeniera de sonido, programadora y magíster en Filosofía de Bogotá (Colombia). 
          Mi práctica creativa se centra en la comprensión crítica y práctica de la
          intersección entre las artes y las tecnologías. Me interesan las prácticas de escucha,
          las formas colectivas de trabajo, y los usos locales y experimentales de las tecnologías. 
          Actualmente trabajo mezclando música en vivo, realizando proyectos sonoros,
          enseñando en la Universidad de Los Andes y desarrollando proyectos web.
          <p className={styles.link}>
            {" "}
            <a href="./CVEsp2026.pdf">CV</a>
          </p>
        </div>
      </div>
    </section>
  );
}
