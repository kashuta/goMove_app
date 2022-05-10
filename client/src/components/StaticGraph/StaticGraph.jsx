// import React from 'react';
// import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';

// function StaticGraph() {
//   return ( 
//     <Card sx={{ minWidth: 245 }}>
//       <CardMedia
//         component="img"
//         height="140"
//         image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5J3EahE8jJAwqtwbmlrPCK3QTSdHrWU4WTg&usqp=CAU"
//         alt="graph"
//       />
//   </Card>
//    );
// }

// export default StaticGraph;

import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardMedia } from '@mui/material';
import Chart4 from '../Chart4/Chart4';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const card = (
  <React.Fragment>
    <CardContent>
    <Chart4/>
      <Typography variant="h8" component="div">
        Name of Graph
      </Typography>
    </CardContent>
  </React.Fragment>
);

export default function OutlinedCard() {
  return (
    <Box >
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}