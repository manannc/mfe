import React from "react";
import { BrowserRouter } from "react-router-dom";
import MarketingApp from "./components/marketingApp";
import Header from "./components/header";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";
// import { mount } from "marketing/MarketingApp";

const generateClassName = createGenerateClassName({
  productionPrefix: "co",
});
// console.log(mount);
export default () => {
  return (
    <StylesProvider generateClassName={generateClassName}>
      <BrowserRouter>
        <>
          <h1>Hi There!</h1>
          <Header />
          <MarketingApp />
        </>
      </BrowserRouter>
    </StylesProvider>
  );
};
