import React from "react";
import "./styles.css";

export default function Layout(props) {
  return (
    <>
      <section className="main">
        <div className="wrapper">{props.children}</div>
      </section>
    </>
  );
}
