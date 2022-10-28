import React from "react";
import "./styles.css";

export default function PostSection(props) {
  return (
    <>
      <div className="lef-col">{props.children}</div>
    </>
  );
}
