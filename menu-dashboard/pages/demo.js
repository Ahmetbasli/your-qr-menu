import * as React from 'react';

// components
import CategoryFeed from './components/CategoryFeed/CategoryFeed'
import Header from './components/Header/Header'
import Title from './components/Title/Title'
//styles
import styles from '../styles/Demo.module.css'

const Demo = ({ data: categories=null }) => {
    return (
        <main className={styles.main}>
          <Header/>
          <Title/>
          <CategoryFeed categories={categories}/> 
        </main>
    )
}



export async function getStaticProps() {
  const res = await fetch(`https://your-qr-menu-backend.herokuapp.com/category/all`);
  const data = await res.json();
  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data }, // will be passed to the page component as props
  };
}