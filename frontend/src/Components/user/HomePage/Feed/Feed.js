import React, { useState } from "react";
import "./Feed.css";
import CreateIcon from "@material-ui/icons/Create";
import InputOptions from "./InputOptions/InputOptions";
import ImageIcon from "@material-ui/icons/Image";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import EventNoteIcon from "@material-ui/icons/EventNote";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Post from "./Post/Post";
import StoryReel from "./StoryReel/StoryReel";

function Feed() {
  const [posts, setPosts] = useState([]);
  const sendPost = (e) => {
    e.preventDefault();
  };
  return (
    <div className="w-100">
      {/* story */}
      <StoryReel />
      <div className="feed_inputContainer my-4">
        <div className="feed_input">
          <CreateIcon />
          <form>
            <input type="text" />
            <button onClick={sendPost} type="submit">
              Send
            </button>
          </form>
        </div>
        <div className="feed_inputOptions">
          <InputOptions Icon={ImageIcon} title="Photo" color="#70b5f9" />
          <InputOptions Icon={EventNoteIcon} title="Date" color="#c0cbcd" />
          <InputOptions
            Icon={LocationOnIcon}
            title="Location"
            color="#7FC15E"
          />
        </div>
        {/* //every time new post render screen */}
        {posts.map((post) => {
          <Post />;
        })}
      </div>
      <Post
        name="Hrishi Vijayan"
        description="This is a test"
        message="Wow I love Kochi"
      />
      <Post
        name="Shameem Lukman"
        description="This is a test"
        message="Next stop in banglore"
      />
      <Post name="Aju" description="This is a test" message="Explore in Goa" />
      <Post
        name="Binil Eldho"
        description="This is a test"
        message="Off to Manli.. Anybody there?"
      />
      <Post
        name="Shafeek waafi"
        description="This is a test"
        message="Chilling at kodai"
      />
    </div>
  );
}

export default Feed;
