import { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import HighQualityIcon from '@mui/icons-material/HighQuality';
import Grid from '@mui/material/Grid';
import MSForm from '../../components/MSForm'
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import Introduction from '../Introduction/Introduction'
import Copyright from '../Copyright/Copyright'
import LocalesButton from '../LocalesButton/LocalesButton'
import cards from '../../constants/cards/cards'
import appbar from '../../constants/appbar/appbar'
import { head } from 'lodash';

const theme = createTheme();

const Home = () => {
    const [lan, setLan] = useState<string>('en')

    const onLocaleClick = () => {
        setLan(lan === 'en' ? 'cn' : 'en')
    }

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <HighQualityIcon sx={{ mr: 2 }} />
                        <Typography variant="h6" color="inherit" component="div" sx={{ flexGrow: 1 }}>
                            {appbar.motto[lan as keyof typeof appbar.motto]}
                        </Typography>
                        <LocalesButton onLocaleClick={onLocaleClick} lan={lan}/>
                    </Toolbar>
                </AppBar>
            </Box>
            <main>
                <Container sx={{ py: 8 }} maxWidth="md">
                    <Introduction lan={lan}/>
                    {/* End hero unit */}
                    <Grid container spacing={4}>
                        {cards.map(({id, image,heading, content}) => (
                        <Grid item key={id} xs={12} sm={6} md={4}>
                            <Card
                            sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                            >
                            <CardMedia
                                component="img"
                                sx={{
                                // 16:9
                                // pt: '9.25%',
                                }}
                                image={image}
                                alt="random"
                            />
                            <CardContent sx={{ flexGrow: 1 }}>
                                <Typography gutterBottom variant="h5" component="h2">
                                {heading[lan as keyof typeof heading]}
                                </Typography>
                                <Typography>
                                {content[lan as keyof typeof content]}
                                </Typography>
                            </CardContent>
                            </Card>
                        </Grid>
                        ))}
                    </Grid>
                </Container>
                <MSForm lan={lan}/>
            </main>
            <footer>
                <Box sx={{ bgcolor: 'background.red', p: 6 }} component="footer">
                    <Copyright sx={{ mt: 8, mb: 4 }} />
                </Box>
            </footer>  
        </ThemeProvider>
    )
}

export default Home;