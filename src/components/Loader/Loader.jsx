import React from "react";
import { Loading, Spinner } from "./Loader.styled";

const Loader = () => {
  return (
    <Loading>
      <Spinner></Spinner>
    </Loading>
  );
};

export default Loader;
