import React from 'react'

const Navbar = () => {
    return (
        <>
            <ul className="nav" >
                <li className="nav-item">
                    <a className="text-warning" href="#/"><h3>Foodify</h3></a>
                </li>
            </ul>
            <center>
                <h3  style={{"background":"red"}}>Order online</h3>
            </center>
        </>
    )
}

export default Navbar
