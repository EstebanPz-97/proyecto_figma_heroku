import './cabezera.scss'
import Notificacion from './notificacion.png'

export const Cabezera = () => {
     return (
         <div className="cabezera">
            <div className="header-left"> Hola, Esteban </div>
            <img src={Notificacion} className="notificacion" alt="notificacion" />              
         </div>
     );
};