import { GrClose } from "react-icons/gr";
import './PostItem.css'



const PostItem = ({ remove, post, number }) => {
    const { title, body } = post;
    const removeHandler = () => remove(post);

    return (
        <div className='post'>
            <div className='gr-close'>
                <GrClose onClick={removeHandler} />
            </div>
            <div className='post-content'>
                <strong>{number}. {title}</strong>
                <div>
                    {body}
                </div>
            </div>

        </div>
    )
}

export default PostItem;