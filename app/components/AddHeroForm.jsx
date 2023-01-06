"use client";
import { useState } from "react";
import styles from "./addHero.module.css";

export default function AddHeroForm({ submitHero }) {
  const [newHero, setNewHero] = useState({})

  const handleChange = (e) => {
    const userInput = {
      ...newHero,
      [e.target.name]: e.target.value
    }

    setNewHero(userInput);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    submitHero(newHero);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        type="text"
        name="name"
        id="name"
        placeholder="Name"
        onChange={handleChange}
        />
      <input
        className={styles.input}
        type="text"
        name="publisher"
        id="publisher"
        placeholder="Publisher"
        onChange={handleChange}
        />
      <input
        className={styles.input}
        type="text"
        name="alter_ego"
        id="alter_ego"
        placeholder="Alter Ego"
        onChange={handleChange}
        />
      <input
        className={styles.input}
        type="text"
        name="first_appearance"
        id="first_appearance"
        placeholder="First Appearance"
        onChange={handleChange}
        />
      <input
        className={styles.input}
        type="text"
        name="characters"
        id="characters"
        placeholder="Characters"
        onChange={handleChange}
        />
      <input
        className={styles.input}
        type="url"
        name="image"
        id="image"
        placeholder="Image"
        onChange={handleChange}
      />
      <button className={styles.btn} type="submit">
        Send
      </button>
    </form>
  );
}
