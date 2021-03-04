import { Article } from '../redux/reducers';

export const filterArticles = (articles: Article[], filters: Article[]) =>
  articles.filter((article) => !filters.find((filter) => filter.id === article.id));
