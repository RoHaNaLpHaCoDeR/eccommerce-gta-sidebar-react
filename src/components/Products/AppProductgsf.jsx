// import React from "react";
// import { BrowserRouter as Router } from "react-router-dom";
// import ProductGsf from './Product_gsf';
// import {ProductProvider} from "../ProductPages/context";
function AppProductgsf() {
    return(
    <ProductProvider>
        <Router>
            <React.Fragment>
            <ProductGsf/>
            </React.Fragment>
        </Router>    
    </ProductProvider>
    );
}
    
export {AppProductgsf};