import React from "react";

function Tweet(props) {
  return (
    <React.Fragment>
      <div class="row">
        <div class="col-sm-2">
          <img src={props.headshotURL} alt="{props.name} headshot" className="w-100" />
        </div>
        <div class="col-sm-10">
          <p>
            <strong>{props.name}</strong>
            <br />
            {props.content}
          </p>
        </div>
      </div>
      <hr />
    </React.Fragment>
  )
}

export default Tweet;
