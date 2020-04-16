import React, { FC } from 'react';
import Card from '@material-ui/core/Card';
//import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
//import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
//import HomeIcon from '@material-ui/icons/Home';
//import CodeIcon from '@material-ui/icons/Code';
import { makeStyles } from '@material-ui/core/styles';
import { useTranslate } from 'react-admin';

const useStyles = makeStyles({
    media: {
        height: '25em',
    },
});

const mediaUrl = `https://www.heritagedaily.com/wp-content/uploads/2017/05/raj1.png`;

const Welcome: FC = () => {
    const translate = useTranslate();
    const classes = useStyles();
    return (
        <Card>
            <CardMedia image={mediaUrl} className={classes.media} />
            <CardContent>
                <Typography variant="h5" component="h2">
                    {translate('Welcome to Complete the InComplete')}
                </Typography>
                <Typography component="p">
                    {translate('Complete the InComplete is an application which helps in rebuilding deterioarated monuments using augmented reality.    ')}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default Welcome;
