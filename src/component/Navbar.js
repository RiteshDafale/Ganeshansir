import React from 'react'
import { useNavigate, Routes, Route, Redirect, BrowserRouter, } from 'react-router-dom';
import home from './Home'
import Next from './Next';
import layout from './Layout'
import Home from './Present';
import Past from './Past';
import { BrowserRouter as Router } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Present from './Present';
// import { CompatRouter,Switch } from 'react-router-dom';

export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Ganeshan</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                {/* <a className="nav-link active" aria-current="page" href="#">Talk</a> */}
                                <Router>
                                    <NavLink to='/home'>talk&nbsp;&nbsp;&nbsp;</NavLink>
                                </Router>

                            </li>
                            <li className="nav-item">
                                {/* <a className="nav-link" href="#">Quatation</a> */}
                                <Router>
                                    <NavLink to='/past'>Past</NavLink>
                                </Router>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Idioms</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Important_Words</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <BrowserRouter>
                <Routes>
                    <Route path='/home' element={<Present />} />
                    <Route path='/past' element={<Past />} />
                    <Route path='/next' element={<Next />} />
                </Routes>
            </BrowserRouter>




        </div>


    )
}
