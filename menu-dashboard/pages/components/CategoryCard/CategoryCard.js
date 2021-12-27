import React from 'react'
// styles
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

console.log('ahmet')
function CategoryCard({title}) {
    return (
        <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image='/'
            alt="green iguana"
          />
          <CardContent >
            <Typography gutterBottom variant="h5" align="center"  component="div">
            {title}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    )
}

export default CategoryCard
