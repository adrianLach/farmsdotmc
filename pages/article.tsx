import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const Atricle = () => {

    return (
        <div>
            <Card sx={{ maxWidth: 434, '&:hover': { backgroundColor: 'lightgray' }, transition: '0.5s' }} elevation={5}>
                <CardContent>
                    <Typography variant='h5' component={'div'}>
                        Minecrafts Ultimate Omnifarm
                    </Typography>
                </CardContent>
                <CardMedia>
                    <iframe width="434" height="244" src="https://www.youtube.com/embed/eya_Q1TDG2Y" title="Minecrafts Ultimate Omnifarm" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                </CardMedia>
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        {"It's time to pay off an old debt to Xisuma after I crushed his spirits with my first ever blast chamber design. In this video we look at the ultimate omnifarm featuring concrete converters, cobble and basalt generators, and a universal tree farm all in the one compact unit. We also look at the amazing utilities such as fault detection and diagnostic systems which make this farm ideal for players who are sick and tired of having to fix things they don't understand."}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Grid
                        container
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        <Button size="small" variant='contained'>Read Article</Button>
                        <Button target={'_blank'} href='https://www.youtube.com/watch?v=eya_Q1TDG2Y' size="small" variant='text'>Watch on Youtube &#10138;</Button>
                    </Grid>
                </CardActions>
            </Card>
        </div>
    )

}
export default Atricle