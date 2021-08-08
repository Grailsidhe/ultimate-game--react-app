import React from 'react';
import { Link } from 'react-router-dom';

const Header =(props)=> {


    return (
        <header>
            <div className="titleWrap">
            <Link to={`/`}>
                <h1 className="title">{props.name}</h1>
            </Link>
                <span className="greeting">Wake up, User...</span>
            </div>
            <Link to={`/`}>Home</Link>
        </header>
    )
}

export default Header