import styles from "./index.module.scss";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import Link from "next/link";

const Hero = ({ id }) => {
  const controls = useAnimation();

  useEffect(() => {
    const infiniteScroll = async () => {
      while (true) {
        await controls.start({
          x: "-100%",
          transition: {
            duration: 15,
            ease: "linear",
          },
        });
        controls.set({ x: "0%" });
      }
    };

    infiniteScroll();
  }, [controls]);

  return (
    <div className={styles.Hero} id={id}>
      <div className={styles.mainWrapper}>
        <div className={styles.imageWrapper}>
          <Image
            className={styles.heroImage}
            src="/KirkGio92.jpeg"
            alt="kirkgio92"
            width={400}
            height={400}
          />
        </div>
        <div className={styles.textWrapper}>
          <h1>Hi there, it&apos;s</h1>
          <h1>
            <span className={styles.spanColor}>GIOVANNI SCIVOLI</span>
          </h1>
          <h2>Former Amazon Senior Finance Analyst</h2>
          <p>
            I consider myself curious and analytical. I truly believe that there
            is no problem without a solution and I am fascinated by the idea of
            working on projects aiming to create the best customer experience,
            whether it is an internal or external customer.
          </p>
        </div>
        <div className={styles.socialWrapper}>
          <div className={styles.item}>
            <Image
              className={styles.socialLogo}
              src="/email.png"
              alt="email"
              width={30}
              height={30}
            />
            <p>scivoligiovanni@gmail.com</p>
          </div>
          <div className={styles.item}>
            <Image
              className={styles.socialLogo}
              src="/linkedin.png"
              alt="linkedin"
              width={30}
              height={30}
            />
            <Link href="https://www.linkedin.com/in/giovanni-scivoli-26570b14a">
              Linkedin
            </Link>
          </div>
          <div className={styles.item}>
            <Image
              className={styles.socialLogo}
              src="/github-mark.svg"
              alt="github"
              width={30}
              height={30}
            />
            <Link href="https://github.com/kirkgio92">kirkgio92</Link>
          </div>
        </div>
      </div>
      <div className={styles.techStackWrapper}>
        <motion.div className={styles.techStack} animate={controls}>
          <div className={styles.techItem}>HTML5</div>
          <div className={styles.techItem}>CSS3</div>
          <div className={styles.techItem}>SASS</div>
          <div className={styles.techItem}>JavaScript</div>
          <div className={styles.techItem}>React.js</div>
          <div className={styles.techItem}>Node.js</div>
          <div className={styles.techItem}>MongoDB</div>
          <div className={styles.techItem}>Express</div>
          <div className={styles.techItem}>SQL</div>
          {/* Duplicate items to create an infinite scroll */}
          <div className={styles.techItem}>HTML5</div>
          <div className={styles.techItem}>CSS3</div>
          <div className={styles.techItem}>SASS</div>
          <div className={styles.techItem}>JavaScript</div>
          <div className={styles.techItem}>React.js</div>
          <div className={styles.techItem}>Node.js</div>
          <div className={styles.techItem}>MongoDB</div>
          <div className={styles.techItem}>Express</div>
          <div className={styles.techItem}>SQL</div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
