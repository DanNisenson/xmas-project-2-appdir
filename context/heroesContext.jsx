import { createContext, useState } from "react";

export const Context = createContext(null);

export default function HeroesContext({ children }) {
  const [heroes, setHeroes] = useState(null);

  return (
    <Context.Provider value={{ heroes, setHeroes }}>
      { children }
    </Context.Provider>
  )
}