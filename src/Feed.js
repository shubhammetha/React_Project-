import React from "react";
import "./Feed.css";
import StoryReel from "./StoryReel";
import MessengerSender from "./MessengerSender";
import Post from "./Post";

function Feed() {
  return (
    <div className="feed">
      <StoryReel />
      <MessengerSender />
      <Post
        profilePic="https://celebmafia.com/wp-content/uploads/2019/02/barbara-palvin-leaves-the-royal-monceau-hotel-in-paris-02-06-2019-5.jpg"
        message="Cute or Not?"
        timestamp="04081994"
        username="Barbara Palvin"
        image="https://cdnph.upi.com/svc/sv/upi/2701552583280/2019/1/3ac0e0b6e0b69b3ff8d06af8d5033b1f/Barbara-Palvin-named-new-Victorias-Secret-Angel.jpg"
      />
      <Post />
      <Post />
    </div>
  );
}

export default Feed;
