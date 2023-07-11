import PostItem from '../../entites/PostItem/PostItem'
import Title from '../../entites/Title/Title';
import './PostList.css'

const PostList = ({ posts, title, remove, editModal, onComplete, changeCurrentPostId }) => {

    return (
        <div>
            <Title text={title} />
            {posts.map((post, index) =>
                <PostItem changeCurrentPostId={changeCurrentPostId} editModal={editModal} remove={remove} onComplete={onComplete} number={index + 1} post={post} key={post.id} />

            )}
        </div>
    )

}


export default PostList;