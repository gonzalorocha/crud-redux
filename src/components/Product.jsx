import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { deleteProductAction } from './../actions/productAction';
import Swal from 'sweetalert2';

const configAlert = {
    title: "Are you sure?",
    text: "You won't be able to revert this",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Delete",
    cancelButtonText: "Cancel"
};

const Product = ({ product }) => {

    const dispatch = useDispatch();




    const handleOnDelete = (id) => {

        Swal.fire(configAlert).then((result) => {
            if (result.value) {
                dispatch(deleteProductAction(id));
            }
        });

        
    }

    return (
        <tr>
            <td>{product.name}</td>
            <td><span className="font-weight-bold">${product.price}</span></td>
            <td className="actions">
                <Link to={`/products/edit/${product.id}`} className="btn btn-primary mr-2">
                    Edit
                </Link>
                <button 
                    type="button"
                    className="btn btn-danger"
                    onClick={() => handleOnDelete(product.id)}
                >
                    Delete
                </button>
            </td>
        </tr>
    );
}
 
export default Product;