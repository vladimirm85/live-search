import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import './App.scss';
import { StoreInterface, Article, SearchOptionsState } from './redux/reducers';
import { handleFetchSearchOptions } from './saga';

interface MapStateToPropsType {
  articles: Article[];
  searchOptions: SearchOptionsState;
}

interface MapDispatchToPropsType {
  handleFetchSearchOptions: typeof handleFetchSearchOptions;
}

type PropsType = MapStateToPropsType & MapDispatchToPropsType;

export const _App = ({ articles, searchOptions, handleFetchSearchOptions }: PropsType) => {
  const {
    isLoading,
    searchOptions: { list },
  } = searchOptions;
  useEffect(() => {
    handleFetchSearchOptions('test');
  }, []);
  return <div>{isLoading ? <p>Loading</p> : <p>Not Loading</p>}</div>;
};

const mapStateToProps = ({ searchOptions, articles }: StoreInterface): MapStateToPropsType => {
  return {
    articles: articles.articles,
    searchOptions: searchOptions,
  };
};

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType =>
  bindActionCreators({ handleFetchSearchOptions }, dispatch);

export const App = connect(mapStateToProps, mapDispatchToProps)(_App);
