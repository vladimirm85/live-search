import data from './data.json';
import { SearchOptions } from '../redux/reducers';

class _API {
  getSearchOptions = (query: string) =>
    new Promise<SearchOptions>((resolve, reject) =>
      setTimeout(() => {
        resolve(data);
        reject('Failed to load Data');
      }, 2000)
    );
}

export const API = new _API();
