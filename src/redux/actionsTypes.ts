import {
  FetchSearchOptionsRequest,
  FetchSearchOptionsSuccess,
  FetchSearchOptionsFailure,
  AddArticle,
  RemoveArticle,
  ClearArticles,
} from '../saga';

export enum SearchOptionsReducerActionsTypes {
  fetchSearchOptionsRequest = 'FETCH_SEARCH_OPTIONS_REQUEST',
  fetchSearchOptionsSuccess = 'FETCH_SEARCH_OPTIONS_SUCCESS',
  fetchSearchOptionsFailure = 'FETCH_SEARCH_OPTIONS_FAILURE',
}

export type SearchOptionsReducerAction =
  | FetchSearchOptionsRequest
  | FetchSearchOptionsSuccess
  | FetchSearchOptionsFailure;

export enum ArticlesReducerActionsTypes {
  addArticle = 'ADD_ARTICLE',
  removeArticle = 'REMOVE_ARTICLE',
  clearArticles = 'CLEAR_ARTICLES',
}

export type ArticlesReducerAction = AddArticle | RemoveArticle | ClearArticles;
