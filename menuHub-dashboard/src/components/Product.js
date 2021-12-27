import Image from "next/image";
import { StarIcon } from "@heroicons/react/solid";
import { useState } from "react";
import Currency from "react-currency-formatter";
import styles from "../styles/components/Product.module.css";
import { useDispatch } from "react-redux";
import { addToBasket } from "../slices/basketSlice";

const Max_Rating = 5;
const Min_Rating = 1;

const Product = ({ id, title, price, category, description, image }) => {
  const randomRate = Math.floor(Math.random() * (Max_Rating - Min_Rating) + 1);
  const [rating] = useState(randomRate);
  const [hasPrime] = useState(Math.random() < 0.5);

  const dispatch = useDispatch();

  const attachToBasket = () => {
    const product = {
      id,
      title,
      price,
      category,
      description,
      image,
      hasPrime,
      rating,
    };

    // sending the product as an action to the REDUX store's basket slice
    dispatch(addToBasket(product));
  };

  return (
    <div className={styles.main}>
      <p className="absolute top-2 right-2  text-xs italic text-gray-400">
        {category}
      </p>
      <Image
        objectFit="contain"
        src={image}
        alt="img"
        width={200}
        height={200}
      />
      <h4>{title}</h4>
      <div className="flex">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <StarIcon key={i} className="h-4 text-yellow-400" />
          ))}
      </div>
      <p className={styles.description}>{description}</p>
      <Currency quantity={price} currency="USD" />

      {!hasPrime && (
        <div className="flex items-center space-x-3">
          <img
            src="/images/Prime-tag.png"
            width={60}
            height={60}
            alt="prime-tag"
          />
          <p className={styles.deliveryTime}>Free Next-day Delivery</p>
        </div>
      )}
      <button onClick={() => attachToBasket()} className={styles.button}>
        Add to Basket
      </button>
    </div>
  );
};

export default Product;
