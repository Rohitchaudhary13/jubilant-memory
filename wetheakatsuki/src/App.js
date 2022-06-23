import './App.css';
import Container from '@mui/material/Container';
import { Button, TextField, Typography } from '@mui/material';
import myimg from './akatsuki.jpg';
import { Box } from '@mui/system';
import LatestWallpaper from './LatestWallpaper';
import Footer from './Footer';

function App() {
  return (
    <div>
      <img src={myimg} className="bgImg" style={{opacity: '1'}} alt='background'/>
      <Container>
        <Typography pt={12} variant="h1" sx={{color: 'white', "fontFamily":"'League Spartan', sans-serif"}}>
        We The Akatsuki
      </Typography>
      <Typography variant="h6" gutterBottom sx={{color: 'white', "fontFamily":"'Poppins', sans-serif"}}>
      {`Latest & High Quality Anime Wallpaper`}
      </Typography>
      </Container>
      <Container>
        <TextField 
          id="filled-basic" 
          size='small' 
          label="Search" 
          variant="outlined" 
          sx={{color: 'white', "fontFamily":"'Poppins', sans-serif", backgroundColor: 'white', borderRadius: '5%'}}

        />
        <Button sx={{color: 'white', "fontFamily":"'Poppins', sans-serif"}}>Search</Button>
      </Container>
      <LatestWallpaper />
      <Footer />
    </div>
  );
}

export default App;
