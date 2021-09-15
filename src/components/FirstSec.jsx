import './FirstSec.css'

/* Faltam ser desenhados os icones - somente o espaço de cada um foi 
acrescentado ao layout */

const FistSection = () => {
    return ( 
        <section className='first-sec'> 
            <div className='lock-ico'></div>
            <div className="promo1 font-opt">COMPRA 100%</div>
            <div className='line1'></div>
            <div className="promo2 font-opt">1 TROCA GRÁTIS</div>
            <div className="line2"></div>
            <div className='percent-ico'></div>
            <div className="promo3 font-opt">5x SEM JUROS</div>
            <div className="line3"></div>
            <div className="truck-ico"></div>
            <div className="promo4 font-opt">ENTREGAS EM TODO O BRASIL</div>
        </section>
     );
}
 
export default FistSection;