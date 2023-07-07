import Backdrop from "../../entites/Modal/Backdrop/Backdrop"
import InputBackdrop from '../../entites/InputBackdrop/InputBackdrop'
import Modal from "../../entites/Modal/Modal/Modal"
import Button from "../../ui/Button/Button"
import Input from "../../ui/Input/Input"
import { useInput } from "../../ui/Input/useInput"
import './CreatePostModal.css'

const CreatePostModal = ({ closeModal, addNewPost }) => {

    const title = useInput(['', ''])
    const body = useInput(['', ''])

    const addPostHandler = () => {
        addNewPost({ title: title.value, body: body.value })
        closeModal()
    }

    return (
        <Backdrop onClose={closeModal}>
            <Modal onClose={closeModal}>
                <div className="modal-content">
                    <InputBackdrop>
                        <Input
                            placeholder='Post title'
                            {...title}
                        />
                    </InputBackdrop>
                    <InputBackdrop>
                        <Input
                            placeholder='Post desciption'
                            {...body}
                        />
                    </InputBackdrop>
                    <div className="padding-button-modal" />
                    <Button text='Create post' onClick={addPostHandler} />
                </div>
            </Modal>
        </Backdrop >
    )
}

export default CreatePostModal
