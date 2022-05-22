import { Avatar } from "@nextui-org/react";
import React from "react";
import "./Story.css";

function Story({ image, profilePic, title }) {
  return (
    <div className="mb-4 ms-2 story">
      <div
        style={{ backgroundImage: `url(${image})` }}
        className="all-stories "
      >
        <Avatar
          size="lg"
          className="story_avatar"
          src={profilePic}
          color="gradient"
          bordered
        />
        {/* <Avatar className="story_avatar" src={profilePic} /> */}
        <h4 className="story-user-name">{title}</h4>
      </div>
    </div>
  );
}

export default Story;
