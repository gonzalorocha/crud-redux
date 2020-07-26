import React from 'react';
import { Link } from 'react-router-dom'

const Header = () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-info justify-content-between">
            <div className="container">
                <h2>
                    <Link to={'/'} 
                        className="text-light"
                    >
                        Crud-Redux 
                    </Link>
                </h2>
            </div>
            <Link 
                to="/product/new"
                className="btn btn-danger new-post d-block d-md-inline-block"
            >
                Add product &#43;
            </Link>

        </nav>
    )
}
 
export default Header;