import * as React from 'react';
import { Grid } from '@mui/material';
// components
import CategoryCard from '../CategoryCard/CategoryCard'

const CategoryFeed = ({ categories }) => {
    console.log(typeof categories);
    return (
        <Grid  
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center" 
        >
        {categories.map((category)=>{
                console.log( category._id)
                return  <CategoryCard key={category._id} title={category.title} image={category?.img} />
        })}
        </Grid>
    )
}

export default CategoryFeed
