import * as React from "react";

// components
import CategoryFeed from "../components/CategoryFeed/CategoryFeed";
import Header from "../components/Header/Header";
import Title from "../components/Title/Title";
//styles
import styles from "../styles/pages/Demo.module.css";

const Demo = ({ data: categories = {} }) => {
  return (
    <main className={styles.main}>
      <Header />
      <Title />
      <CategoryFeed categories={categories} />
    </main>
  );
};

export default Demo;

export async function getServerSideProps() {
  const res = await fetch(
    `https://your-qr-menu-backend.herokuapp.com/category/all`
  );
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
