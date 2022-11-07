import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const AtricleID = () => {

    return (
        <div>
            <Grid container spacing={1} justifyContent='center'>

                <Grid item xs={12}>
                    <Paper elevation={2} sx={{ padding: '5px' }}>
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
                    </Paper>
                </Grid>

                <Grid item xs={12}>

                    <Grid container spacing={1}>

                        <Grid item xs>
                            <Paper elevation={2} sx={{ padding: '5px' }}>
                                <Typography variant='h5'>Navigation</Typography>
                            </Paper>
                        </Grid>

                        <Grid item xs={10}>
                            <Paper elevation={2} sx={{ padding: '5px' }}>
                                <Typography variant='h5'>Content Page</Typography>
                                <Typography variant='body2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Typography>
                            </Paper>
                        </Grid>
                    </Grid>

                </Grid>

                <Grid item xs={12}>
                    <Paper elevation={2} sx={{ padding: '5px' }}>
                        <Typography variant='h5'>/Footer/ (Add Contact and Refrences etc)</Typography>
                    </Paper>
                </Grid>

            </Grid>
        </div>
    )

}
export default AtricleID