import Layout from "../Layout/Layout";
import CreatePostModal from "../../widgets/CreatePostModal/CreatePostModal";
import EditPostModal from "../../widgets/EditPostModal/EditPostModal";
import PostList from "../../features/PostList/PostList";
import Title from '../../entites/Title/Title'
import Menu from '../../entites/Menu/Menu'
import { useModal } from "../../entites/Modal/hooks/useModal";
import { useMenu } from "../../entites/Menu/hooks/useMenu";
import { usePostSlice } from "./usePostSlice";
import { animationAscent } from "../../../const/animations/items";
import { motion } from "framer-motion";

const Posts = () => {
    const { state, addPost, delPost, completePost } = usePostSlice()

    const addPostHandler = (payload) => {
        addPost(payload)
    }

    const delPostHandler = (payload) => {
        delPost(payload)
    }

    const actionPostHandler = (payload) => {
        completePost(payload)
    }

    const menuModal = useMenu(false)
    const createModal = useModal(false)
    const editModal = useModal(false)

    return (
        <Layout isFooter={true} isHeader={true} openModal={createModal.openModal} openMenu={menuModal.openMenu} closeModal={editModal.closeModal}>
            {menuModal.isShowMenu && <Menu isPostsBtn={false} closeMenu={menuModal.closeMenu} />}
            {createModal.isShow && <CreatePostModal addNewPost={addPostHandler} closeModal={createModal.closeModal} />}
            {editModal.isShow && <EditPostModal editPost={() => { }} closeModal={editModal.closeModal} />}
            {state.posts != 0
                ? <PostList onComplete={actionPostHandler} editModal={editModal.openModal} openModal={createModal.openModal} remove={delPostHandler} posts={state.posts} title='TO-DO LIST' />
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

