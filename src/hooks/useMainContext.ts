import { useContext } from "react";
import { mainContext } from "@/context/mainContext";

export const useMainContext = (): IContext | undefined => {
  const context = useContext(mainContext);

  return context;
};
