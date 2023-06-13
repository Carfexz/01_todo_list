import Backdrop from "../../entites/Backdrop/Backdrop"
import Modal from "../../entites/Modal/Modal"
import Button from "../../ui/Button/Button"
import Input from "../../ui/Input/Input"
import './CreatePostModal.css'

const CreatePostModal = ({ closeModal }) => {

    return (
        <Backdrop onClose={closeModal}>
            <Modal onClose={closeModal}>
                <div className="modal-content">
                    <Input />
                    <Input />
                    <Button />
                </div>
            </Modal>
        </Backdrop >

    )
}

export default CreatePostModal