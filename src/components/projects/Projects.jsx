import Link from "next/link";
import styles from "./index.module.scss";
import Image from "next/image";

const Projects = ({ id }) => {
  return (
    <div className={styles.Projects} id={id}>
      <h1>Some of my projects!</h1>
      <div className={styles.cardWrapper}>
        <div className={styles.card}>
          <Image
            className={styles.cardImage}
            src="/JustPlay.png"
            alt="JustPlay"
            width={450}
            height={250}
          />
          <div className={styles.textWrapper}>
            <div>
              <h3>Justplay</h3>
              <h4>Just focus on playing</h4>
            </div>
            <p>
              A web app designed for sports enthusiasts. With technologies like
              Next.js, React.js, MongoDB, and Sass, Just Play simplifies the
              organization of matches on real fields in your city 📍, allowing
              you to easily select your favorite sport. Whether you're
              passionate about soccer ⚽, basketball 🏀, tennis 🥎, or
              volleyball 🏐, Just Play connects you with other players, offering
              an engaging and fun social experience 🤩.
            </p>
            <Link href="https://justplay-app-cb8.vercel.app">
              Vercel Deploy Link
            </Link>
            <Link href="https://github.com/kirkgio92/JustPlay-cb8-gruppo-c">
              GitHub Repository
            </Link>
          </div>
        </div>
        <div className={styles.card}>
          <Image
            className={styles.cardImage}
            src="/PokemonCardProject.png"
            alt="Pokemon"
            width={450}
            height={250}
          />
          <div className={styles.textWrapper}>
            <div>
              <h3>Pokemon Cards</h3>
              <h4>A card search engine</h4>
            </div>
            <p>
              This is a simple App created during the React Project Week of the
              Cooding Bootcamp of Edgemony. Is a pokemon card search engine
              that, one selected the card you are looking for, it will show you
              all the details and, if available, you can also choose between 2
              links that will redirect to the marketplace.
            </p>
            <Link href="https://pokemon-card-react-project.vercel.app">
              Vercel Deploy Link
            </Link>
            <Link href="https://github.com/kirkgio92/PokemonCard_React_Project">
              GitHub Repository
            </Link>
          </div>
        </div>
        <div className={styles.card}>
          <Image
            className={styles.cardImage}
            src="/LoginApp.png"
            alt="LoginApp"
            width={450}
            height={250}
          />
          <div className={styles.textWrapper}>
            <div>
              <h3>Simple login/logout app</h3>
              <h4>A very simple test on NextAuth</h4>
            </div>
            <p>
              A simple test I did to experiment with NextAuth. It allows you to
              register, login and logout from the app. There is not much styling
              in this one, it was just a simple test!
            </p>
            <Link href="https://small-login-app.vercel.app">
              Vercel Deploy Link
            </Link>
            <Link href="https://github.com/kirkgio92/small-login-app">
              GitHub Repository
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
