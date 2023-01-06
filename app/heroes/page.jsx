"use client";
import Link from "next/link";
import { useEffect, useContext } from "react";
import { Context } from "../../context/heroesContext";
import styles from "./Heroes.module.css";

export default function AllHeroes() {
  const { heroes, setHeroes } = useContext(Context);

  useEffect(() => {
    const getHeroes = async () => {
      try {
        let res = await fetch("http://localhost:3003");
        res = await res.json();
        console.log("fetch", res);
        setHeroes(res);
      } catch (error) {
        console.log(error);
      }
    };

    getHeroes();
  }, []);

  return (
    <>
      
        <h1>These are heroes</h1>
        <div className={styles.heroes}>
          {heroes &&
            heroes.map((hero) => (
              <Link
                href={`/heroes/${hero.id}`}
                key={hero.id}
                hero={hero}
              >
                <img className={styles.img} src={hero.image} alt={hero.name} />
                <div>{hero.name}</div>
              </Link>
            ))}
        </div>

    </>
  );
}
