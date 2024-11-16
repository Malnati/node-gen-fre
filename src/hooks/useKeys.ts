// src/hooks/useKeys.ts

const useKeys = () => {

    const useKey = (data: any) => {
        const key = Object.keys(data).find(key => (key === 'key'));
        if (key) return data;
        return { key: Date.now().valueOf(), ...data };
    };

    const useKeyOrId = (data: any) => {
        const key = Object.keys(data).find(key => (key === 'key' || key === 'id'));
        if (key) return data;
        return { key: Date.now().valueOf(), ...data };
    };

    return {
        useKey,
        useKeyOrId
    };
};

export default useKeys;