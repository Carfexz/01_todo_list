import { useState } from "react"
import Backdrop from "../../entites/Backdrop/Backdrop"
import Container from '../../entites/Container/Container'
import Modal from "../../entites/Modal/Modal"
import Button from "../../ui/Button/Button"
import Input from "../../ui/Input/Input"
import './CreatePostModal.css'

const CreatePostModal = ({ closeModal }) => {

    const [posts, setPosts] = useState([
        { id: 1, title: 'Get up at 6:30', body: 'Marathon training, 1/30 days' },
        { id: 2, title: 'Get up at 6:30', body: 'Marathon training, 1/30 days' },
        { id: 3, title: 'Get up at 6:30', body: 'Marathon training, 1/30 days' }
    ])


    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    const addNewPost = (event) => {
        event.preventDefault()
        const newPost = {
            id: Date.now(),
            title,
            body
        }
        console.log(title);
        console.log(body);
        setPosts([...posts, newPost])
        console.log(setPosts);
    }


    return (
        <Backdrop onClose={closeModal}>
            <Modal onClose={closeModal}>
                <div className="modal-content">
                    <Container>
                        <Input
                            placeholder='Post title'
                            value={title}
                            onChange={event => setTitle(event.target.value)} />
                    </Container>
                    <Container>
                        <Input
                            placeholder='Post desciption'
                            value={body}
                            onChange={event => setBody(event.target.value)}
                        />
                    </Container>
                    <div className="padding-button-modal" />
                    <Button text='Create post' onClick={addNewPost} />
                </div>
            </Modal>
        </Backdrop >

    )
}

export default CreatePostModal