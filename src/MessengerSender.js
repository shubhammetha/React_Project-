import React, { useState } from "react";
import "./MessengerSender.css";
import { Avatar } from "@material-ui/core";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import { useStateValue } from "./StateProvider";
import db from "./firebase";
import firebase from "./firebase";

function MessengerSender() {
  const [{ user }, dispatch] = useStateValue();
  const [input, setInput] = useState("");
  const [imageUrl, SetImageUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      profilePic: user.photoURL,
      username: user.displayName,
      image: imageUrl,
    });

    setInput("");
    SetImageUrl("");
  };
  return (
    <div className="messengerSender">
      <div className="messengerSender_top">
        <Avatar src={user.photoURL} />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="messengerSender_input"
            placeholder={`What's on your mind, ${user.displayName}?`}
          />
          <input
            value={imageUrl}
            onChange={(e) => SetImageUrl(e.target.value)}
            placeholder="image URL (optional)"
          />
          <button onClick={handleSubmit} type="submit">
            Hidden Submit
          </button>
        </form>
      </div>

      <div className="messengerSender_bottom">
        <div className="messengerSender_option">
          <VideocamIcon style={{ color: "red" }} />
          <h3>Live Video</h3>
        </div>

        <div className="messengerSender_option">
          <PhotoLibraryIcon style={{ color: "green" }} />
          <h3>Live Video</h3>
        </div>

        <div className="messengerSender_option">
          <InsertEmoticonIcon style={{ color: "orange" }} />
          <h3>Feeling Activity </h3>
        </div>
      </div>
    </div>
  );
}

export default MessengerSender;
