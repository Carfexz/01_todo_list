import { GrClose } from "react-icons/gr";
import './Modal.css'

const stopPropagation = (event) => event.stopPropagation();

const Modal = ({ children, onClose, isGrClose = true }) => {
    return (
        <div className="modal" onClick={stopPropagation}>
            {isGrClose && <GrClose onClick={onClose} />}
            {children}
        </div>
    )
}

export default Modal;