import React from 'react'
import logo from '../assets/images/logo.png';
import {Link} from 'react-router-dom'

export default function Navbar1() {
  return (
    <div className="navbar navbar-dark bg-primary navbar-expand-lg">
    <div className="container">
    <Link className="navbar-brand" to="/">
                    <img src={logo} alt="The Chef Lane" />
                </Link>
    </div>

    </div>
  )
}
