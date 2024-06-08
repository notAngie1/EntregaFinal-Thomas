
const Shop = () => {

    return (
        <div className="header">

            <div className="header-background" style={{ transform: `translateY(-${scrollY * 0.01}px)` }} />
            <div className="header-content header-container">
                <h1>Tienda Oficial de TekyaRP</h1>
                <p>Bienvenidos a la tienda oficial de TekyaRP
                    <br />
                    antes de realizar alguna compra es necesario y
                    obligatorio que hallas leído los terminos y condiciones que se encuentran en el discord de TekyaRP
                    <br/>
                    si todavia no entraste te pedimos que entres y leas los terminos y condiciones para evitar problemas
                    en un futuro. </p>
                    <a href="https://discord.gg/Txpz554FTk">Discord</a>
            </div>
            <div className="container">
                <div id="circulo" className="shape"></div>
                <div id="circulo2" className="shape"></div>
                <div id="circulo3" className="shape"></div>
            </div>
        </div>

    )
}

export default Shop 