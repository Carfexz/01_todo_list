import { useState } from "react";
import PostItem from "../entites/PostItem/PostItem";
import PostList from "../features/PostList/PostList";
import CreatePostModal from "../widgets/CreatePostModal/CreatePostModal";
import Layout from "./Layout/Layout";

const Posts = ({ posts }) => {

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
            {showModal && <CreatePostModal closeModal={closeModal} />}
            <PostList posts={posts} title='TO-DO LIST' />
        </Layout>
    )
}

export default Posts;