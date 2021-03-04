import React, { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import './App.scss';
import { StoreInterface, Article, SearchOptionsState } from './redux/reducers';
import { handleFetchSearchOptions, addArticle } from './saga';
import { Search } from './Components';

const autocompleteWidth = { width: 400 };

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
      <Search isLoading={isLoading} list={list} handleAddArticle={handleAddArticle} />
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
