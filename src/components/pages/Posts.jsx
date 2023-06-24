import Layout from "./Layout/Layout";
import CreatePostModal from "../widgets/CreatePostModal/CreatePostModal";
import EditPostModal from "../widgets/EditPostModal/EditPostModal";
import PostList from "../features/PostList/PostList";
import Title from '../entites/Title/Title'
import { useState } from "react";
import { useModal } from "../entites/Modal/hooks/useModal";
import { motion } from "framer-motion";
import { animationAscent } from "../../const/animations/items";

const Posts = () => {

    const [posts, setPosts] = useState([
        { id: 1, title: 'Get up at 6:30', body: 'Marathon training, 1/30 days' },
        { id: 2, title: 'Get up at 6:30', body: 'Marathon training, 1/30 days' },
        { id: 3, title: 'Get up at 6:30', body: 'Marathon training, 1/30 days' }
    ])

    const addNewPost = ({ title, body }) => {
        const newPost = {
            id: Date.now(),
            title,
            body,
        }
        setPosts([...posts, newPost])
    }

    const editPost = () => {
        console.log(123);
    }

    const removePost = ({ id }) => {
        setPosts([...posts].filter(p => p.id !== id))
    }



    // const [showModal, setShowModal] = useState(false)

    // const closeModal = () => {
    //     setShowModal(false)
    // }

    // const openModal = () => {
    //     setShowModal(true)
    // }

    const createModal = useModal(false)
    const editModal = useModal(false)

    return (
        <Layout isFooter={true} isHeader={true} openModal={createModal.openModal}>
            {createModal.isShow && <CreatePostModal addNewPost={addNewPost} closeModal={createModal.closeModal} />}
            {editModal.isShow && <EditPostModal editPost={editPost} closeModal={editModal.closeModal} />}
            {posts.length !== 0
                ? <PostList editPost={editPost} openModal={createModal.openModal} remove={removePost} posts={posts} title='TO-DO LIST' />
                : <motion.div
                    {...animationAscent}
                >
                    <Title text='POSTS NOT FOUND | ૮ ˙Ⱉ˙ ა rawr!' />
                </motion.div>
            }
        </Layout>
    )
}

export default Posts;
