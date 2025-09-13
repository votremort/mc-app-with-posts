import React from "react";
import * as SC from "./styles"
import loaderGif from "./Loader.gif"

export const Loader = () =>
  <>
      <SC.Loader src = { loaderGif }
    alt="loading"
  />
  </>