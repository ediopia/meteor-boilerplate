import * as React from "react";
import Header from "../../components/Header";

export default class Home extends React.Component {
  render() {
    return (
      <>
        <Header />
        <div className="section">
          <div className="container">
            <h1 className="title">
              Meteor + React + Redux + React router 4 + Bulma + Some utils
            </h1>
          </div>
        </div>
      </>
    );
  }
}
