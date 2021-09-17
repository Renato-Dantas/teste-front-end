import './Carousel.css'
import prev from '../assets/arrowLeft.png'
import next from '../assets/arrowRigth.png'

const Carousel = () => {
    return (
        <section className='carousel'>
            <div className='car-title1 car-font'>NOVOS PRODUTOS</div>
            <div className='car-title2 car-font'>INSTRUMENTOS</div>
            <div className='car-title3 car-font'>PROFISSIONAIS</div>
            <div className="car-title4 car-font">CONFIRA</div>
            <hr className='car-line'></hr>
            <img className='prev' src={prev} alt="previous" />
            <img className='next' src={next} alt="next" />
            <div className="points">
                <div className="point"></div>
                <div className="point"></div>
                <div className="point pnt-center"></div>
                <div className="point"></div>
                <div className="point"></div>
            </div>
        </section>
    );
}
 
export default Carousel;