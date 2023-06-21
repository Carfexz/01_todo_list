import Button from "../../ui/Button/Button";
import { motion } from "framer-motion";
import './PostItem.css'
import { animationAscent } from "../../../const/animations/items";

const PostItem = ({ remove, post, number }) => {
    const { title, body } = post;
    const removeHandler = () => remove(post);

    return (
        <motion.div
            {...animationAscent}
            className='post'
        >
            <motion.div
                {...animationAscent}
                className='gr-close'
            >
                <Button isEdit={true} editIcon={true} />
                <Button isCross={true} crossIcon={true} onClick={removeHandler} />
            </motion.div>
            <div className='post-content'>
                <strong>{number}. {title}</strong>
                <div>
                    {body}
                </div>
            </div>
        </motion.div >
    )
}

export default PostItem;