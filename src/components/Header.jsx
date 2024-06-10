import React, { useState, useEffect, useRef } from 'react';

const Header = () => {
    const [cursorX, setCursorX] = useState(150);
    const [cursorY, setCursorY] = useState(150);
    const [scrollY, setScrollY] = useState(150);
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
        <header className="header" ref={headerRef} onMouseMove={handleMouseMove}>
            <div className="header-background" style={{ transform: `translateY(-${scrollY * 0.01}px)` }} />
            <div className="header-content header-container">
                <h1>Bienvenidos a TekyaRP</h1>
                <p>Bienvenidos a a la pagina oficial de TekyaRP.
                    <br />
                    Somos un servidor de rolplay de fivem que nos enfocamos en traer entretenimiento de los usuarios y darles una mejor experiencia de juego.
                    <br />
                    En esta pagina vas a poner encontrar el enlace para el discord, como las normativas y tienda de objetos.</p>
                <a href="#sabermas" className="btn-1" >Saber mas</a>
            </div>
            <div className="container">
                <div id="circulo"><img src="../public/bloborganic.gif" alt="" /></div>
                <div id="circulo2"><img src="../public/bloborganic.gif" alt="" /></div>
                <div id="circulo3"><img src="../public/bloborganic.gif" alt="" /></div>
                <div id="circulo4"><img src="../public/bloborganic.gif" alt="" /></div>
            </div>
            <div className="cursor"
                style={{
                    top: `${cursorY - 100}px`,
                    left: `${cursorX + 5}px`,
                }}><img src="../public/bloborganic.gif" alt="" /></div>

        </header>
    );
};

export default Header;