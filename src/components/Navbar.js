import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
    return (
        <nav className="navbar navbar-expand-lg" style={{ backgroundColor: props.mode === "light" ? "#d3cdcd" : "black", color: props.mode === "dark" ? "white" : "black" }}>
            <div className="container-fluid">
                <a className="navbar-brand" href="#" style={{ color: props.mode === "dark" ? "white" : "black" }}>{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{ color: props.mode === "dark" ? "white" : "black" }}>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#" style={{ color: props.mode === "dark" ? "white" : "black" }}>Home</a>
                        </li>
                        {/* <li className="nav-item">
                            <a className="nav-link" href="/" style={{ color: props.mode === "dark" ? "white" : "black" }}>{props.aboutText}</a>
                        </li> */}
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button type="button" className="btn btn-success" >Success</button>
                    </form>
                    <div className="form-check form-switch" style={{ color: props.mode === "dark" ? "light" : "dark" }}>
                        <input onClick={props.darkToggler} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
                    </div>
                </div>
            </div>
        </nav>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string
}

Navbar.defaultProps = {
    title: "Set your title",
    aboutText: "About text here"
}