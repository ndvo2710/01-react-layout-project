import React, { Component } from "react";

export default class Banner extends Component {
    render() {
        return (
            <header className="jumbotron my-4">
                {/* Jumbotron Header */}
                <h1 className="display-3">A Warm Welcome!</h1>
                <p className="lead">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Ipsa, ipsam, eligendi, in quo sunt possimus non incidunt
                    odit vero aliquid similique quaerat nam nobis illo
                    aspernatur vitae fugiat numquam repellat.
                </p>
                <a
                    href="https://www.notion.so/ndvo/01-React-Foundation-Projects-fbfd5810eb194af9b0c0202d78a13878"
                    className="btn btn-primary btn-lg"
                >
                    Call to action!
                </a>
            </header>
        );
    }
}
