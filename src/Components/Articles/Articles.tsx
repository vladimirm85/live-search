import { Article } from '../../redux/reducers';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';

interface PropsType {
  articles: Article[];
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 300,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
  })
);

export const Articles = ({ articles }: PropsType) => {
  const classes = useStyles();
  return (
    <div className="articles">
      {articles.map((article) => {
        const {
          id,
          name,
          avatar,
          author: { firstName, lastName },
        } = article;
        return (
          <Card key={id} className={classes.root}>
            <CardHeader
              avatar={
                <Avatar aria-label="recipe" className={classes.avatar}>
                  {firstName[0] + lastName[0]}
                </Avatar>
              }
              title={`${firstName} ${lastName}`}
            />
            <CardMedia
              className={classes.media}
              image={process.env.PUBLIC_URL + '/img.jpg'}
              title={avatar}
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                {name}
              </Typography>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};
