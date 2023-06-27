import Button from "../../ui/Button/Button";
import { motion } from "framer-motion";
import './PostItem.css'
import { animationAscent } from "../../../const/animations/items";

const PostItem = ({ remove, post, number, editModal, onComplete }) => {
    const { id, title, body, isComplete } = post;
    const completeHandler = () => onComplete(id)
    const removeHandler = () => {
        remove(id);
        console.log(id);
    }
    const editHandler = () => editModal(id);

    return (
        <motion.div
            {...animationAscent}
            className='post'
        >

            <div className={`post-content ${isComplete ? 'complete' : 'post-content'}`}>
                <motion.div
                    {...animationAscent}
                    className='gr-close'
                >
                    <Button isCompleteIcon={true} completeIcon={true} onClick={completeHandler} />
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