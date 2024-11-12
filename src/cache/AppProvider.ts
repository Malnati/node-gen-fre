// src/cache/AppProvider.ts

import { db } from './IndexDB';
import DataProviderFactory from './DataProviderFactory';

const AppProvider = DataProviderFactory(db.appService);

export default AppProvider;