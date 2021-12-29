import React, { useEffect, useState } from "react";
import ProductFeed from "../../components/ProductFeed/ProductFeed";
import Header from "../../components/Header/Header";
import Title from "../../components/Title/Title";
import { useRouter } from "next/router";
import axios from "axios";

const Products = () => {
  const router = useRouter();
  console.log(router.query);
  const categoryId = router.query;
  console.log(categoryId.id);
  const [category, setCategory] = useState({});

  useEffect(() => {
    try {
      (async () => {
        const res = await axios.get(
          `https://menuhub-backend.herokuapp.com/category/find/${categoryId.id}`
        );

        setCategory(res.data);
      })();
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <>
      <Header />
      <Title title={category.title} />
      <ProductFeed />
    </>
  );
};

export default Products;
