import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { Article as ArticleInterface } from '../../redux/reducers';

const autocompleteWidth = { width: 400 };

export interface PropsType {
  isLoading: boolean;
  list: ArticleInterface[];
  handleAddArticle: (article: ArticleInterface) => void;
}

const _Search = ({ isLoading, list, handleAddArticle }: PropsType) => {
  return (
    <Autocomplete
      id="Article-demo"
      options={list}
      getOptionLabel={(option) => option.name}
      loading={isLoading}
      onChange={(e, value) => value && handleAddArticle(value)}
      style={autocompleteWidth}
      renderInput={(params) => <TextField {...params} label="Article" variant="outlined" />}
    />
  );
};

export const Search = _Search;
