/*
* Component: Meta
* Props:
*   metaName = value that should be placed in the `name` property/attribute
*   metaContent = value that should be placed in the `content` property/attribute
* Expected output: <meta name="" content="" />
*/
import React from "react";
import Helmet from "react-helmet";

export default function Meta(props) {
  // props.titleText = props.titleText || 'What a crazy-random-happenstance';
  return (
    <Helmet>
      <meta name={props.metaName} content={props.metaContent} />
    </Helmet>
  )
}