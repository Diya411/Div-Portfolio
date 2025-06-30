import React from "react";
import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImage } from "../../utils/getImage";

export const Experience = () => {
  // Manually define pairs of skill categories
  const skillPairs = [
    [skills[0], skills[1]], // Frontend + Backend
    [skills[2], skills[3]], // Database + UI/UX
    [skills[4], skills[5]], // DevOps + Tools
  ];
  const languageBlock = skills[6]; // Programming Languages

  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>

      {/* Skills Section */}
      <div className={styles.skills}>
        <h3 className={styles.sectionHeader}>Technical Skills</h3>

        {skillPairs.map((pair, index) => (
          <div key={index} className={styles.skillRow}>
            {pair.map((group, groupId) => (
              <div key={groupId} className={styles.skillGroup}>
                <h4 className={styles.skillCategory}>{group.category}</h4>
                <div className={styles.skillList}>
                  {group.skills.map((skill, skillId) => (
                    <div key={skillId} className={styles.skill}>
                      <div className={styles.skillImageContainer}>
                        <img src={getImage(skill.imageSrc)} alt={skill.title} />
                      </div>
                      <p>{skill.title}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ))}

        {/* Programming Languages Full Width */}
        <div className={styles.fullWidth}>
          <h4 className={styles.skillCategory}>{languageBlock.category}</h4>
          <div className={styles.skillList}>
            {languageBlock.skills.map((skill, skillId) => (
              <div key={skillId} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={getImage(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Council / Experience Section */}
      {history.length > 0 && (
        <div className={styles.history}>
          <h3 className={styles.sectionHeader}>Council Experience</h3>
          <ul>
            {history.map((historyItem, id) => (
              <li key={id} className={styles.historyItem}>
                <img
                  src={getImage(historyItem.imageSrc)}
                  alt={`${historyItem.organisation} Logo`}
                />
                <div className={styles.historyItemDetails}>
                  <h4>{`${historyItem.role}, ${historyItem.organisation}`}</h4>
                  <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                  <ul>
                    {historyItem.experiences.map((experience, idx) => (
                      <li key={idx}>{experience}</li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
};
