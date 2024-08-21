import React from "react";
import { Helmet } from "react-helmet-async";

const Title = ({
  title = "Window Chat",
  description = "this is the Chat App called Window-Chat",
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description}></meta>
    </Helmet>
  );
};

export default Title;
