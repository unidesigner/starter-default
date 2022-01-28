import React from "react"

import { graphql } from 'gatsby'

//import ReactDOM from "react-dom";
import FlexLayout from "flexlayout-react";


const Index = (props) => {
    var json = {
        global: {},
        borders: [],
        layout: {
            "type": "row",
            "weight": 100,
            "children": [
                {
                    "type": "tabset",
                    "weight": 50,
                    "selected": 0,
                    "children": [
                        {
                            "type": "tab",
                            "name": "FX",
                            "component": "grid",
                        }
                    ]
                },
                {
                    "type": "tabset",
                    "weight": 50,
                    "selected": 0,
                    "children": [
                        {
                            "type": "tab",
                            "name": "FI",
                            "component": "grid",
                        }
                    ]
                }
            ]
        }
    };

    this.state = { model: FlexLayout.Model.fromJson(json) };

    this.factory = function (node) {
        var component = node.getComponent();
        if (component === "button") {
            return <button>{node.getName()}</button>;
        }
    };

    return (
        <FlexLayout.Layout model={this.state.model} factory={this.factory.bind(this)} />
    )
}

export default Index
