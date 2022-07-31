import { createTheme, ThemeProvider } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
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

const theme = createTheme();

const Introduction = () => {

    return <Typography gutterBottom variant="h5" component="h2" align='center' className='mx-5'>
    <section>We're a group of IT experts based in Australia, specialising in providing IT solutions. 
If you want to outsource part of or even your whole IT systems, no matter big or small, please talk to us and we're here to help.</section>
  </Typography>
}

function Copyright(props: any) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © MicroSun IT '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

  const cards = [
    {
        id: 1,
        image: 'https://images.unsplash.com/photo-1657517120264-efff2a7e8af0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1OTI2MTk5OA&ixlib=rb-1.2.1&q=80&w=1080',
        heading: 'Agility',
        content: 'We\'re agile and ambitious.',
    },
    {
        id: 2,
        image: 'https://images.unsplash.com/photo-1658781303736-e95b8db69bb1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1OTI2MTg5Mw&ixlib=rb-1.2.1&q=80&w=1080',
        heading: 'Atitude',
        content: 'Landing on the moon was achieved, and building a web app is a breeze.'
    },
    {
        id: 3,
        image: 'https://images.unsplash.com/photo-1657624394328-a2ec199a5edf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1OTI2MTk3MA&ixlib=rb-1.2.1&q=80&w=1080',
        heading: 'Experts',
        content: 'We\'re good at building beautiful and powerful web apps.'
    },
  ];

const Home = () => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <AppBar position="relative">
                <Toolbar>
                    <HighQualityIcon sx={{ mr: 2 }} />
                    <Typography variant="h6" color="inherit" noWrap>
                        Get things done is our motto. 
                    </Typography>
                </Toolbar>
            </AppBar>
            <main>
                <Container sx={{ py: 8 }} maxWidth="md">
                <Introduction />
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
                      pt: '56.25%',
                    }}
                    image={image}
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {heading}
                    </Typography>
                    <Typography>
                      {content}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
                <MSForm />
            </main>
                <Copyright sx={{ mt: 8, mb: 4 }} />
        </ThemeProvider>
    )
}

export default Home;