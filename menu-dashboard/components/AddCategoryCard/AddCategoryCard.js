import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
//import CardActionArea from '@mui/material/CardActionArea';
import ButtonBase from '@mui/material/ButtonBase';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
//styles
import styles from './AddCategoryCard.module.css'
//fetch
import axios from 'axios'
//modal
import AddCategoryModal from '../AddCategoryModal/AddCategoryModal'

const AddCategoryCard = () => {
    const [openModal, setOpenModal] = React.useState(false);

    const handleClickOpen = () => {
        setOpenModal(true);
      };
    

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
        <>
            <Card  className={styles.card}   sx={{ minWidth: 300, minHeight: 400}}  >
                
                 <Fab 
                    onClick={handleClickOpen} color="primary" size="large" variant="extended"  aria-label="add">
                    <AddIcon sx={{ mr: 1 }}  />
                    Yeni Kategori Ekle
                </Fab>
            </Card>
            <AddCategoryModal openModal={openModal} setOpenModal={setOpenModal}/>
        </>
    )
}

export default AddCategoryCard
