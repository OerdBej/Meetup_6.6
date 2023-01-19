import React from "react";
import { Link } from "react-router-dom";

const product = [
  { id: "p1", title: "Book 1" },
  { id: "p2", title: "Book 2" },
  { id: "p3", title: "Book 3" },
  { id: "p4", title: "Book 4" },
];

const Products = () => {
  return (
    <>
      <h3>The Products Page 📦</h3>
      <ul>
        {product.map((prod) => (
          <li key={prod.id}>
            <Link to={`/products/${prod.id}`}>{prod.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Products;
