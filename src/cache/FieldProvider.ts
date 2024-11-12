// src/cache/FieldProvider.ts

import { db } from './IndexDB';
import DataProviderFactory from './DataProviderFactory';

const FieldProvider = DataProviderFactory(db.fieldService);

export default FieldProvider;