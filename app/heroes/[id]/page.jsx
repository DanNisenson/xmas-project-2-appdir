"use client";
import { useContext, useState, useEffect } from "react";
import Button from "../../components/Button";
import btn from "../../components/button.module.css";
import { Context } from "../../../context/heroesContext";
import styles from "./singleHero.module.css";
import apiCalls from "../../../services/apiCalls";
import { useRouter } from "next/navigation";
import AddHeroForm from "../../components/AddHeroForm";

export default function SingleHero({ params: { id } }) {
  const { heroes, setHeroes } = useContext(Context);
  const [hero, setHero] = useState();
  const [form, setForm] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const singleHero = heroes?.find((hero) => hero.id === Number(id));
    setHero(singleHero);
  }, []);

  const deleteHero = () => {
    const res = apiCalls.deleteHero(id);
    console.log(res);
    router.push("/heroes");
  };

  const submitHero = async (newHero) => {
    newHero = {
      id: id,
      ...newHero,
    };

    const res = await apiCalls.editHero(newHero);

    router.push("/heroes");
  };

  return (
    hero && (
      <div className={styles.hero}>
        <img className={styles.img} src={hero.image} alt={null} />
        <h2>{hero.name}</h2>
        <span>Alter ego: {hero.alter_ego}</span>
        <span>Publisher: {hero.publisher}</span>
        <div className={styles.btnContainer}>
          <Button
            className={`${btn.btn} ${btn.green}`}
            text="Edit"
            onClick={() => setForm(!form)}
          />
          <Button
            className={`${btn.btn} ${btn.red}`}
            text="Delete"
            onClick={deleteHero}
          />
        </div>
        {form && <AddHeroForm submitHero={submitHero} />}
      </div>
    )
  );
}
