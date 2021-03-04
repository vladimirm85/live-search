import { SearchOptionsReducerActionsTypes, ArticlesReducerActionsTypes } from '../redux';
import { SagaActionsTypes } from './types';
import { SearchOptions, Article } from '../redux/reducers';

export interface HandleFetchSearchOptions {
  type: SagaActionsTypes.handleFetchSearchOptions;
}

export const handleFetchSearchOptions = (): HandleFetchSearchOptions => ({
  type: SagaActionsTypes.handleFetchSearchOptions,
});

export interface FetchSearchOptionsRequest {
  type: SearchOptionsReducerActionsTypes.fetchSearchOptionsRequest;
}

export const fetchSearchOptionsRequest = (): FetchSearchOptionsRequest => ({
  type: SearchOptionsReducerActionsTypes.fetchSearchOptionsRequest,
});

export interface FetchSearchOptionsSuccess {
  type: SearchOptionsReducerActionsTypes.fetchSearchOptionsSuccess;
  payload: {
    searchOptions: SearchOptions;
  };
}

export const fetchSearchOptionsSuccess = (
  searchOptions: SearchOptions
): FetchSearchOptionsSuccess => ({
  type: SearchOptionsReducerActionsTypes.fetchSearchOptionsSuccess,
  payload: {
    searchOptions,
  },
});

export interface FetchSearchOptionsFailure {
  type: SearchOptionsReducerActionsTypes.fetchSearchOptionsFailure;
  payload: {
    errorMessage: string;
  };
}

export const fetchSearchOptionsFailure = (errorMessage: string): FetchSearchOptionsFailure => ({
  type: SearchOptionsReducerActionsTypes.fetchSearchOptionsFailure,
  payload: {
    errorMessage,
  },
});

export interface AddArticle {
  type: ArticlesReducerActionsTypes.addArticle;
  payload: {
    article: Article;
  };
}

export const addArticle = (article: Article): AddArticle => ({
  type: ArticlesReducerActionsTypes.addArticle,
  payload: {
    article,
  },
});

export interface RemoveArticle {
  type: ArticlesReducerActionsTypes.removeArticle;
  payload: {
    id: string;
  };
}

export const removeArticle = (id: string): RemoveArticle => ({
  type: ArticlesReducerActionsTypes.removeArticle,
  payload: {
    id,
  },
});

export interface ClearArticles {
  type: ArticlesReducerActionsTypes.clearArticles;
}

export const clearArticles = (): ClearArticles => ({
  type: ArticlesReducerActionsTypes.clearArticles,
});
