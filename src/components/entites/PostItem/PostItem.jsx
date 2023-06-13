import Container from '../Container/Container';
import Input from '../../ui/Input/Input';
import './PostItem.css'

const PostItem = (props) => {
    return (
        <div className='post'>
            <div className='post-content'>
                <strong>{props.post.id}. {props.post.title}</strong>
                <div>
                    {props.post.body}
                </div>
            </div>
        </div>
    )
}

export default PostItem;