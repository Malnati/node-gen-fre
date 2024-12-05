// src/types/inputs.d.ts

import { SxProps } from '@mui/system';

export interface CommonFieldProps {
    source: string; // Obrigatório
    label?: string | React.ReactElement; // Opcional
    record?: Record<string, any>; // Opcional
    sortable?: boolean; // Opcional
    sortBy?: string; // Opcional
    sortByOrder?: 'ASC' | 'DESC'; // Opcional
    className?: string; // Opcional
    textAlign?: 'left' | 'right' | 'center'; // Opcional
    emptyText?: string; // Opcional
    sx?: SxProps; // Opcional, representando o tipo SxProps do Material-UI
  }