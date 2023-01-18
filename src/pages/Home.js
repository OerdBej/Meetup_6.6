import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h3>This is the Home Page</h3>
      <p>
        Go to <Link to='/products'>Products</Link>
      </p>
    </>
  );
};

export default Home;
