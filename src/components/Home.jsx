import React, { Component } from 'react'
import Card from './Card';
import Header from './Header'

const cardContents = [
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.',
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo magni sapiente, tempore debitis beatae culpa natus architecto.',
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.',
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo magni sapiente, tempore debitis beatae culpa natus architecto.'
]

export default class Home extends Component {
    render() {
        let style = {
            padding: 0
        };

        return (
            <div className="container">
                <div className="row">
                    <div style={style} className="col-12">
                        <Header />
                    </div>
                </div>
                <div className="row">
                    <div style={style} className="col-12">
                        <h1>
                            A Warm Welcome !
                        </h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus at beatae laboriosam maiores nisi alias unde perferendis ut eaque eos?
                        </p>
                        <a className="btn btn-primary btn-lg" href="#" role="button" >
                            Call to action!
                        </a>

                    </div>
                </div>
                <div className="row">

                    {
                        cardContents.map(cardContent => {
                            return <Card />
                        })
                    }

                </div>
            </div>
        )
    }
}
