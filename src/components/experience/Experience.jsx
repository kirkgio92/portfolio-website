import styles from "./index.module.scss";
import experience from "@/utils/experience";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.5,
    },
  },
};

const divToMotion = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const Experience = ({ id }) => {
  const [selectedId, setSelectedId] = useState(null);

  const selectedExperience = experience.find((item) => item.id === selectedId);

  return (
    <div className={styles.Experience} id={id}>
      <h1 className={styles.title}>What I have been doing in the past</h1>
      <div className={styles.ExperienceWrapper}>
        <motion.div
          className={styles.cardWrapper}
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {experience.map((item) => (
            <motion.div
              className={styles.card}
              key={item.id}
              variants={divToMotion}
              layoutId={item.id}
              onClick={() => setSelectedId(item.id)}
              initial="hidden"
              animate="visible"
            >
              <div className={styles.cardID}>
                <h1>{item.id}</h1>
              </div>
              <div className={styles.cardText}>
                <h2>{item.title}</h2>
                <h4>{item.company}</h4>
                <p>{item.location}</p>
                <p>
                  {item.start} - {item.end}
                </p>
                <p>
                  <strong>Duration:</strong> {item.duration}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className={styles.detailedView}>
          {!selectedExperience && (
            <>
              <p>Select a card you want to have more details</p>
              <Image
                className={styles.placeHolder}
                src="/Cat.svg"
                alt="placeholder"
                width={200}
                height={200}
              />
              <p>Murphy is waiting to go away...</p>
            </>
          )}

          <AnimatePresence>
            {selectedExperience && (
              <motion.div
                className={styles.modalContent}
                key={selectedExperience.id} // Make sure to provide a unique key
                layoutId={selectedId}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.1 }} // Optional: Add a duration for smoother transitions
              >
                <h2>{selectedExperience.title}</h2>
                <h3>{selectedExperience.company}</h3>
                <p>
                  {selectedExperience.location} | {selectedExperience.start} -{" "}
                  {selectedExperience.end}
                </p>
                <p>
                  <strong>Duration:</strong> {selectedExperience.duration}
                </p>
                {selectedExperience.responsibilities.map((desc, index) => (
                  <p key={index}>- {desc}</p>
                ))}
                {selectedExperience.techUsed && (
                  <p>
                    <strong>Tech:</strong>{" "}
                    {selectedExperience.techUsed.join(", ")}
                  </p>
                )}
                {selectedExperience.projectLink && (
                  <p>
                    <strong>Project Link:</strong>{" "}
                    <a
                      href={selectedExperience.projectLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {selectedExperience.projectLink}
                    </a>
                  </p>
                )}
                {selectedExperience.repositoryLink && (
                  <p>
                    <strong>Repository Link:</strong>{" "}
                    <a
                      href={selectedExperience.repositoryLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {selectedExperience.repositoryLink}
                    </a>
                  </p>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <AnimatePresence>
          {selectedExperience && (
            <>
              <motion.div
                key="overlay"
                className={styles.Overlay}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />
              <motion.div
                className={styles.modalContentMobile}
                key={selectedExperience.id} // Make sure to provide a unique key
                layoutId={selectedId}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.1 }} // Optional: Add a duration for smoother transitions
              >
                <h2>{selectedExperience.title}</h2>
                <h3>{selectedExperience.company}</h3>
                <p>
                  {selectedExperience.location} | {selectedExperience.start} -{" "}
                  {selectedExperience.end}
                </p>
                <p>
                  <strong>Duration:</strong> {selectedExperience.duration}
                </p>
                {selectedExperience.responsibilities.map((desc, index) => (
                  <p key={index}>- {desc}</p>
                ))}
                {selectedExperience.techUsed && (
                  <p>
                    <strong>Tech:</strong>{" "}
                    {selectedExperience.techUsed.join(", ")}
                  </p>
                )}
                {selectedExperience.projectLink && (
                  <p>
                    <strong>Project Link:</strong>{" "}
                    <a
                      href={selectedExperience.projectLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {selectedExperience.projectLink}
                    </a>
                  </p>
                )}
                {selectedExperience.repositoryLink && (
                  <p>
                    <strong>Repository Link:</strong>{" "}
                    <a
                      href={selectedExperience.repositoryLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {selectedExperience.repositoryLink}
                    </a>
                  </p>
                )}
                <motion.button
                  className={styles.button}
                  onClick={() => setSelectedId(null)}
                >
                  Close
                </motion.button>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Experience;
