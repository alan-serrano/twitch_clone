import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return(
        <div className="ui secondary pointing menu">
            <Link to="/" className="item">
                Streamer
            </Link>

            <div className="rigth menu">
                <Link to="/" className="item">
                    All Streams
                </Link>
            </div>
        </div>
    );
}

export default Header;