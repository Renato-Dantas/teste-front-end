import './Products.css'
import guitar from '../assets/guita.png'
import mic from '../assets/mic.png'
import board from '../assets/board.png'
import keyboard from '../assets/keyboard.png'
import acoustic from '../assets/acousticGuitar.png'
import drums from '../assets/drums.png'

const Products = () => {
    return ( 
        <section className='prod-area'>
            <div className='prod p1'><img src={guitar} alt='guitar'/></div>
            <div className='prod p2'><img src={mic} alt='microphone'/></div>
            <div className='prod p3'><img src={board} alt='board'/></div>
            <div className='prod p4'><img src={keyboard} alt='keyboard'/></div>
            <div className='prod p5'><img src={acoustic} alt='acoustic guitar'/></div>
            <div className='prod p6'><img src={drums} alt='drums'/></div>
            <div className='prod-title t1'>GUITARRAS</div>
            <div className='prod-title t2'>MICROFONES</div>
            <div className='prod-title t3'>MESA DE SOM</div>
            <div className='prod-title t4'>TECLADOS</div>
            <div className='prod-title t5'>VIOLÃO</div>
            <div className='prod-title t6'>BATERIAS</div>
        </section>
     );
}
 
export default Products;