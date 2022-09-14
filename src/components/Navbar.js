import React from 'react';
import { Link } from 'react-router-dom';

//Images
import logo from '../assets/images/logo.png'
import location from '../assets/images/location.png'
import search from '../assets/images/search.png'
import notification from '../assets/images/notification.png'
import cart from '../assets/images/cart.png'

//css
import '../style/navbar.scss'

export default function Navbar() {
    return (
        <nav className="navbar navbar-dark bg-primary navbar-expand-lg">
            <div className="container-fluid container">
                <Link className="navbar-brand" to="/">
                    <img src={logo} alt="The Chef Lane" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav d-lg-flex me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to={'/'} className="nav-link active" aria-current="page" ><img src={location} alt="" /><span className='ms-3'>Chennai</span></Link>
                        </li>
                        <li className="nav-item searchbar">
                            <input className="form-control  ps-5" type="search" placeholder="Search" aria-label="Search" />
                            <img src={search} alt="search" />
                        </li>
                        <li className="nav-item">
                            <div className="form-check form-switch">
                                <input className="form-check-input bg-secondary switch" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked />
                                <label className="form-check-label text-white" htmlFor="flexSwitchCheckDefault">Chef Mode  </label>
                            </div>
                        </li>
                        <li className="nav-item">
                            <div className=''>
                                <img src={notification} alt="notification" />
                            </div>
                        </li>
                        <li className="nav-item">
                            <div className="dropdown">
                            <span className="avatar px-3 py-2 rounded-circle bg-secondary text-white">J</span>
                                <button className="btn text-white dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    John Doe
                                </button>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/">View Profile</Link></li>
                                    <li><Link className="dropdown-item" to="/">Log out</Link></li>
                                </ul>
                            </div>
                        </li>
                        <li className="nav-item">
                            <div className=''>
                                <img src={cart} alt="cart" />
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
