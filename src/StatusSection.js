import React from "react";
import "./styles.css";

export default function StatusSection(props) {
  return (
    <>
      <div className="status-wrapper">{props.children}</div>
    </>
  );
}
