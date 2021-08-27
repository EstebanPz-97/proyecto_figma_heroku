import './consejos.scss';
import computador from './IMG.svg';
import manos from './IMG2.svg';
import tarjeta from './IMG3.svg';

export const Consejos = () => {
     return (
        <div className="consejos">
        <section className="content-consejos">
            <div className="title-consejos">10 gastos que debes evitar</div>
            <div className="text-consejos">Aunque el 66% de los adultos recibió educación para el ahorro, apenas el 44% ahorra de manera fomal.</div>
            <img src={computador} alt="" className="image-consejos" />
        </section>
        <section className="content-consejos">
            <div className="title-consejos">10 gastos que debes evitar</div>
            <div className="text-consejos">Aunque el 66% de los adultos recibió educación para el ahorro, apenas el 44% ahorra de manera fomal.</div>
            <img src={manos} alt="" className="image-consejos" />
        </section>
        <section className="content-consejos">
            <div className="title-consejos">10 gastos que debes evitar</div>
            <div className="text-consejos">Aunque el 66% de los adultos recibió educación para el ahorro, apenas el 44% ahorra de manera fomal. </div>
            <img src={tarjeta} alt="" className="image-consejos" />
        </section>       
    </div>            
     );
};