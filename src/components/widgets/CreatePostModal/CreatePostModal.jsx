import Backdrop from "../../entites/Backdrop/Backdrop"
import Container from '../../entites/Container/Container'
import Modal from "../../entites/Modal/Modal"
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
                    <Container>
                        <Input
                            placeholder='Post title'
                            {...title}
                        />
                    </Container>
                    <Container>
                        <Input
                            placeholder='Post desciption'
                            {...body}
                        />
                    </Container>
                    <div className="padding-button-modal" />
                    <Button text='Create post' onClick={addPostHandler} />
                </div>
            </Modal>
        </Backdrop >
    )
}

export default CreatePostModal
