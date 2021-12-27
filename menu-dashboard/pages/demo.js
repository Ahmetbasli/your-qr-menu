import * as React from 'react';

// components
import CategoryFeed from './components/CategoryFeed/CategoryFeed'

const Demo = ({ data: categories }) => {
    console.log(categories);
    return (
        < >
            <CategoryFeed categories={categories}/> 
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