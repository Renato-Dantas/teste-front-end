import './Store.css'

const Store = ({children}) => {
    return ( 
        <section className='store-sec'>
            <div className='store-titles'>
                <span className='store-spn1 str-span-font'>INSTRUMENTOS</span>
                <span className='store-spn2 str-span-font'>DESTAQUE</span>
            </div>
            <div className="store-subtitle">
                it is a long established fact that a reader will be destracted by the readable
            </div>

            <div className="store-showcase">
                {children}
            </div>

        </section>
     );
}
 
export default Store;