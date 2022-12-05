import { useState, createContext } from "react";

export const ToggleCartContext = createContext({
  toggleCart: null,

  setToggleCart: () => null,
});
export const ToggleCartProvider = ({ children }) => {
  const [toggleCart, setToggleCart] = useState(null);
  const value = { toggleCart, setToggleCart };
  return (
    <ToggleCartContext.Provider value={value}>
      {children}
    </ToggleCartContext.Provider>
  );
};
