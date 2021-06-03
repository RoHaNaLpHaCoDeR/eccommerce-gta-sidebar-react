// import React from "react";
// import { BrowserRouter as Router } from "react-router-dom";
// import ProductMc from './Product_mc';
// import {ProductProvider} from "../ProductPages/context";
function AppProductmc() {
    return(
    <ProductProvider>
        <Router>
            <React.Fragment>
            <ProductMc/>
            </React.Fragment>
        </Router>    
    </ProductProvider>
    );
}
    
export {AppProductmc};