import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  function navigateHandler() {
    navigate("/products");
  }

  return (
    <>
      <h3>This is the Home Page</h3>
      <p>
        Go to <Link to='/products'>Products</Link>
      </p>
      <p>
        <button onClick={navigateHandler}>Navigate </button>
      </p>
    </>
  );
};

export default Home;
