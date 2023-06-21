import { GrClose } from "react-icons/gr";
import { stopPropagation } from "../../../utils";
import './Modal.css'



const Modal = ({ children, onClose, isGrClose = true }) => {
    return (
        <div className="modal" onClick={stopPropagation}>
            {isGrClose && <GrClose onClick={onClose} />}
            {children}
        </div>
    )
}

export default Modal;