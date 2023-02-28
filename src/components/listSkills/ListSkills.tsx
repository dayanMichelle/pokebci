import styles from "./ListSkills.module.css";

type ListSkillsProps = {
  skills: string[];
};

export const ListSkills = ({ skills }: ListSkillsProps) => {
  return (
    <div className={styles.container}>
      {skills?.map((skill) => (
        <p key={skill} className={styles.move}>
          {skill}
        </p>
      ))}
    </div>
  );
};
