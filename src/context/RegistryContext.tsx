// src/context/RegistryContext.ts

import { createContext } from "react";

export interface RegistryContextType {
  getInstance: (_instance: string) => { [key: string]: { [key: string]: {} } },
  observeFieldOf: (_instance: string, _field: string, _value: any) => void,
  unobserveFieldOf: (_instance: string, _field: string) => void,
  reset: () => void
}

export const RegistryContext = createContext<RegistryContextType | undefined>(undefined);

