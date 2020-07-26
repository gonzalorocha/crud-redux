import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 

import Header from './components/Header';
import Products from "./components/Products";
import NewProduct from "./components/NewProduct";
import EditProduct from "./components/EditProduct";

//redux
import {Provider} from 'react-redux';
import store from './store';

const App = () => {
    return (
        <Router>
        <Provider 
            store={store}
        >
            <Header />
            <div className="container mt-5">
                <Switch>
                    <Route exact path="/" component={Products}></Route>
                    <Route exact path="/product/new" component={NewProduct}></Route>
                    <Route exact path="/product/edit/:id" component={EditProduct}></Route>
                </Switch>
            </div>
        </Provider>
        </Router>
    );
}

export default App;
