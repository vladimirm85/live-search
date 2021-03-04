import { combineReducers, Reducer } from 'redux';
import {
  Author as AuthorInterface,
  Article as ArticleInterface,
  ArticlesReducerState as ArticlesReducer,
  articles,
} from './articlesReducer';
import {
  SearchOptions as SearchOptionsInterface,
  SearchOptionsReducerState as SearchOptionsReducer,
  searchOptions,
} from './searchOptionsReducer';

export interface StoreInterface {
  articles: ArticlesReducer;
  searchOptions: SearchOptionsReducer;
}

export const reducers: Reducer<StoreInterface> = combineReducers<StoreInterface>({
  articles,
  searchOptions,
});

export type Author = AuthorInterface;
export type Article = ArticleInterface;
export type ArticlesState = ArticlesReducer;
export type SearchOptions = SearchOptionsInterface;
export type SearchOptionsState = SearchOptionsReducer;
