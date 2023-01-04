'use client';

import apiCalls from "../../services/apiCalls";
import { useRouter } from "next/navigation";
import styles from "./addHero.module.css";

export default function AddHero() {
  const router = useRouter()
  console.log('render addhero')
  const handleSubmit = async (e) => {
    e.preventDefault();

    const values = e.target;
    const newHero = {
      name: values.name.value,
      publisher: values.publisher.value,
      alter_ego: values.alter_ego.value,
      first_appearance: values.first_appearance.value,
      image: values.image.value,
      characters: values.characters.value
    }

    const res = await apiCalls.addHero(newHero);
    // console.log('newhero added', res);
    router.push("/heroes");
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        type="text"
        name="name"
        id="name"
        placeholder="Name"
      />
      <input
        className={styles.input}
        type="text"
        name="publisher"
        id="publisher"
        placeholder="Publisher"
      />
      <input
        className={styles.input}
        type="text"
        name="alter_ego"
        id="alter_ego"
        placeholder="Alter Ego"
      />
      <input
        className={styles.input}
        type="text"
        name="first_appearance"
        id="first_appearance"
        placeholder="First Appearance"
      />
      <input
        className={styles.input}
        type="text"
        name="characters"
        id="characters"
        placeholder="Characters"
      />
      <input
        className={styles.input}
        type="url"
        name="image"
        id="image"
        placeholder="Image"
      />
      <button className={styles.btn} type="submit">
        Send
      </button>
    </form>
  );
}
