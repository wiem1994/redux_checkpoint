import React, { Component } from "react";

import myImage from "./code.png";

export default class Information extends Component {
    state = {
        fullName: "Wiem Ben Ameur",
        bio: "This is me",
        profession: "xxxxx",
        date: new Date(),
    };
    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState({ date: new Date() });
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }
    render() {
        return (
            <div>
                <h1>Full Name : {this.state.fullName}</h1>
                <h2>Bio : {this.state.bio}</h2>
                <h2>Profession : {this.state.profession}</h2>
                <img src={myImage} alt="Oups" />
                <br />
                <h2>{this.state.date.toLocaleTimeString()}</h2>
            </div>
        );
    }
}
