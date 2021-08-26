import './card.scss'
import card from './IMG.png';

export const Card = () => {
     return (
        <div className="target">
            <section className="information-target">
                <div className="title-target"> Eres estratega</div>
                  <div className="saldo">
                    <p>tu saldo</p>
                    <h2>$1.570.000</h2>
                    </div>
                <img src={card}  alt="imagen de la tarjeta" className="image-target"/>
        </section>
    </div>
     );
};