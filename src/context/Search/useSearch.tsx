import { useContext } from "react";
import { SearchContext } from ".";

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error("ERRO NO CONTEXT");
  }
  return context;
};
