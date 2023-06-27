import Backdrop from "../../entites/Modal/Backdrop/Backdrop"
import Container from '../../entites/Container/Container'
import Modal from "../../entites/Modal/Modal/Modal"
import Button from "../../ui/Button/Button"
import Input from "../../ui/Input/Input"
import { useInput } from "../../ui/Input/useInput"
import './EditPostModal.css'
import { useState } from "react"

const EditPostModal = ({ closeModal, editPost }) => {

    const titleEdit = useInput(['', ''])
    const bodyEdit = useInput(['', ''])

    const editPostHandler = (id) => {

    }

    return (
        <Backdrop onClose={closeModal}>
            <Modal onClose={closeModal}>
                <div className="modal-content">
                    <Container>
                        <Input
                            placeholder='Post title'
                            {...titleEdit}
                        />
                    </Container>
                    <Container>
                        <Input
                            placeholder='Post desciption'
                            {...bodyEdit}
                        />
                    </Container>
                    <div className="padding-button-modal" />
                    <Button text='Edit post' onClick={editPostHandler} />
                </div>
            </Modal>
        </Backdrop >
    )
}

export default EditPostModal
