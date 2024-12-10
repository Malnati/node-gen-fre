
import { useState } from 'react';
import log, { LogLevelDesc } from 'loglevel';

const useObserveChanges = (logLevelDesc: string | undefined) => {
    const logLevel: string | undefined = logLevelDesc || 'info';
    log.setLevel(logLevel as LogLevelDesc);

    const [instance, setInstance] = useState<{ [key: string]: { [key: string]: any } }>({});

    const observeFieldOf = (_instance: string, _field: string, _value: any) => {
        log.debug(`[useObserveChanges] observeFieldOf (${_instance}, ${_field}, ${_value}) called`);
        setInstance(prevInstance => ({
            ...prevInstance,
            [_instance]: {
                ...prevInstance[_instance],
                [_field]: _value
            }
        }));
    };

    const getInstance = (_instance: string): { [key: string]: { [key: string]: {} } } => {
        log.debug(`[useObserveChanges] getInstance (${_instance}) called`);
        const current = instance[_instance];
        if (!current) {
            console.warn(`Instance ${_instance} not found, please create it first using observeFieldOf('nameOfYourInstance', 'fieldName', value)`);
            return {};
        }
        return current;
    };

    const unobserveFieldOf = (_instance: string, _field: string) => {
        log.debug(`[useObserveChanges] unobserveFieldOf (${_instance}, ${_field}) called`);
        setInstance(prevInstance => {
            const newInstance = { ...prevInstance[_instance] };
            delete newInstance[_field];
            return {
                ...prevInstance,
                [_instance]: newInstance
            };
        });
    };

    const reset = () => {
        log.debug(`[useObserveChanges] resetInstance () called`);
        setInstance({});
    };

    return {
        getInstance,
        observeFieldOf,
        unobserveFieldOf,
        reset,
    };
};

export default useObserveChanges;