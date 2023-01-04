'use client'

import styles from "./singleHero.module.css";

export default function SingleHero({ searchParams }) {
  const hero = searchParams;

  return ( <div className={styles.hero}>
    <img className={styles.img} src={hero.image} alt={null} />
    <h2>{hero.name}</h2>
    <span>Alter ego: {hero.alter_ego}</span>
    <span>Publisher: {hero.publisher}</span>
    
  </div> )
}