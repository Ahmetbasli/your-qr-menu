import * as React from 'react';
import { Grid } from '@mui/material';
//styles
import styles from './CategoryFeed.module.css'
// components
import CategoryCard from '../CategoryCard/CategoryCard'
import AddCategoryCard from '../AddCategoryCard/AddCategoryCard'
console.log('typeof categories');

const CategoryFeed = ({ categories }) => {
 
    return (
        <div   className={styles.productFeed}>
            {/* <Grid 
            container spacing={{xs:4}}  
            >
                <Grid
                    item xs={12}
                    md={4} 
                    container 
                    justifyContent="center"
                    >
                    <AddCategoryCard />
                </Grid>
                {categories && categories.map((category)=>{
                    
                    return  (
                        <Grid
                        item xs={12}
                        md={4} 
                        container 
                        justifyContent="center"
                        >
                            <CategoryCard item key={category._id} title={category.title} image={category?.img} />
                        </Grid>
                    )
                })}
            </Grid> */}
        </div>
    )
}

export default CategoryFeed
