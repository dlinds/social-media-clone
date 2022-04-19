import React from "react";

function SubmitTweet() {
  return (
    <React.Fragment>
      <div class="row bg-light py-3">
        <div class="col-md-9">
          <input type="text" className="form-control" placeholder="What's happening?" />
        </div>
        <div class="col-md-3">
          <button type="button" className="btn btn-dark">Submit</button>
        </div>
      </div>
    </React.Fragment>
  )
}

export default SubmitTweet;
