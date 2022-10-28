import React from "react";
import "./styles.css";

function Status(props) {
  return (
    <>
        <div class="status-card">
          <div class="profile-pic">
            <img src={props.userimg} alt="Hii" />
          </div>
          <p class="username">{props.username}</p>
        </div>
    </>
  );
}

export default Status;
