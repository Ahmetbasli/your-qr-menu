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
        <Card  sx={{ maxWidth: 300 }}  >
          <CardActionArea>
            <CardMedia
              component="img"
              height="300"
              image='https://clients.ogoodigital.com/frontend-landing/assets/images/hero/hero.png'
              alt="green iguana"
            />
            <CardContent >
              <Typography gutterBottom variant="h4" align="center"  component="div">
              {title}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
    )
}

export default CategoryCard
