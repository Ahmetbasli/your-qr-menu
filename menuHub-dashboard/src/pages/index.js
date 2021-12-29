import Head from "next/head";
import styles from "../styles/pages/index.module.css";
export default function Home({ data: products }) {
  return (
    <>
      <Head>
        <title>Amazon 2.0</title>
      </Head>

      <main className={styles.main}>Home</main>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch(`https://fakestoreapi.com/products`);
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
