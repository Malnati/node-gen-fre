import { useContext } from "react";
import { RegistryContext, RegistryContextType } from "../context/RegistryContext";


export const useRegistryContext = (): RegistryContextType => {
  const context = useContext(RegistryContext);
  if (!context) {
    throw new Error("useRegistryContext must be used within a RegistryContextProvider");
  }
  return context;
}
