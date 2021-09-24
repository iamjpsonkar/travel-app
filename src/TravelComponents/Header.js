import React from 'react'

export const Header = () => {
    return (
        <div className="sticky-top">
            <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
                <div className="container-fluid">
                    <a href="/" className="navbar-brand">TravelPro</a>
                    <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav">
                            <a href="/" className="nav-item nav-link active">Home</a>
                            <a href="#" className="nav-item nav-link">Covid Guidelines</a>
                            <a href="#" className="nav-item nav-link">About us</a>
                            <a href="#" className="nav-item nav-link">Contact us</a>
                        </div>
                        {/* <div className="navbar-nav ms-auto">
                            <a href="#" className="nav-item nav-link">Login</a>
                        </div> */}
                    </div>
                </div>
            </nav>
        </div>
    )
}
