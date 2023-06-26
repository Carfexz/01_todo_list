import Button from "../../ui/Button/Button";
import { motion } from "framer-motion";
import './PostItem.css'
import { animationAscent } from "../../../const/animations/items";

const PostItem = ({ remove, post, number, editModal }) => {
    const { title, body } = post;
    const removeHandler = () => remove(post);
    const editHandler = () => editModal();

    return (
        <motion.div
            {...animationAscent}
            className='post'
        >

            <div className='post-content'>
                <motion.div
                    {...animationAscent}
                    className='gr-close'
                >
                    <Button isComplete={true} completeIcon={true} onClick={() => { console.log('Complete'); }} />
                    <Button isEdit={true} editIcon={true} onClick={editHandler} />
                    <Button isCross={true} crossIcon={true} onClick={removeHandler} />
                </motion.div>
                <strong>{number}. {title}</strong>
                <div>
                    {body}
                </div>
            </div>
        </motion.div >
    )
}

export default PostItem;