import styles from "./index.module.scss";
import Image from "next/image";

const Projects = () => {
  return (
    <div className={styles.Projects}>
      <div className={styles.cardWrapper}>
        <div className={styles.card}>
          <Image
            className={styles.cardImage}
            src="/JustPlay.png"
            alt="JustPlay"
            width={550}
            height={300}
          />
          <p>text</p>
        </div>
        <div className={styles.card}>
          <Image
            className={styles.cardImage}
            src="/PokemonCardProject.png"
            alt="Pokemon"
            width={550}
            height={300}
          />
          <p>text</p>
        </div>
        <div className={styles.card}>
          <Image
            className={styles.cardImage}
            src="/LoginApp.png"
            alt="LoginApp"
            width={550}
            height={300}
          />
          <p>text</p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
