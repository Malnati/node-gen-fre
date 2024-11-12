// src/cache/FrontEndProvider.ts

import { db } from './IndexDB';
import DataProviderFactory from './DataProviderFactory';

const FrontEndProvider = DataProviderFactory(db.frontendService);

export default FrontEndProvider;