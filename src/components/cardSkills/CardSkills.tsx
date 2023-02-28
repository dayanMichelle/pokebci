import { useState } from "react";
import { ListSkills } from "../listSkills";
import styles from "./CardSkills.module.css";

type CardSkillsProps = {
  name: string;
  moves: string[];
  abilities: string[];
};

export const CardSkills = ({ name, moves, abilities }: CardSkillsProps) => {
  const [toggle, setToggle] = useState("moves");

  return (
    <div className={styles.container}>
      <div className={styles.wrap}>
        <p>
          What will <span className={styles.name}>{name}</span> do?
        </p>
        <div>
          <button
            className={styles.btn}
            onClick={() => setToggle("moves")}
            disabled={moves.length === 0 || toggle === "moves"}
          >
            moves
          </button>
          <button
            className={styles.btn}
            onClick={() => setToggle("abilities")}
            disabled={abilities.length === 0 || toggle === "abilities"}
          >
            abilities
          </button>
          <ListSkills skills={toggle == "moves" ? moves : abilities} />
        </div>
      </div>
    </div>
  );
};
