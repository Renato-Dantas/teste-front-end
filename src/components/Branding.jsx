import './Branding.css'
import brand1 from '../assets/brand1.png'
import brand2 from '../assets/brand2.png'
import brand3 from '../assets/brand3.png'
import brand4 from '../assets/brand4.png'

const Branding = () => {
    return ( 
        <section className='brand-sec'>
            <h2 className='brand-title'>AS MELHORES MARCAS</h2>
            <h4 className='brand-subtitle'>it is a long established fact that a reader will be destracted by the readable</h4>
            <div className="brand-container">
                <img className="brand1" src={brand1} alt='AKG brand'/>
                <img className="brand2" src={brand2} alt='Roland brand'/>
                <img className="brand3" src={brand3} alt = 'Boss brand'/>
                <img className="brand4" src={brand4} alt='Shure brand'/>
            </div>
        </section>
     );
}
 
export default Branding;