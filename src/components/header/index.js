import React, { Component } from 'react'

export class Header extends Component {
    render() {
        return (
            <div>
            <header className="">
            <div className="navbar_mobile">
                <div className="navbar_base" >
                    <div className="navbar_left">
                    <a href="#menu" id="toggle"><span></span></a>
                    <div id="menu">
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                    </div>
                        <div className="search-toggle">
                            <label for="mobile-search-checkbox">
                                <svg className="svg-inline search-icon" xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21"> <path fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.35 19.35l-5.68-5.68 5.68 5.68zM8.31 15.618A7.31 7.31 0 1 1 8.31 1a7.31 7.31 0 0 1 0 14.619z"></path> </svg>
                            </label>
                        </div>
                    </div>
                    <div className="navbar_center"></div>
                    <div className="navbar_right"></div>
                </div>
            </div>
        </header>
            </div>
        )
    }
}

export default Header
