import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ProductVagos from './Product_vagos';
import {ProductProvider} from "../ProductPages/context";
function AppProductvagos() {
    return(
    <ProductProvider>
        <Router>
            <React.Fragment>
            <ProductVagos/>
            </React.Fragment>
        </Router>    
    </ProductProvider>
    );
}
    
export {AppProductvagos};