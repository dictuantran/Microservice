import React, { Component } from "react";
import { Provider } from "react-redux";
import dataStore from "./store";
import { ProductDisplay } from "./ProductDisplay";
import { Selector } from "./Selector";
import { SupplierDisplay } from "./SupplierDisplay";

export default class App extends Component {

    render() {
        return (
            <Provider store={dataStore}>
                <Selector>
                    <ProductDisplay name="Products" />
                    <SupplierDisplay name="Suppliers" />
                </Selector>                
            </Provider>
        )
    }
}