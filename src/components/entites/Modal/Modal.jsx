import './Modal.css'
import { GrClose } from "react-icons/gr";

const Modal = ({ children, onClose, isGrClose = true }) => {
    return (
        <div className="modal" onClick={(event) => event.stopPropagation()}>
            {isGrClose && <GrClose onClick={onClose} />}
            {children}
        </div>
    )
}

export default Modal;