import React from 'react'
import { Link } from "react-router-dom";

export const Header = () => {
    return (
        <div className="sticky-top">
            <nav className="navbar navbar-expand-lg navbar-light bg-success">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand">TravelPro</Link>
                    <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav">
                            <Link to="/" className="nav-item nav-link">Home</Link>
                            <Link to="/covidguidelines" className="nav-item nav-link">Covid Guidelines</Link>
                            <Link to="/aboutus" className="nav-item nav-link">About us</Link>
                            <Link to="/contactus" className="nav-item nav-link">Contact us</Link>
                        </div>
                        {/* <div className="navbar-nav ms-auto">
                            <Link to="#" className="nav-item nav-link">Login</Link>
                        </div> */}
                    </div>
                </div>
            </nav>
        </div>
    )
}
