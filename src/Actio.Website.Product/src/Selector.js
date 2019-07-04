import React, { Component } from "react";

export class Selector extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            selection: React.Children.toArray(props.children)[0].props.name
        }
    }

    setSelection =(ev) => {
        ev.persist();
        this.setState({ selection: ev.target.name });    
    }

    render() {
        return <div className="container-fluid">
                <div className="row">
                    <div className="col-2">
                        { React.Children.map(this.props.children, c=> 
                            <button name = { c.props.name }
                                onClick = { this.setSelection }
                                className = { `btn btn-block m-2
                                    ${this.state.selection === c.props.name} ` }>
                                { c.props.name }
                            </button>)}
                    </div>
                </div>
            </div>
    }
}