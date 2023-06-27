import Layout from "./Layout/Layout";
import CreatePostModal from "../widgets/CreatePostModal/CreatePostModal";
import EditPostModal from "../widgets/EditPostModal/EditPostModal";
import PostList from "../features/PostList/PostList";
import Title from '../entites/Title/Title'
// import { useState } from "react";
import { useModal } from "../entites/Modal/hooks/useModal";
import { usePostSlice } from "./Posts/usePostSlice";
import { animationAscent } from "../../const/animations/items";
import { motion } from "framer-motion";

const Posts = () => {
    const { state, addPost } = usePostSlice()

    // const [posts, setPosts] = useState([
    //     { id: 1, title: 'Get up at 6:30', body: 'Marathon training, 1/30 days', isComplete: false },
    //     { id: 2, title: 'Get up at 6:30', body: 'Marathon training, 1/30 days', isComplete: false },
    //     { id: 3, title: 'Get up at 6:30', body: 'Marathon training, 1/30 days', isComplete: false }
    // ])

    // const addNewPost = ({ title, body }) => {
    //     const newPost = {
    //         id: Date.now(),
    //         title,
    //         body,
    //     }
    //     console.log(newPost);
    //     setPosts([...posts, newPost])
    // }

    // const removePost = ({ id }) => {
    //     setPosts([...posts].filter(p => p.id !== id))
    // }

    // const handleTogglePaid = (id) => {
    //     setPosts((prevState) => {
    //         const index = prevState.findIndex((posts) => posts.id === id)
    //         const oldPosts = prevState[index]
    //         const newPosts = { ...oldPosts, isComplete: !oldPosts.isComplete };
    //         return ([...prevState.slice(0, index), newPosts, ...prevState.slice(index + 1)])
    //     })
    // }

    const createModal = useModal(false)
    const editModal = useModal(false)

    return (
        <Layout isFooter={true} isHeader={true} openModal={createModal.openModal}>
            {createModal.isShow && <CreatePostModal addNewPost={() => { }} closeModal={createModal.closeModal} />}
            {editModal.isShow && <EditPostModal editPost={() => { }} closeModal={editModal.closeModal} />}
            {state.posts !== 0
                ? <PostList onComplete={() => { }} editModal={editModal.openModal} openModal={createModal.openModal} remove={() => { }} posts={state.posts} title='TO-DO LIST' />
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

