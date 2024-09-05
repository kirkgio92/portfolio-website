import { useState } from "react";
import Image from "next/image";
import styles from "./index.module.scss";
import { Sling as Hamburger } from "hamburger-react";

const NavBar = () => {
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
        </div>
        <div className={styles.logo}>
          <Image
            className={styles.gitHubLogo}
            src="/github-mark.svg"
            alt="github"
            width={40}
            height={40}
          />
          <h2>kirkgio92</h2>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
