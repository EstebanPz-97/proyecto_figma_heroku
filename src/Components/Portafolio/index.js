import './portafolio.scss'
import porcent from './holding_donut.svg';
import logo from './logo.svg';


export const Portafolio = () => {
     return (
    <div>
        <section className="header-portafolio">
            <div className="title-portafolio">Conoce tu portafolio</div>
            <span className="button-portafolio">Estratega</span>
        </section>
        <section className="portafolio-info">
            <img src={porcent} alt="" className="image-portafolio" />
            <div className="content-portafolio">
                <div className="company">
                    <img src={logo} alt="logo" />
                    <span className="porcentaje-company">15%</span>
                </div>
                <section className="text-company">
                    <div className="text-company-title">FIC OLD MUTUAL EFECTIVO</div>
                    <div className="text-company-precio">$240.000</div>
                    <div className="text-company-tipo">Tipo de activo</div>
                    <div className="text-company-renta">Renta fija <br />   Depósito a la fija</div>
                </section>
                <section className="frame-company">
                    <span className="frame-left"></span><span className="frame-rigth"></span>
                </section>
            </div>
            <div className="footer-portafolio">Tu  dinero se invierte de la forma más eficiente de acuerdo al perfil de riesgo asignado por nuestro RoboAdvisor.</div>
        </section>
    </div> );
};