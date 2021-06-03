// import React from "react";
// import { BrowserRouter as Router } from "react-router-dom";
// import ProductBallas from './Product_ballas';
// import {ProductProvider} from "../ProductPages/context";
function AppProductballas() {
    return(
    <ProductProvider>
        <Router>
            <React.Fragment>
            <ProductBallas/>
            </React.Fragment>
        </Router>    
    </ProductProvider>
    );
}
    
export {AppProductballas};