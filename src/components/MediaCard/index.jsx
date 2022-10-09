import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function MediaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="../public/images/img2.png"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Card title
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Subtitle text
        </Typography>
        <Typography variant="body1">
        Greyhound divisively hello coldly wonderfully marginally far upon excluding. 
        </Typography>
      </CardContent>
    </Card>
  );
}
