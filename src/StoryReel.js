import React from "react";
import "./StoryReel.css";
import Story from "./Story";

function StoryReel() {
  return (
    <div className="storyReel">
      <Story
        image="https://i.pinimg.com/originals/37/46/6f/37466f79b57a4edef21394078ce6aa58.jpg"
        profileSrc="https://previews.123rf.com/images/aurora72/aurora721606/aurora72160600006/59282564-avatar-girls-icon.jpg"
        title="Vaishali Tripathi"
      />
      <Story
        image="https://wallpaperset.com/w/full/f/d/2/69667.jpg"
        profileSrc="https://cdn0.iconfinder.com/data/icons/avatars-with-emotions-boys-avatars-with-different-/283/male-076-512.png"
        title="Shubham  Metha"
      />
      <Story
        image="https://www.magisto.com/blog/wp-content/uploads/2019/11/FeedVsStory.jpg"
        profileSrc="https://thumbs.dreamstime.com/z/girl-lovely-avatar-blonde-hair-cartoon-icon-stock-vector-93364827.jpg"
        title="Manogna Mantripadaga"
      />
      <Story
        image="https://images.ctfassets.net/00i767ygo3tc/4Zt0bRFHvQqFR30KK4K2tF/b33312a991ab4fde2762078fce303eb3/IG-feed-vs-IG-stories.png"
        profileSrc="https://www.pinclipart.com/picdir/middle/34-345142_suit-boys-avatar-icon-png-clipart.png"
        title="Akshay Relekar"
      />
    </div>
  );
}

export default StoryReel;
