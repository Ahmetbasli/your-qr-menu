import * as React from 'react';

// components
import CategoryCard from './components/CategoryCard/CategoryCard'

const Demo = () => {
    return (
        < >
            <CategoryCard/> 
        </>
    )
}

export default Demo

export async function getStaticProps() {
  const res = await fetch(`https://your-qr-menu-backend.herokuapp.com/category/all`);
  const data = await res.json();
  console.log(data)
  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data }, // will be passed to the page component as props
  };
}