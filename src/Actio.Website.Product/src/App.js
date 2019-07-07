import React, { Component } from "react";
import { Provider } from "react-redux";
import dataStore from "./store";
import { Selector } from "./selectors/Selector";
import { PRODUCTS, SUPPLIERS } from "./constants/dataTypes";

export default class App extends Component {

    render() {
        return  <Provider store={ dataStore }>
                    <Selector>
                        <data name="Products" datatype={ PRODUCTS } />
                        <data name="Suppliers" datatype ={ SUPPLIERS } />
                    </Selector>      
                </Provider>                            
    }
}
