import "../Productos.css"

const Productos = () => {

    return (
        <div className="divProductos">

        <section className="titulo">
            <h1>Vips</h1>
            <p>En el discord podras encontrar los beneficios.</p>
            <br/>
            <p>Los reclamas via ticket de donaciones en el discord.</p>
        </section>

        <div className="container-items">
            <div className="item">
                <figure>
                    <img src="../public/8410fa458ea3dbf330b82205acde3ba3-icono-de-diamante-rubi.webp" alt=""/>
                </figure>
                <div className="info-producto" id="1">
                    <h2>Vip Tekya mensual</h2>
                    <p className="precio">1500$</p>
                    <button className="botonComprar" data-id="1">Comprar</button>
                </div>
            </div>
            <div className="item">
                <figure>
                    
                    <img src="../public/8410fa458ea3dbf330b82205acde3ba3-icono-de-diamante-rubi.webp" alt=""/>
                </figure>
                <div className="info-producto" id="2">
                    <h2>Vip Tekya permanente</h2>
                    <p className="precio">5000$</p>
                    <button className="botonComprar" data-id="2">Comprar</button>
                </div>
            </div>
        </div>


        <section className="titulo">
            <h1>Autos</h1>
            <p>Los reclamas via ticket de donaciones en el discord.</p>
        </section>


        <div className="container-items">
            <div className="item">
                <figure>
                    <img src="../public/056a110c18e9cf64b16b0dabb87926df-coche-con-icono-de-burbujas.webp" alt=""/>
                </figure>
                <div className="info-producto">
                    <h2>Autos conce vip</h2>
                    <p className="precio">2000$</p>
                    <button className="botonComprar" data-id="3">Comprar</button>
                </div>
            </div>
            <div className="item">
                <figure>
                    <img src="../public/056a110c18e9cf64b16b0dabb87926df-coche-con-icono-de-burbujas.webp" alt=""/>
                </figure>
                <div className="info-producto">
                    <h2>Addons</h2>
                    <p className="precio">5000$</p>
                    <button className="botonComprar" data-id="4">Comprar</button>
                </div>
            </div>
        </div>


        <section className="titulo">
            <h1>Casa</h1>
            <p>Los reclamas via ticket de donaciones en el discord.</p>
        </section>


        <div className="container-items-casa">
            <div className="item">
                <figure>
                    <img src="../public/house_icon-icons.com_70104.png" alt=""/>
                </figure>
                <div className="info-producto">
                    <h2>Casa ciudad/sandy</h2>
                    <p className="precio">2000$</p>
                    <button className="botonComprar" data-id="5">Comprar</button>
                </div>
            </div>
            <div className="item">
                <figure>
                    <img src="../public/house_icon-icons.com_70104.png" alt=""/>
                </figure>
                <div className="info-producto">
                    <h2>Casa Barrios altos</h2>
                    <p className="precio">5000$</p>
                    <button className="botonComprar" data-id="6">Comprar</button>
                </div>
            </div>
            <div className="item">
                <figure>
                    <img src="../public/house_icon-icons.com_70104.png" alt=""/>
                </figure>
                <div className="info-producto">
                    <h2>Casa paleto</h2>
                    <p className="precio">3500$</p>
                    <button className="botonComprar" data-id="7">Comprar</button>
                </div>
            </div>
        </div>



        <section className="titulo">
            <h1>Facciones</h1>
            <p>Los reclamas via ticket de donaciones en el discord.</p>
        </section>


        <div className="container-items-casa">
            <div className="item">
                <figure>
                    <img src="../public/mafia.webp" alt=""/>
                </figure>
                <div className="info-producto">
                    <h2>Mafia mensual</h2>
                    <p className="precio">2000$</p>
                    <button className="botonComprar" data-id="8">Comprar</button>
                </div>
            </div>
            <div className="item">
                <figure>
                    <img src="../public/mafia.webp" alt=""/>
                </figure>
                <div className="info-producto">
                    <h2>Mafia permanente</h2>
                    <p className="precio">5000$</p>
                    <button className="botonComprar" data-id="9">Comprar</button>
                </div>
            </div>
            <div className="item">
                <figure>
                    <img src="../public/organization-5.png" alt=""/>
                </figure>
                <div className="info-producto">
                    <h2>Faccion</h2>
                    <p className="precio">10000$</p>
                    <button className="botonComprar" data-id="10">Comprar</button>
                </div>
            </div>
        </div>


        <section className="titulo">
            <h1>Otros</h1>
            <p>Los reclamas via ticket de donaciones en el discord.</p>
        </section>

        <div className="container-items">
            <div className="item">
                <figure>
                    <img src="../public/defe38c5cdac50ff806d2d5ab406d557-icono-de-huella-de-gato.webp" alt=""/>
                </figure>
                <div className="info-producto">
                    <h2>Peds</h2>
                    <p className="precio">5000$</p>
                    <button className="botonComprar" data-id="11">Comprar</button>
                </div>
            </div>
            <div className="item">
                <figure>
                    <img src="../public/1424767.png" alt=""/>
                </figure>
                <div className="info-producto">
                    <h2>Plata IC</h2>
                    <p className="precio">2000$</p>
                    <button className="botonComprar" data-id="12">Comprar</button>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Productos;