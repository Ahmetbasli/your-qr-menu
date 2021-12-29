import React, { useEffect, useState } from "react";
import ProductFeed from "../../components/ProductFeed/ProductFeed";
import Header from "../../components/Header/Header";
import Title from "../../components/Title/Title";
import { useRouter } from "next/router";
import axios from "axios";
import { selectCategories } from "../../slices/categorySlice";
import { useSelector } from "react-redux";
const Products = () => {
  const categories = useSelector(selectCategories);
  const router = useRouter();
  const categoryId = router.query;
  const [category, setCategory] = useState({});
  useEffect(() => {
    if (Object.keys(categoryId).length === 0) return;
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
  }, [categoryId, categories]);

  return (
    <>
      <Header />
      <Title title={category.title} />
      <ProductFeed
        categoryIdOfProductFeed={category._id}
        products={category.products}
      />
    </>
  );
};

export default Products;
