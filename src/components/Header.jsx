import React, { useState, useEffect, useRef } from 'react';
import NavBar from "./NavBar"

const Header = () => {
    const [cursorX, setCursorX] = useState(0);
    const [cursorY, setCursorY] = useState(0);
    const [scrollY, setScrollY] = useState(0);
    const headerRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleMouseMove = (event) => {
        setCursorX(event.clientX);
        setCursorY(event.clientY);
    };

    return (
        <header className="header" ref={headerRef}>
            <NavBar />
            <div className="header-background" style={{ transform: `translateY(-${scrollY * 0.1}px)` }} />
            <div className="header-content header-container">
                <h1>Bienvenidos a TekyaRP</h1>
                <p>Bienvenidos a a la pagina oficial de TekyaRP.
                    <br />
                    Somos un servidor de rolplay de fivem que nos enfocamos en traer entretenimiento de los usuarios y darles una mejor experiencia de juego.
                    <br />
                    En esta pagina vas a poner encontrar el enlace para el discord, como las normativas y tienda de objetos.</p>
                <a href="#sabermas" className="btn-1" target='blank'>Saber mas</a>
            </div>
            <div class="container">
                <div id="circulo" class="shape"></div>
                <div id="circulo2" class="shape"></div>
                <div id="circulo3" class="shape"></div>
            </div>
            <div
                className="cursor"
                style={{
                    top: `${cursorY}px`,
                    left: `${cursorX}px`,
                }}
                onMouseMove={handleMouseMove}
            />
        </header>
    );
};

export default Header;