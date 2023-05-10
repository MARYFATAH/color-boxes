import React, { Component } from "react";
import Box from "./Box.js"

class BoxContainer extends Component{
    static defaultProps = {
        numBox: 16
    };

    render() {
        const boxes = Array.from({ length: this.props.numBox }).map(
            () => (<Box />
            ));
        return <div className="BoxContainer">{boxes}</div>
}
    }
    
export default BoxContainer;