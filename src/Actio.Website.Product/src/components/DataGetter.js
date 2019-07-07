import React, { Component } from "react";
import { PRODUCTS, SUPPLIERS } from "../constants/dataTypes";

export const DataGetter = (dataType, WrappedComponent) => {

    return class extends Component {
        render() {
            return <WrappedComponent { ...this.props } />
        }

        componentDidMount() {
            this.props.getData(PRODUCTS);
            if (dataType === SUPPLIERS) {
                this.props.getData(SUPPLIERS);                
            }
        }
    }
}
