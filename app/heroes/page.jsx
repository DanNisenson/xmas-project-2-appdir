// "use client"
import Link from "next/link";
import { use } from "react";
import styles from "./Heroes.module.css";

async function getHeroes() {
  let res = await fetch("http://localhost:3003", {cache: "no-store"});
  res = await res.json();
  console.log(res)
   return res;
}

export default function AllHeroes() {
  const heroes = use(getHeroes());

  return (
    <>
      <h1>These are heroes</h1>
      <div className={styles.heroes}>
        {heroes?.map((hero) => (
          <Link
            href={{
              pathname: `/heroes/${hero.id}`,
              query: hero,
            }}
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
