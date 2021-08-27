import './ahorro.scss'
import image from './thumb.png';
import puntos from './Counter.svg'

export const Ahorro = () => {
     return (
        <div className="ahorro">
        <h2 className="title-ahorro">Los P*t@s del ahorro</h2>
        <section className="container-ahorro">
            <img src={image} alt=" " className="image-ahorro" />
            <div className="content-ahorro">
                <p className="title-content-ahorro">Esto es AHORRO</p>
                <p className="text-ahorro">Conoce como nuestro RoboAdvisor crea el mejor portafolio de inversión para ti.</p>
            </div>
        </section>
        <img src={puntos} alt="puntos del ahorro" className="puntos" />
         </div>
     );
};