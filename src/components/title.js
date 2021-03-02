/*
* Component: Title
* props:
* titleText = value that should be placed in the `<title>` element
*
* Expected output: <title>value passed from titleText prop</title>
*/
import React from "react";
import Helmet from "react-helmet";

export default function Title(props) {
  // props.titleText = props.titleText || 'What a crazy-random-happenstance';
  return (
    <Helmet>
      <title>{props.titleText} | Philificent.com</title>
    </Helmet>
  )
}