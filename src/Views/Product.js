import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function Product() {
  const { id } = useParams();
  const url = `https://63feb06f370fe830d9d744f9.mockapi.io/learning-react/api/product/${id}`;
  const [product, setProduct] = useState(null);

  let content = null;

  useEffect(() => {
    axios.get(url).then((response) => setProduct(response.data));
  }, [url]);

  if (product) {
    content = (
      <div>
        <h1 className="text-2xl font-bold mb-3">{product.name}</h1>
        <div>
          <img src={product.images[0].images} alt={product.name} />
        </div>
        <div className="font-bold text-xl mt-3">$ {product.price}</div>
        <div>{product.description}</div>
      </div>
    );
  }

  return <div>{content}</div>;
}

export default Product;
