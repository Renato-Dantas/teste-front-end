import './Header.css'

const Header = ({children}) => {
    return (
        <header className='header'>
            <div className="logo">NINJA SOM</div>
            <input className='input-search font-header' type='text' placeholder='BUSQUE AQUI...'/>
            <button className='btn-search'></button>
            <div className="phone-ico"></div>
            <div className="phone font-header">(11) 99999-9999</div>
            <div className="people-ico">
                <div className="people-head"></div>
                <div className="people-body"></div>
            </div>
            <div className="hello font-header">OLÁ, VISITANTE</div>
            <div className="acount">MINHA CONTA</div>
            <div className="line-div"></div>
            {children}

        </header>
    );
}
 
export default Header;