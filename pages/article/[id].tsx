import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';
import Head from 'next/head';

const AtricleID = () => {

    return (
        <div>
            <Head>
                <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8863121170105656"
                    crossOrigin="anonymous"></script>
            </Head>
            <Box>
                <Grid container spacing={1} direction={'row'}>

                    <Grid item xs={2}>
                        <Typography variant='h5'>Navigation</Typography>
                    </Grid>
                    <Grid item xs={10}>

                        <Grid container spacing={1} direction={'column'}>

                            <Grid item xs={2}>
                                <Grid container justifyContent={'space-between'}>
                                    <Grid item>
                                        <Typography variant='h5'>/HomeIcon/</Typography>
                                    </Grid>
                                    <Grid item>
                                        <Box>
                                            <TextField variant='standard' label='Search'></TextField>
                                            <Button>/Docs/</Button>
                                            <Button>/Support/</Button>
                                            <Button>/Become a submitter/</Button>
                                            <Button variant='contained'>/Login/Logout/</Button>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Grid>

                            <Grid item xs>
                                <Divider></Divider>
                                <Typography variant='h5'>Content Page</Typography>
                                <Typography variant='body2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Typography>
                            </Grid>

                            <Grid item xs={12}>
                                <Divider></Divider>
                                <Typography variant='h5'>/Footer/ (Add Contact and Refrences )</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )

}
export default AtricleID