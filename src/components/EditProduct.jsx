import React from "react";

const EditProduct = () => {
    return (
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">
                            Edit product
                        </h2>
                        <form>
                            <div className="form-group">
                            <label>Product</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="name product"
                                name="name"
                            />
                            <label>Price</label>
                            <input
                                type="number"
                                className="form-control"
                                placeholder="Price"
                                name="price"
                            />
                            <button
                                type="submit"
                                className="btn btn-primary font-weight-bold text-uppercase d-block w-100 mt-4"
                            >
                                Save
                            </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
  
};

export default EditProduct;
