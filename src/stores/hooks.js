import { createContext, useContext } from "react";

export const useStore = (store) => useContext(createContext(store));
