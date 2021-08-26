import './metas.scss'
import plus from './add_circle_outline_24px.png'
import isla from './isla.png';
import computador from './pc.png'
import grafic_1 from './s_donut_20.png'
import grafic_2 from './s_donut.png'

export const Metas = () => {
     return (
        <div>
        <div className="container-title-main">
            <div className="title-main">Tus metas</div>
            <img src={plus} className="plus" alt=""/>
        </div>
        <section className="metas">
            <div className="target-metas">
                <img src={isla} alt="" />
                <h2 className="title-target-main">Viaje a islas canarias</h2>
                <section className="ahorros">
                <img src={grafic_1} className="graphic_20" alt="Grafico 20 %" />
                    <div className="valor-ahorrado">$1.630.000</div>
                    <div className="valor">$8.000.000</div>
                </section>
            </div>
            <div className="target-metas">
                <img src={computador} alt="" />
                <h2 className="title-target-main">Macbook pro</h2>
                <section className="ahorros">
                <img src={grafic_2} className="graphic_0" alt="Grafico 0 %" />
                <div className="valor-ahorrado">$0</div>
                <div className="valor">$7.000.000</div>
                </section>
                </div>
            </section>
        </div>
     );
};