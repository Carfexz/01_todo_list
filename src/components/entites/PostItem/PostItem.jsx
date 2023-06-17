import Container from '../Container/Container';
import Input from '../../ui/Input/Input';
import { GrClose } from "react-icons/gr";
import './PostItem.css'



const PostItem = (props, remove) => {
    return (
        <div className='post'>
            <div className='gr-close'>
                <GrClose onClick={() => props.remove(props.post)} />
            </div>
            <div className='post-content'>
                <strong>{props.number}. {props.post.title}</strong>
                <div>
                    {props.post.body}
                </div>
            </div>

        </div>
    )
}

export default PostItem;