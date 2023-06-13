import './Modal.css'
import { GrClose } from "react-icons/gr";

const Modal = ({ children, onClose }) => {
    return (
        <div className="modal" onClick={(event) => event.stopPropagation()}>
            <GrClose onClick={onClose} />
            {children}
        </div>
    )
}

export default Modal;