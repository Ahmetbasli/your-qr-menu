import React, { useEffect } from "react";
import ProductFeed from "../../components/ProductFeed/ProductFeed";
import Header from "../../components/Header/Header";
import { useRouter } from "next/router";
import axios from "axios";
const Products = () => {
  const router = useRouter();
  console.log(router.query);
  const categoryId = router.query;
  console.log(categoryId.id);
  useEffect(() => {
    const getProductOfACategoryById = async () => {
      const res = await axios.get(
        `https://menuhub-backend.herokuapp.com/category/find/${categoryId.id}`
      );
      console.log(res.data);
    };
    getProductOfACategoryById();
  }, []);

  return (
    <>
      <Header />
      <ProductFeed />
    </>
  );
};

export default Products;
