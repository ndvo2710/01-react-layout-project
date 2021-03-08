import React, { Component } from "react";

export default class Card extends Component {
    render() {
        return (
            <div className="col">
                <div className="card text-center">
                    <a href="#">
                        <img
                            className="card-img-top"
                            src="http://placehold.it/500x325"
                            alt="Card image cap"
                        />
                        <div className="card-body">
                            <h5 className="card-title">
                                Card title
                            </h5>
                            <p className="card-text">
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Ab accusantium ad alias,
                                aliquid amet aspernatur atque culpa cum debitis
                                dicta doloremque, dolorum ea eos et excepturi
                                explicabo facilis harum illo impedit incidunt
                                laborum laudantium...
                            </p>
                            <p className="card-text">
                                <a
                                    className="btn btn-primary"
                                    href="#"
                                    role="button"
                                >
                                    Find Out More!
                                </a>
                            </p>
                        </div>
                    </a>
                </div>
            </div>
        );
    }
}
