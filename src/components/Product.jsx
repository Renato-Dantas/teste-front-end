import './Product.css'

const Product = ({name, description, photo, price, onClick}) => {
    return ( 
        <div className='prod-item' onClick={onClick}>
            <div>
                <div className='overlay1'></div>
                <div className='overlay2'>
                    <div className="btn-view"></div>
                    <h3>Quick View</h3>
                </div>                
                <img className='prod-img' src={photo} alt={name}></img>
            </div>
            <h2 className='prod-name'>{name}</h2>
            <p className='prod-desc'>{description}</p>
            <h2 className='prod-price'>{price}</h2>
        </div>
     );
}
 
export default Product;