import React from "react";
import MainNavigation from "../components/MainNavigation";

const ErrorPage = () => {
  return (
    <>
      <MainNavigation />
      <main>
        <h3>An Error has occurred</h3>
        <p>Could not find this page</p>
      </main>
    </>
  );
};

export default ErrorPage;
