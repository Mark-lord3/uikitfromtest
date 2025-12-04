import React, { createContext, useContext, useState } from "react";
import "../styles.scss";

const HeroStateContext = createContext();
const HeroDispatchContext = createContext();

export const useHeroStateContext = () => useContext(HeroStateContext);
export const useHeroDispatchContext = () => useContext(HeroDispatchContext);

export default function HeroContainer({ children }) {
  const [activeTabId, setActiveTabId] = useState("tour");
  const onChangeActiveTab = (id) => setActiveTabId(id);
  return (
    <section className='hero-block'>
      <HeroStateContext.Provider value={activeTabId}>
        <HeroDispatchContext.Provider value={onChangeActiveTab}>
          {children}
        </HeroDispatchContext.Provider>
      </HeroStateContext.Provider>
    </section>
  );
}
