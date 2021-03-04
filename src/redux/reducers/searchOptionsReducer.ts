import { SearchOptionsReducerActionsTypes, SearchOptionsReducerAction } from '../actionsTypes';
import { Article } from './articlesReducer';

export interface SearchOptions {
  list: Article[];
  total: number;
}

export interface SearchOptionsReducerState {
  isLoading: boolean;
  searchOptions: SearchOptions;
  errorMessage: string;
}

const initialState: SearchOptionsReducerState = {
  isLoading: true,
  searchOptions: {
    list: [],
    total: 0,
  },
  errorMessage: '',
};

export const searchOptions = (
  state = initialState,
  action: SearchOptionsReducerAction
): SearchOptionsReducerState => {
  switch (action.type) {
    case SearchOptionsReducerActionsTypes.fetchSearchOptionsRequest:
      return {
        ...state,
        isLoading: true,
        errorMessage: '',
      };
    case SearchOptionsReducerActionsTypes.fetchSearchOptionsSuccess:
      const { searchOptions } = action.payload;
      return {
        ...state,
        searchOptions,
        isLoading: false,
        errorMessage: '',
      };
    case SearchOptionsReducerActionsTypes.fetchSearchOptionsFailure:
      const { errorMessage } = action.payload;
      return {
        ...state,
        isLoading: false,
        errorMessage: errorMessage,
      };
    default: {
      return state;
    }
  }
};
