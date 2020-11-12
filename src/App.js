import React, { Component } from "react";
import "./App.css";
import ImgList from "./component/ImgList";

const APP_ID = "dFnMYi-6HKNMgHHPPJMCXj95uU2MqOA1jhXAwIFn3FM";
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      imgs: [],
    };
  }
  componentDidMount() {
    fetch(`https://api.unsplash.com/photos/?per_page=1000&client_id=${APP_ID}`)
      .then((res) => res.json())
      .then((data) => {
        this.setState({ imgs: data });
      })
      .catch((err) => {
        console.log("Couldn't fetch Image!", err);
      });
  }
  render() {
    return (
      <div>
        <div className="main-content">
          <ImgList data={this.state.imgs} />
        </div>
      </div>
    );
  }
}
