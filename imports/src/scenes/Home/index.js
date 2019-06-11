import React, { Component } from "react";
import { toast } from "react-toastify";

class Home extends Component {
  notify = () => toast("Wow so easy !");
  render() {
    return (
      <div>
        <h1 className="title">
          Meteor + React + Redux + React router 4 + Bulma + Some utils
        </h1>
        <button onClick={this.notify}>Notify !</button>
      </div>
    );
  }
}

export default Home;
