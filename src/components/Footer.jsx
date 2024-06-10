import "bootstrap-icons/font/bootstrap-icons.css";
import '../App.css'

const Footer = () => {
    return (
        
        <footer>
        <div className="socials">
            <a href="https://www.instagram.com/angelesthomas/" className="social-icon" target="blank"><i className="bi bi-instagram"></i></a>
            <a href="" className="social-icon" target="blank"><i className="bi bi-twitter"></i></a>
            <a href="https://discord.gg/Txpz554FTk" className="social-icon" target="blank"><i className="bi bi-discord"></i></a>
        </div>
        <span className="copyright">Copyright &copy; 2024 TekyaRP</span>
    </footer>
        
    )
}

export default Footer;