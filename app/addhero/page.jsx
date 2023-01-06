'use client';

import apiCalls from "../../services/apiCalls";
import { useRouter } from "next/navigation";
import AddHeroForm from "../components/AddHeroForm";

export default function AddHero() {
  const router = useRouter()

  const submitHero = async (newHero) => {
    const res = await apiCalls.addHero(newHero);
    console.log(res)
    router.push("/heroes");
  }

  return (
    <AddHeroForm submitHero={submitHero} />
  );
}
