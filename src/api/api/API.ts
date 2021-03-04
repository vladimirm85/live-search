import heavyDataResponse from './data.json'

// import { HeavyResponse, LightResponse } from '../types';

class _API {
  getHeavyData = () =>
    new Promise((resolve, reject) =>
      setTimeout(() => {
        resolve(heavyDataResponse);
        reject('Failed to load Data');
      }, 2000)
    );
}

export const API = new _API();
