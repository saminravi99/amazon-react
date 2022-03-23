import React from 'react';
import "./Navbar.css"
import Logo from "../../images/Logo.svg"

const Navbar = () => {
    return (
        <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-dark">
                    <div class="container">
                        <div class="navbar-brand" href="f">
                            <img src={Logo} alt="Logo" />
                        </div>

                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                        </button>
                        
                        <div class="collapse navbar-collapse " id="navbarSupportedContent">
                            <ul class="navbar-nav ms-auto mb-2 mb-lg-0 ">
                                <li class="nav-item">
                                <a class="nav-link active text-white" aria-current="page" href="f">Order</a>
                                </li>
                                <li class="nav-item">
                                <a class="nav-link text-white" href="f">Order Review</a>
                                </li>
                                <li class="nav-item">
                                <a class="nav-link text-white" href="f">Manage Inventory</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
           
        </div>
    );
};

export default Navbar;