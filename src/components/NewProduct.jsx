import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';

import { newProductAction } from './../actions/productAction';

const NewProduct = ({history}) => {

    const [product, setProduct] = useState({
        name: '',
        price: 0
    });

    //Use dispatch, add a new function 
    const dispatch = useDispatch();
    
    //get the state from the store
    const { loading, error } = useSelector( state => state.product);

    //call an action of productAction 
    const addProduct = (product) => dispatch(newProductAction(product));

    const handleOnSubmit = (e) => {
        e.preventDefault();

        const {name, price} = product;

        if (name.trim() === '' || price <= 0) {
            return;
        }

        addProduct(product);

        history.push('/')
    }

    const handleInputChange = (e) => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">
                            Add new product
                        </h2>
                        <form
                            onSubmit={handleOnSubmit}
                        >
                            <div className="form-group">
                            <label>Product</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="name product"
                                name="name"
                                value={product.name}
                                onChange={handleInputChange}
                            />
                            <label>Price</label>
                            <input
                                type="number"
                                className="form-control"
                                placeholder="Price"
                                name="price"
                                value={product.price}
                                onChange={handleInputChange}

                            />
                            <button
                                type="submit"
                                className="btn btn-primary font-weight-bold text-uppercase d-block w-100 mt-4"
                            >
                                Add
                            </button>
                            </div>
                        </form>
                        {
                            loading && (
                                <p>Loading...</p>
                            )
                        }
                        {
                            error && (
                                <p className="alert alert-danger p2 mt4 text-center">There was an error</p>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewProduct;
