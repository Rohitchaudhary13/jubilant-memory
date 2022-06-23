import { Card, CardActionArea, CardMedia, Grid, Typography } from '@mui/material'
import { Box, Container } from '@mui/system'
import React from 'react'
import dabi from './dabi.jpg';
import deku from './deku.jpg';
import kilua from './kilua.jpg';

const LatestWallpaper = () => {
  return (
    <div>
        <Box>
            <Typography pb={6} pt={6} variant='h5' sx={{"fontFamily":"'Poppins', sans-serif", textAlign: 'center', marginTop: '16.5rem'}}>
                Latest Wallpapers
            </Typography>
            <Container sx={{textAlign: 'center'}}>
            <Grid container spacing={3}>
                <Grid item xs="auto" zeroMinWidth>
                <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        image={dabi}
                        alt="green iguana"
                        />
                    </CardActionArea>
                </Card>
                </Grid>
                <Grid item xs="auto" zeroMinWidth>
                <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        image={kilua}
                        alt="green iguana"
                        />
                    </CardActionArea>
                </Card>
                </Grid>
                <Grid item xs="auto" zeroMinWidth>
                <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        image={kilua}
                        alt="green iguana"
                        />
                    </CardActionArea>
                </Card>
                </Grid>
                <Grid item xs="auto" zeroMinWidth>
                <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        image={kilua}
                        alt="green iguana"
                        />
                    </CardActionArea>
                </Card>
                </Grid>
                <Grid item xs="auto" zeroMinWidth>
                <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        image={kilua}
                        alt="green iguana"
                        />
                    </CardActionArea>
                </Card>
                </Grid>
                <Grid item xs="auto" zeroMinWidth>
                <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        image={kilua}
                        alt="green iguana"
                        />
                    </CardActionArea>
                </Card>
                </Grid>
            </Grid>
            </Container>
        </Box>
    </div>
  )
}

export default LatestWallpaper