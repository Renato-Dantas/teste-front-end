import './Info.css'
import card1 from '../assets/card1.png'
import card2 from '../assets/card2.png'
import card3 from '../assets/card3.png'
import card4 from '../assets/card4.png'
import card5 from '../assets/card5.png'
import card6 from '../assets/card6.png'
import card7 from '../assets/card7.png'

const Info = () => {
    return ( 
        <section className="info-sec">
            <div className="info1">
                <h2 className='info-titles'>INSTITUCIONAL</h2>
                <div className='info-div-text'>
                    <h4 className="info-text">QUEM SOMOS</h4>
                    <h4 className="info-text">NOSSAS LOJAS</h4>
                </div>
                <h2 className='info-titles'>ATENDIMENTO</h2>
                <div className='info-div-text'>
                    <h4 className="info-text">FALE CONOSCO</h4>
                    <h4 className='info-text'>VENDAS@NINJASOM.COM.BR</h4>
                </div>                
            </div>

            <div className="info2">
                <h2 className='info-titles'>AJUDA E SUPORTE</h2>
                <div className='info-div-text'>
                    <h4 className="info-text">POLÍTICA DE PRIVACIDADE</h4>
                    <h4 className='info-text'>POLÍTICA DE TROCAS</h4>
                    <h4 className="info-text">PRAZOS DE ENTREGA</h4>
                    <h4 className='info-text'>TERMOS DE USO</h4>
                </div>
            </div>
            <div className="info3">
                <h2 className='info-titles'>FORMAS DE PAGAMENTO</h2>
                <div>
                    <img className='card' src={card1} alt="creditcard visa" />
                    <img className='card' src={card2} alt="creditcard visa" />
                    <img className='card' src={card3} alt="creditcard visa" />
                </div>
                <div>
                    <img className='card' src={card4} alt="creditcard visa" />
                    <img className='card' src={card5} alt="creditcard visa" />
                </div>
                <h2 className='info-titles' style={{marginTop:'24px'}}>SEGURANÇA</h2>
                <div>
                    <img className='big-card1' src={card6} alt="creditcard visa" />
                    <img className='big-card2' src={card7} alt="creditcard visa" />
                </div>
            </div>
            <div className="form-info">
                <h2 className="form-info-title">ASSINE NOSSO <strong>NEWSLETTER</strong><br/> <spam className='info-subtitle'>E RECEBA NOVIDADES E PROMOCÕES</spam></h2>
                <form method='GET' action='' className='form-area'>
                    <h2 className="form-title">SEU NOME</h2>
                    <input className='form-input' type="text" name='name' />
                    <h2 className="form-title" style={{marginTop:'19px'}}>SEU E-MAIL</h2>
                    <input className='form-input' type="text" name='email' />
                    <button className="form-button">ENVIAR</button>
                </form>
            </div>            
        </section>
     );
}
 
export default Info;