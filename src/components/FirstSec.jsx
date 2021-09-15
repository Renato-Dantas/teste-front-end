import './FirstSec.css'

/* Faltam ser desenhados os icones - somente o espaço de cada um foi 
acrescentado ao layout */

const FistSection = () => {
    return ( 
        <section className='first-sec'> 
            <div className='lock-ico'/>
            <div className="promo1 font-opt">COMPRA 100%</div>
            <hr className='line1'/>
            <div className="promo2 font-opt">1 TROCA GRÁTIS</div>
            <hr className="line2"/>
            <div className='percent-ico'/>
            <div className="promo3 font-opt">5x SEM JUROS</div>
            <hr className="line3"/>
            <div className="truck-ico"/>
            <div className="promo4 font-opt">ENTREGAS EM TODO O BRASIL</div>
        </section>
     );
}
 
export default FistSection;