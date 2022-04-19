import React from "react";
import InfoBlock from "./InfoBlock.js";
const user = {
  name: "Daniel Lindsey",
  tweetCount: 40,
  followers: 134,
  following: 339,
  headshotURL: "https://www.ortho-max.net/wp-content/uploads/2018/02/generic-headshot-300x300.png",
  about: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness."
}

function About() {
  return (
    <React.Fragment>
      <InfoBlock name={user.name}
        tweetCount={user.tweetCount}
        followers={user.followers}
        following={user.following}
        headshotURL={user.headshotURL}
        about={user.about}
      />
    </React.Fragment>
  )
}

export default About;
