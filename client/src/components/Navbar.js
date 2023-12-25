import React from 'react'
import {NavLink} from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <nav className="navbar pt-3 navbar-expand-lg ">
                <NavLink className="navbar-brand" to="/"><h1>MY PROJECT</h1>
                </NavLink >
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto">
                    </ul>
                </div>
            </nav>
    </>
  )
}

export default Navbar
