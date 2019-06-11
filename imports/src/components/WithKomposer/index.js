import { compose } from "react-komposer";
import React from "react";
import getTrackerLoader from "./services/get-tracker-loader";
import DisplayError from "./scenes/DisplayError";
import DisplayLoading from "./scenes/DisplayLoading";

const defaultOptions = {
  errorHandler: DisplayError,
  loadingHandler: DisplayLoading
};

const withKomposer = (
  composer,
  Component,
  isSubscribe = false,
  options = defaultOptions
) => {
  return compose(
    isSubscribe ? getTrackerLoader(composer) : composer,
    options
  )(Component);
};
export default withKomposer;
