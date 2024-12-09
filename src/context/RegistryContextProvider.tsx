// src/context/RegistryContextProvider.tsx

import { useState, useEffect, ReactNode } from "react";
import { RegistryContext, COMMIT_HASH } from "./RegistryContext";

interface RegistryContextProviderProps {
  children: ReactNode;
}

export const RegistryContextProvider = ({ children }: RegistryContextProviderProps) => {
  const [commitHash, setCommitHash] = useState<string>("");

  useEffect(() => {
    const currentCommitHash = COMMIT_HASH || "";

    // Atualiza o estado com os valores recuperados ou padrões
    setCommitHash(currentCommitHash);
  }, []);

  const value = {
    commitHash,
  };

  return <RegistryContext.Provider value={value}>{children}</RegistryContext.Provider>;
};