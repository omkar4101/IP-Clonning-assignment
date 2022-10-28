import React from "react";
import "./styles.css";

export default function RecommedSection(props) {
  return (
    <>
      <div className="rig-col">{props.children}</div>
    </>
  );
}
