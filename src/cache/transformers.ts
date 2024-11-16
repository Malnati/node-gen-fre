import { SchemaInput, SchemaOutput } from './interfaces';

export function transformSchema(input: SchemaInput): SchemaOutput {
    const { id, ...output } = input;
    return output;
}