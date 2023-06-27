import PostItem from '../../entites/PostItem/PostItem'
import Title from '../../entites/Title/Title';
import './PostList.css'

const PostList = ({ posts, title, remove, editModal, onComplete }) => {
    return (
        <div>
            <Title text={title} />
            {posts.map((post, index) =>
                <PostItem onComplete={onComplete} editModal={editModal} remove={remove} number={index + 1} post={post} key={post.id} />
            )}
        </div>
    )
}

export default PostList;