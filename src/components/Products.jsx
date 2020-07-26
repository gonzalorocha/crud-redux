import React, { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getProductsAction } from './../actions/productAction';
import Product from "./Product";


const Products = () => {

    const dispatch = useDispatch();

    const { products, error, loading } = useSelector((state) => state.product);

    useEffect(() => {
        getProducts();
    }, [])

    const getProducts = () => {
        dispatch(getProductsAction());
    }

    return (
        <Fragment>
            <h2 className="text-center my-5"> Products list</h2>
            {
                error && <p className="font-weight-bold alert alert-danger text-center mt-4"> There was an error</p>
            }
            {
                loading && (
                    <p className="text-center">Loading...</p>
                )
            }
            <table className="table table-striped">
                <thead className="bg-primary table-dark">
                    <tr>
                        <th scope="col">Products</th>
                        <th scope="col">Price</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    { products.length === 0 ? 'No data' : (
                        products.map(p => <Product key={p.id} product={p} />)
                    )}
                    
                </tbody>
            </table>
        </Fragment>
    );
}
 
export default Products;