import React from "react";
import "./styles.css";

function Post(props) {
  // const inner = document.getElementById("inner");

  // const showHeart = (e) => {
  //   const heart = document.createElement("i");
  //   heart.classList.add("fas");
  //   heart.classList.add("fa-heart");
  //   inner.appendChild(heart);

  //   setTimeout(() => {
  //     heart.remove();
  //   }, 750);
  // };

  // inner.addEventListener("dblclick", (e) => {
  //   showHeart(e);
  // });

  const showHeart = (e) => {
    const inner = document.getElementById("inner");
    const heart = document.createElement("i");
    heart.classList.add("fa-solid");
    heart.classList.add("fa-heart");
    inner.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 750);
  };

  const afterClick = (e) => {
    showHeart(e);
  };

  return (
    <>
      <div className="post">
        <div className="info">
          <div className="user">
            <div className="profile-pic">
              <img src={props.userimg} alt="Hii" />
            </div>
            <p className="username">{props.username}</p>
          </div>
          <img src="img/option.PNG" class="options" alt="" srcset="" />
        </div>
        <div id="inner" onDoubleClick={afterClick}>
          <img src={props.userpost} class="post-image" alt="" srcset="" />
        </div>
        <div class="post-content">
          <div class="reaction-wrapper">
            <img src="img/like.PNG" alt="" class="icon" />
            <img src="img/comment.PNG" alt="" class="icon" />
            <img src="img/send.PNG" alt="" class="icon" />
            <img src="img/save.PNG" alt="" class="save icon" />
          </div>
          <p class="likes">1M likes</p>
          <p class="des">
            <span>{props.username}</span>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque, id
            dolore! Itaque, est aliquam? Impedit sapiente expedita quasi aut ea.
          </p>
          <p class="post-time">2 sec ago</p>
        </div>
        <div class="comment-wrapper">
          <img src="img/smile.PNG" class="icon" alt="" srcset="" />
          <input type="text" class="comment-box" placeholder="Add a comment" />
          <button class="comment-btn">post</button>
        </div>
      </div>
    </>
  );
}

export default Post;
