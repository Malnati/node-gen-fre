// src/cache/SpecificationProvider.ts

import { db } from './IndexDB';
import DataProviderFactory from './DataProviderFactory';

const SpecificationProvider = DataProviderFactory(db.specificationService);

export default SpecificationProvider;