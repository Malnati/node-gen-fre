
import { useObserveChanges } from "react-use-observe-changes";
import { ReactNode } from "react";
import { RegistryContext } from "./RegistryContext";

interface RegistryContextProviderProps {
    children: ReactNode;
  }
  
  export const RegistryContextProvider = ({ children }: RegistryContextProviderProps) => {
  
    const { 
      observeInstance,
      getInstance,
      observeFieldOf,
      unobserveFieldOf,
      reset
    } = useObserveChanges('debug');
  
    return <RegistryContext.Provider value={{
      observeInstance,
      getInstance,
      observeFieldOf,
      unobserveFieldOf,
      reset
    }}>{children}</RegistryContext.Provider>;
  };