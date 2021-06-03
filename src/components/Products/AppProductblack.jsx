// import React from "react";
// import { BrowserRouter as Router } from "react-router-dom";
// import ProductBlack from './Product_black';
// import {ProductProvider} from "../ProductPages/context";
function AppProductblack() {
    return(
    <ProductProvider>
        <Router>
            <React.Fragment>
            <ProductBlack/>
            </React.Fragment>
        </Router>    
    </ProductProvider>
    );
}
    
export {AppProductblack};