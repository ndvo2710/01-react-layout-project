import React, { Component } from "react";

export default class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div className="container">
                    <a className="navbar-brand" href="https://www.notion.so/ndvo/01-React-Foundation-Projects-fbfd5810eb194af9b0c0202d78a13878">
                        Start Bootstrap
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarResponsive"
                        aria-controls="navbarResponsive"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div
                        className="collapse navbar-collapse"
                        id="navbarResponsive"
                    >
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="https://www.notion.so/ndvo/01-React-Foundation-Projects-fbfd5810eb194af9b0c0202d78a13878">
                                    Home
                                    <span className="sr-only">(current)</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="https://www.notion.so/ndvo/01-React-Foundation-Projects-fbfd5810eb194af9b0c0202d78a13878">
                                    About
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="https://www.notion.so/ndvo/01-React-Foundation-Projects-fbfd5810eb194af9b0c0202d78a13878">
                                    Services
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="https://www.notion.so/ndvo/01-React-Foundation-Projects-fbfd5810eb194af9b0c0202d78a13878">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}
