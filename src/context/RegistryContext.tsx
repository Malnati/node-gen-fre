// src/context/RegistryContext.ts

import { createContext, useContext } from "react";

export const COMMIT_HASH: string = "hash_inicial";

interface RegistryContextType {
  commitHash: string;
}

export const RegistryContext = createContext<RegistryContextType | undefined>(undefined);

export function useRegistryContext() {
  const context = useContext(RegistryContext);
  if (context === undefined) {
    throw new Error("useRegistryContext must be used within a RegistryContextProvider");
  }
  return context;
}