// src/cache/ScreenProvider.ts

import { db } from './IndexDB';
import DataProviderFactory from './DataProviderFactory';

const ScreenProvider = DataProviderFactory(db.screenService);

export default ScreenProvider;