import { useState } from "react";
import PostList from "../features/PostList/PostList";
import Title from '../entites/Title/Title'
import CreatePostModal from "../widgets/CreatePostModal/CreatePostModal";
import Layout from "./Layout/Layout";

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
            body
        }
        setPosts([...posts, newPost])
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }



    const [showModal, setShowModal] = useState(true)

    const setShowModalHandler = (boolean) => {
        setShowModal(boolean)
    }

    const closeModal = () => {
        setShowModal(false)
    }

    const openModal = () => {
        setShowModal(true)
    }


    return (
        <Layout isFooter={true} isHeader={true} openModal={openModal}>
            {showModal && <CreatePostModal addNewPost={addNewPost} closeModal={closeModal} />}
            {posts.length !== 0
                ? <PostList remove={removePost} posts={posts} title='TO-DO LIST' />
                : <Title text='POSTS NOT FOUND | ૮ ˙Ⱉ˙ ა rawr!' />
            }
        </Layout>
    )
}

export default Posts;

{/* <PostList title="POSTS NOT FOUND | ૮ ˙Ⱉ˙ ა rawr!" posts={posts} /> */ }