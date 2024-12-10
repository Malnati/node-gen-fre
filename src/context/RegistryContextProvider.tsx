import { useObserveChanges } from "react-use-observe-changes";
import { ReactNode } from "react";
import { RegistryContext } from "./RegistryContext";

interface RegistryContextProviderProps {
    children: ReactNode;
}

export const RegistryContextProvider = ({ children }: RegistryContextProviderProps) => {
    const { 
        getInstance,
        observeFieldOf,
        unobserveFieldOf,
        reset
    } = useObserveChanges('debug');

    return <RegistryContext.Provider value={{
        getInstance,
        observeFieldOf,
        unobserveFieldOf,
        reset
    }}>{children}</RegistryContext.Provider>;
};