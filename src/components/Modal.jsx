import './Modal.css'


const Modal = ({children, onClose}) => {
   
    return ( 
        <>
            <div className="modal-overlay" onClick={()=>{onClose()}}></div>
            <div className="modal-container">
                {children}
            </div>
        </>
     );
}
 
export default Modal;