import './FirstSec.css'
import lock from '../assets/cadeado.png'
import perc from '../assets/porcentagem.svg'
import truck from '../assets/truck.svg'

/* Faltam ser desenhados os icones - somente o espaço de cada um foi 
acrescentado ao layout */

const FistSection = () => {
    return ( 
        <section className='first-sec'> 
            <img className='lock-ico' src={lock} alt='lock'/>
            <div className="promo1 font-opt">COMPRA 100%</div>
            <hr className='line1'/>
            <div className="promo2 font-opt">1 TROCA GRÁTIS</div>
            <hr className="line2"/>
            <img className='percent-ico' src={perc} alt='percent symbol'/>
            <div className="promo3 font-opt">5x SEM JUROS</div>
            <hr className="line3"/>
            <img className='truck-ico' src={truck} alt='truck deliver'/>
            <div className="promo4 font-opt">ENTREGAS EM TODO O BRASIL</div>
        </section>
     );
}
 
export default FistSection;