import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Loader from "../Components/Loader";
import { useAxiosGet } from "../Hooks/HttpRequest";

function Product() {
  const { id } = useParams();
  const url = `https://63feb06f370fe830d9d744f9.mockapi.io/learning-react/api/product/${id}`;

  let product = useAxiosGet(url);

  let content = null;

  if (product.loading) {
    content = <Loader />;
  }

  if (product.error) {
    content = <p>There was an error, please refresh or try again later</p>;
  }

  if (product.data) {
    content = (
      <div>
        <h1 className="text-2xl font-bold mb-3">{product.data.name}</h1>
        <div>
          <img src={product.data.images[0].images} alt={product.data.name} />
        </div>
        <div className="font-bold text-xl mt-3">$ {product.data.price}</div>
        <div>{product.data.description}</div>
      </div>
    );
  }

  return <div>{content}</div>;
}

export default Product;
