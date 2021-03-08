import React, { Component } from "react";
import Banner from "./Banner";
import Items from "./Items";

export default class Body extends Component {
    render() {
        return (
            <div className="container">
                <Banner />
                <Items />
              {/* /.row */}
            </div>
        );
    }
}
