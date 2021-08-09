import React from 'react';
import github from './github.svg';
import linkedin from './linkedin.svg';
import instagram from './instagram.svg';
import lorianne from './lorianne.jpg'

const Footer =()=> {
    
    return (
        <div className="footerWrapper" id="footerWrapper">
            Created with &nbsp;<b><a href="http://reactjs.org" target="new">React</a></b>&nbsp; by
            <div className="footerContainer">
                <div className="me">
                    <img className="lorianne" src={lorianne} alt="Lorianne" />
                    Lorianne <b className="apellido">AGUILAR</b>
                </div>
                <div className="socialLinks">
                    <a href="https://github.com/Grailsidhe" target="new"><img className="socialLink" src={github} /></a>
                    <a href="https://www.linkedin.com/in/lorianne-aguilar/" target="new"><img className="socialLink" src={linkedin} /></a>
                    <a href="https://www.instagram.com/dev.lorianne" target="new"><img className="socialLink" src={instagram} /></a>
                </div>
            </div>
        </div>
    )
}

export default Footer