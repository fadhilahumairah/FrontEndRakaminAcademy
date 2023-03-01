import React, { useState, useEffect } from "react";
import axios from "axios";
import Loader from "../Components/Loader";
import HelloWorld from "../Components/HelloWorld";
import ProductCard from "../Components/ProductCard";

function Home() {
  const url = `https://63feb06f370fe830d9d744f9.mockapi.io/learning-react/api/product?page=1&limit=10`;
  const [product, setProduct] = useState({ loading: false, data: null });
  let content = null;

  useEffect(() => {
    setProduct({ loading: true, data: null, error: false });
    axios
      .get(url)
      .then((response) => {
        setProduct({ loading: false, data: response.data, error: false });
      })
      .catch(() => {
        setProduct({ loading: false, data: null, error: true });
      });
  }, [url]);

  if (product.loading) {
    content = <Loader />;
  }

  if (product.error) {
    content = <p>There was an error, please refresh or try again later</p>;
  }

  if (product.data) {
    content = product.data.map((data) => (
      <div key={data.id}>
        <ProductCard product={data} />
      </div>
    ));
  }

  return (
    <div>
      <h1 className="font-bold text-2xl">Best Sellers</h1>

      {content}
    </div>
  );
}

export default Home;
