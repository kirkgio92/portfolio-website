import styles from "./index.module.scss";
import experience from "@/utils/experience";
import Image from "next/image";
import { useState } from "react";

const Experience = () => {
  const [selectedId, setSelectedId] = useState(null);

  const selectedExperience = experience.find((item) => item.id === selectedId);

  return (
    <div className={styles.Experience}>
      <h1 className={styles.title}>What I have been doing in the past</h1>
      <div className={styles.ExperienceWrapper}>
        <div className={styles.cardWrapper}>
          {experience.map((item) => (
            <div
              className={styles.card}
              key={item.id}
              onClick={() => setSelectedId(item.id)}
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
            </div>
          ))}
        </div>

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

          {selectedExperience && (
            <div className={styles.modalContent}>
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
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Experience;
