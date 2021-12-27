import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
//import CardActionArea from '@mui/material/CardActionArea';
import ButtonBase from '@mui/material/ButtonBase';
import Button from '@mui/material/Button';
//styles
import styles from './AddCategoryCard.module.css'
//fetch
import axios from 'axios'

const AddCategoryCard = () => {

    const addNewCategory = async ()=>{
            console.log('akfjsa')
        try{
            console.log('staet to post')
            await axios.post('https://your-qr-menu-backend.herokuapp.com/category/create' , {title: 'Kebablar'})

        }catch(err){
            console.log(err)
        }
    }


    return (
        <Card  className={styles.card}   sx={{ minWidth: 300, minHeight: 400}}  >
         <ButtonBase sx={{ width: '100%', height: '100%'} }
         
          onClick={()=>{addNewCategory()}}
        >
        <Button  variant="contained" color="success" size="large" sx={ { borderRadius: '10px' }} >
        +
        </Button>
      </ButtonBase>
      </Card>
    )
}

export default AddCategoryCard
