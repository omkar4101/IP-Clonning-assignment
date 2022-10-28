import React from "react";
import ReactDom from "react-dom";
import "./styles.css";
import Nav from "./Nav";
import Layout from "./Layout";
import PostSection from "./PostSection";
import Post from "./Post";
import User from "./UserDetails";
import StatusSection from "./StatusSection";
import Status from "./Status";
import RecommedSection from "./RecommedSection";

ReactDom.render(
  <>
    <Nav />
    <Layout>
      <PostSection>
        <StatusSection>
        {User.map((ele) => (
          <Status
            userimg={ele.userimg}
            username={ele.username}
          />
        ))}
        </StatusSection>
        {User.map((ele) => (
          <Post
            userimg={ele.userimg}
            username={ele.username}
            userpost={ele.userpost}
          />
        ))}
      </PostSection>
      <RecommedSection></RecommedSection>
    </Layout>
  </>,
  document.getElementById("root")
);
