// src/Layout.tsx

import type { ReactNode } from "react";
import { Box } from '@mui/material';
import { Layout as RALayout, CheckForApplicationUpdate } from "react-admin";

export const Layout = ({ children }: { children: ReactNode }) => (
  <RALayout>
    <Box display="flex" flexDirection="column" width='98%' border='1'>
      {children}
    </Box>
    <CheckForApplicationUpdate />
  </RALayout>
);
