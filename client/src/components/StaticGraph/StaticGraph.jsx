import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardMedia } from '@mui/material';
import { Grid } from "@mui/material";
import Chart4 from '../Chart4/Chart4';
import Chart5 from '../Chart5/Chart5';
import Chart6 from '../Chart6/Chart6';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const card1 = (
  <React.Fragment>
    <CardContent >  
      <Chart4/>
      <Typography variant="h9" component="div">
        Name of Graph
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit libero nostrum optio, praesentium maiores laborum iure incidunt iste, fugit rem quisquam reprehenderit odio, ad ratione excepturi repellat sequi vero provident?
      </Typography>
    </CardContent>
  </React.Fragment>
);

const card2 = (
  <React.Fragment>
    <CardContent >
    
    <Chart5/>
    
      <Typography variant="h9" component="div">
        Name of Graph
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit libero nostrum optio, praesentium maiores laborum iure incidunt iste, fugit rem quisquam reprehenderit odio, ad ratione excepturi repellat sequi vero provident?
      </Typography>
    </CardContent>
  </React.Fragment>
);

const card3 = (
  <React.Fragment>
    <CardContent >
    
    <Chart6/>
    
      <Typography variant="h9" component="div">
        Name of Graph
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit libero nostrum optio, praesentium maiores laborum iure incidunt iste, fugit rem quisquam reprehenderit odio, ad ratione excepturi repellat sequi vero provident?
      </Typography>
    </CardContent>
  </React.Fragment>
);

export default function OutlinedCard() {
  return (
    <Grid container>
      <Grid item xs={12} sm={6} md={4}>
        <div style={{marginRight: '10px'}}>
          <Card variant="outlined">{card1}</Card>
        </div>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <div style={{marginRight: '10px'}}>
          <Card variant="outlined">{card2}</Card>
        </div>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <div style={{marginRight: '10px'}}>
          <Card variant="outlined">{card3}</Card>
        </div>
      </Grid>
    </Grid>
  );
}
