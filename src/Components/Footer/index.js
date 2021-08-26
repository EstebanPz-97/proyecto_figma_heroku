import './footer.scss';
import house from './home_24px.svg';
import list from './format_list_bulleted_24px.svg';
import mas from './invest.svg';
import acount from './account_circle_24px.svg';
import more from './more_horiz_24px.svg';


export const Footer = () => {
     return (
        <footer>
        <section className="footer-home">
            <img src={house} alt="house" />
            <div>Home</div>
        </section>
        <section className="footer-historial">
            <img src={list} alt="lista" />
            <div>historial</div> 
        </section>
        <section className="footer-ahorro">
            <img src={mas} alt="mas" className="image-mas"/>
            <div className="text-ahorro">Ahorrar</div>
        </section>
        <section className="footer-perfil">
            <img src={acount} alt="perfil" />
            <div className="text-perfil">Mi perfil</div> 
        </section>
        <section className="footer-mas">
             <img src={more} alt="more" />
            <div className="text-mas">Mas</div>  
        </section>



    </footer>
     );
};