import { createStore } from 'redux';
import { ShopReducer } from './ShopReducer';

export const sportStoreDataStore = createStore(shopReducer);