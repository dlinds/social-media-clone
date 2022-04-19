import React from "react"
import SubmitTweet from "./SubmitTweet.js";
import Tweet from "./Tweet.js";
const tweets = [
  {
    name: "James Bond",
    headshotURL: "https://www.ortho-max.net/wp-content/uploads/2018/02/generic-headshot-300x300.png",
    content: "The world is probably ending someday in the next several trillion years"
  },
  {
    name: "Billy Bob",
    headshotURL: "https://www.ortho-max.net/wp-content/uploads/2018/02/generic-headshot-300x300.png",
    content: "If you like my channel you should like and subscribe maybe"
  },
  {
    name: "Jane the Jane-r",
    headshotURL: "https://www.ortho-max.net/wp-content/uploads/2018/02/generic-headshot-300x300.png",
    content: "It's not actually healthy for them though. They need horse food"
  }
]


function Tweets() {
  return (
    <React.Fragment>
      <div className="border border-dark p-3">
        <SubmitTweet />
        {tweets.map((tweet, index) =>
          <Tweet name={tweet.name}
            headshotURL={tweet.headshotURL}
            content={tweet.content}
            key={index} />
        )}
      </div>
    </React.Fragment>
  );
}

export default Tweets;
