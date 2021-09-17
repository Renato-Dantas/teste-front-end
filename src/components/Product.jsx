import './Product.css'

const Product = ({name, description, photo, price}) => {
    return ( 
        <div className='prod-item'>
            <img className='prod-img' src={photo} alt={name} />
            <h2 className='prod-name'>{name}</h2>
            <p className='prod-desc'>{description}</p>
            <h2 className='prod-price'>{price}</h2>
        </div>
     );
}
 
export default Product;