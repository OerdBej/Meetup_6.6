import React from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const params = useParams();
  return (
    <>
      <h3>Product Details</h3>
      <p>{params.productId}</p>
    </>
  );
};

export default ProductDetails;
