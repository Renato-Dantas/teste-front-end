import './ModalItem.css'
import close from '../assets/close.svg'

const ModalItem = ({name, description, photo, price, onClose}) => {

    return (
        <div>
            <button className="modal-close-btn" onClick={onClose}><img src={close}/></button>
            <img className='modal-img' src={photo} alt={name} />
            <h2 className='modal-name'>{name}</h2>
            <h2 className='modal-price'>{price}</h2>
            <p className='modal-desc'>{description}</p>
            <h2 className="modal-more">Veja mais detalhes do produto &gt;</h2>
            <hr className='modal-line'/>
            <button className="modal-button">Adicionar ao carrinho</button>
        </div> 
        );
}
 
export default ModalItem;