import { useState } from "react";
import Image from "next/image";
import styles from "./index.module.scss";
import { Sling as Hamburger } from "hamburger-react";
import Link from "next/link";
import { motion } from "framer-motion";

const NavBar = ({ heroId, projectsId, experienceId, reachOutId }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenHamburger = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.NavBar}>
      <div className={styles.wrapper}>
        <div className={styles.hamburger}>
          <Hamburger
            toggled={isOpen}
            onClick={handleOpenHamburger}
            toggle={setIsOpen}
            duration={0.6}
            color="#191716"
          />
          {isOpen && (
            <div className={styles.menu}>
              <ul className={styles.list}>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.9 }}
                  className={styles.listDetails}
                >
                  <Link href={heroId} onClick={handleOpenHamburger}>
                    <li>Home</li>
                  </Link>
                  <Link href={projectsId} onClick={handleOpenHamburger}>
                    <li>Projects</li>
                  </Link>
                  <Link href={experienceId} onClick={handleOpenHamburger}>
                    <li>Experience</li>
                  </Link>
                  <Link href={reachOutId} onClick={handleOpenHamburger}>
                    <li>Reach Out</li>
                  </Link>
                </motion.div>
              </ul>
            </div>
          )}
        </div>

        <div className={styles.logo}>
          <Image
            className={styles.gitHubLogo}
            src="/github-mark.svg"
            alt="github"
            width={40}
            height={40}
          />
          <Link href="https://github.com/kirkgio92">KIRKGIO92</Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
