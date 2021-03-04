import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import './App.scss';
import { StoreInterface, Article, SearchOptionsState } from './redux/reducers';
import { handleFetchSearchOptions, addArticle } from './saga';
import { filterArticles } from './helpers';
import { Search, Articles } from './Components';

interface MapStateToPropsType {
  articles: Article[];
  searchOptions: SearchOptionsState;
}

interface MapDispatchToPropsType {
  handleFetchSearchOptions: typeof handleFetchSearchOptions;
  addArticle: typeof addArticle;
}

type PropsType = MapStateToPropsType & MapDispatchToPropsType;

const _App = ({ articles, searchOptions, handleFetchSearchOptions, addArticle }: PropsType) => {
  const {
    isLoading,
    searchOptions: { list },
  } = searchOptions;

  useEffect(() => {
    handleFetchSearchOptions();
  }, []);

  const handleAddArticle = (article: Article) => {
    addArticle(article);
  };

  return (
    <div className="wrapper">
      <Search
        isLoading={isLoading}
        list={filterArticles(list, articles)}
        handleAddArticle={handleAddArticle}
      />
      <Articles articles={articles} />
    </div>
  );
};

const mapStateToProps = ({ searchOptions, articles }: StoreInterface): MapStateToPropsType => {
  return {
    articles: articles.articles,
    searchOptions: searchOptions,
  };
};

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType =>
  bindActionCreators({ handleFetchSearchOptions, addArticle }, dispatch);

export const App = connect(mapStateToProps, mapDispatchToProps)(_App);
