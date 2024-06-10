import Header from "./Header"

const Home = () => {

return(
    <div>

    <Header/>
    <section className="aboutcontainer" id="sabermas">
    <div className="about-txt ">
            <h2>Saber mas!</h2>
            <p>Toca la imagen y podras entrar a nuestro discord oficial de TekyaRP.
            <br/>
            tienes que estar dentro para poder entrar al servidor de rolplay. En este discord podras encontrar todo lo que necesitas saber y mas sobre el servidor. En el discord tenes un apartado de soporte donde nuestros staff no dudaran en darte una mano, te agradeceriamos que entres y participes.</p>     
    </div>

    <div className="about-img">
            <a href="https://discord.gg/Txpz554FTk" target='blank'>
            <img src="../public/discord_icon_130958.png" alt="imagen Discord" /></a>
        </div>
        </section>
    </div>
)
}

export default Home