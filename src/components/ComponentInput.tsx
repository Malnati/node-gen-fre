// src/components/ComponentInput.tsx

export interface ComponentInputProps {
    component: React.ElementType;
    source: string;
    current: any;
}

const convertToBoolean = (value: any): boolean => {
    if (typeof value === 'string') {
        return value === 'on' || value.toLowerCase() === 'true';
    }
    return !!value;
};

export const ComponentInput = ({ component: Component, source, current }: ComponentInputProps) => {
    return (
        <Component
            source={source}
            label={current?.label || ''}
            defaultValue={current?.defaultValue}
            disabled={convertToBoolean(current?.disabled)}
            fullWidth={convertToBoolean(current?.fullWidth)}
            helperText={current?.helperText || ''} />
    );
};