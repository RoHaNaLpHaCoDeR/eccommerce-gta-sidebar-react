// import React from "react";
// import { BrowserRouter as Router } from "react-router-dom";
// import ProductRedmafia from './Product_redmafia';
// import {ProductProvider} from "../ProductPages/context";
function AppProductredmafia() {
    return(
    <ProductProvider>
        <Router>
            <React.Fragment>
            <ProductRedmafia/>
            </React.Fragment>
        </Router>    
    </ProductProvider>
    );
}
    
export {AppProductredmafia};