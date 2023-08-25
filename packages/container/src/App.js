import React from "react";
import { BrowserRouter } from "react-router-dom";
import MarketingApp from "./components/marketingApp";
import Header from "./components/header";
// import { mount } from "marketing/MarketingApp";

// console.log(mount);
export default () => {
  return (
    <BrowserRouter>
      <>
        <Header />
        <MarketingApp />
      </>
    </BrowserRouter>
  );
};
