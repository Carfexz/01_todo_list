import { useState } from "react";
import CreatePostModal from "../widgets/CreatePostModal/CreatePostModal";
import Layout from "./Layout/Layout";

const Posts = () => {

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
        </Layout>
    )
}

export default Posts;