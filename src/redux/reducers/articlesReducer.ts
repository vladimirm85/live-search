import { ArticlesReducerActionsTypes, ArticlesReducerAction } from '../actionsTypes';

export interface Author {
  firstName: string;
  lastName: string;
  avatar: string;
}

export interface Article {
  id: string;
  name: string;
  avatar: string;
  author: Author;
}

export interface ArticlesReducerState {
  articles: Article[];
}

const initialState: ArticlesReducerState = {
  articles: [],
};

export const articles = (
  state = initialState,
  action: ArticlesReducerAction
): ArticlesReducerState => {
  switch (action.type) {
    case ArticlesReducerActionsTypes.addArticle:
      const { article } = action.payload;
      return {
        ...state,
        articles: [...state.articles, article],
      };
    case ArticlesReducerActionsTypes.removeArticle:
      const { id } = action.payload;
      return {
        ...state,
        articles: state.articles.filter((article) => article.id !== id),
      };
    case ArticlesReducerActionsTypes.clearArticles:
      return {
        ...state,
        articles: [],
      };
    default:
      return state;
  }
};
