import React, { Component } from "react";
import { Link } from "react-router-dom";
import { PRODUCTS } from "../constants/dataTypes";
import { EditorConnector } from "../connectors/EditorConnector";
import { TableConnector } from "../connectors/TableConnector";
import { ProductTable } from "../components/ProductTable";
import { ProductEditor } from "../components/ProductEditor";
import { SupplierTable } from "../components/SupplierTable";
import { SupplierEditor } from "../components/SupplierEditor";

export const RoutedDisplay = (dataType) => {

    const ConnectedEditor = EditorConnector(dataType, dataType === PRODUCTS 
        ? ProductEditor: SupplierEditor);
    const ConnectedTable = TableConnector(dataType, dataType === PRODUCTS 
        ? ProductTable : SupplierTable);
    
    return class extends Component {

        render() {
            const modeParam = this.props.match.params.mode;

            if (modeParam === "edit" || modeParam === "create") {
                return <ConnectedEditor key={ this.props.match.params.id || -1 } />
            } else {
                return <div className="m-2">
                    <ConnectedTable />
                    <div className="text-center">
                        <Link to={`/${dataType}/create`} 
                                className="btn btn-primary m-1">
                            Create
                        </Link>
                    </div>                        
                </div>
            }
        }
    }
}