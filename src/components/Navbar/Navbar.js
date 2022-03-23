import React from 'react';
import "./Navbar.css"
import Logo from "../../images/Logo.svg"

const Navbar = () => {
    return (
        <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                    <div className="container">
                        <div className="navbar-brand" href="f">
                            <img src={Logo} alt="Logo" />
                        </div>

                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        
                        <div className="collapse navbar-collapse " id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
                                <li className="nav-item">
                                <a className="nav-link active text-white" aria-current="page" href="f">Order</a>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link text-white" href="f">Order Review</a>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link text-white" href="f">Manage Inventory</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
           
        </div>
    );
};

export default Navbar;