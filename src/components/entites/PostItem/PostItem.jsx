import Button from "../../ui/Button/Button";
import { motion } from "framer-motion";
import './PostItem.css'

const PostItem = ({ remove, post, number }) => {
    const { title, body } = post;
    const removeHandler = () => remove(post);

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}>
            <div className='post'>

                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className='gr-close'>
                    <Button isEdit={true} editIcon={true} />
                    <Button isCross={true} crossIcon={true} onClick={removeHandler} />
                </motion.div>
                <div className='post-content'>
                    <strong>{number}. {title}</strong>
                    <div>
                        {body}
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default PostItem;