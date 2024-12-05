// src/components/ComponentInput.tsx

export interface ComponentInputProps {
    component: React.ElementType;
    source: string;
    current: any;
}
export const ComponentInput = ({ component: Component, source, current }: ComponentInputProps) => {
    return (
        <Component
            source={source}
            label={current?.label || ''}
            defaultValue={current?.defaultValue}
            disabled={current?.disabled}
            fullWidth={current?.fullWidth}
            helperText={current?.helperText || ''} />
    );
};
