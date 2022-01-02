import React, { useEffect } from "react";
//redux
import { addMultipleToCategories } from "../../slices/categorySlice";
import { useDispatch } from "react-redux";
// components
import CategoryFeed from "../../components/CategoryFeed/CategoryFeed";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Title from "../../components/Title/Title";
//styles
import styles from "../../styles/pages/Demo.module.css";

const Demo = ({ data: categories }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(addMultipleToCategories(categories));
  }, []);

  return (
    <main className={styles.main}>
      <Header />
      <Title />
      <CategoryFeed />
      <Footer />
    </main>
  );
};

export default Demo;

export async function getServerSideProps() {
  const res = await fetch(`https://menuhub-backend.herokuapp.com/category/all`);
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
