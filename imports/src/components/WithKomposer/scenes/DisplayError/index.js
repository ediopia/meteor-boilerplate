import React from "react";
import PropTypes from "prop-types";

const DisplayError = ({ error }) => {
  return <p style={{ color: "red" }}>{error.reason}</p>;
};

DisplayError.propTypes = {
  error: PropTypes.object.isRequired
};

export default DisplayError;
