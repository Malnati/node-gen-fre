
import { useState } from 'react';
import { useLogger } from 'react-use-logger';

const useObserveChanges = (debug: string) => {
    const [instance, setInstance] = useState<{ [key: string]: { [key: string]: any } }>({});
    const log = useLogger(debug);

    const observeFieldOf = (_instance: string, _field: string, _value: any) => {
        const newInstance = {
            ...instance,
            [_instance]: {
                ...instance[_instance],
                [_field]: _value
            }
        };
        log.debug(`[useObserveChanges] observeFieldOf (${_instance}, ${_field}, ${_value}) setting ${JSON.stringify(newInstance, null, 2)}`);
        setInstance(newInstance);
    };

    const getInstance = (_instance: string): { [key: string]: { [key: string]: {} } } => {
        const current: { [key: string]: { [key: string]: {} } } = instance[_instance] || {};
        log.debug(`[useObserveChanges] getInstance (${_instance}) => ${JSON.stringify(current, null, 2)}`);
        return current;
    };

    const unobserveFieldOf = (_instance: string, _field: string) => {
        const newInstance = {
            ...instance,
            [_instance]: {
                ...instance[_instance]
            }
        };
        delete newInstance[_instance][_field];
        log.debug(`[useObserveChanges] unobserveFieldOf (${_instance}, ${_field}) setting ${JSON.stringify(newInstance, null, 2)}`);
        setInstance(newInstance);
    };

    const reset = () => {
        log.debug(`[useObserveChanges] reset`);
        setInstance({});
    };

    return {
        getInstance,
        observeFieldOf,
        unobserveFieldOf,
        reset
    };
};

export { useObserveChanges };