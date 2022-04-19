import React from "react";
import Header from "./Header/Header.js";
import About from "./ProfileInfo/About.js";
import TweetsContainer from "./Tweets/TweetsContainer.js";
import SuggestionsContainer from "./Suggestions/SuggestionsContainer.js";

function App() {
  return (
    <React.Fragment>
      <Header />
      <div className="px-2">
        <div className="row">
          <div class="col-lg-3">
            <About />
          </div>
          <div class="col-lg-6">
            <TweetsContainer />
          </div>
          <div class="col-lg-3">
            <SuggestionsContainer />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
