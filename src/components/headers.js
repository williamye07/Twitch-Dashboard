import React from 'react';
import {Link} from 'react-router-dom';

function Headers(){
    return(
        <nav className="navbar justify-content-center">
            <li className="nav-item nav-link">
                <Link to="/"> Top Games </Link>
            </li>
            <li className="nav-item nav-link">
                <Link to ="/top-streams"> Top Live Streams</Link>
            </li>
        </nav>
    )
}

export default Headers;