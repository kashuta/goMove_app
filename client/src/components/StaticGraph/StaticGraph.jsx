import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {Grid} from '@mui/material';
import Chart4 from '../Chart4/Chart4';
import Chart5 from '../Chart5/Chart5';
import Chart6 from '../Chart6/Chart6';

const bull = (
    <Box
        component="span"
        sx={{display: 'inline-block', mx: '2px', transform: 'scale(0.8)'}}
    >
        •
    </Box>
);

const card1 = (
    <React.Fragment>
        <CardContent>
            <Chart4/>
            <Typography variant="h9" component="div">
                The chart shows the average cost of renting a studio and two-bedroom apartment in the selected
                destinations.
            </Typography>
        </CardContent>
    </React.Fragment>
);

const card2 = (
    <React.Fragment>
        <CardContent>

            <Chart5/>

            <Typography variant="h9" component="div">
                The graph shows the average cost of real estate per square meter in the city center and outside the city
                center.
            </Typography>
        </CardContent>
    </React.Fragment>
);

const card3 = (
    <React.Fragment>
        <CardContent>

            <Chart6/>

            <Typography variant="h9" component="div">
                The graph shows the average salary in the selected cities. All occupations and the entire salary range
                are taken into account.
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
