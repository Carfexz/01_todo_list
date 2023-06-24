import PostItem from '../../entites/PostItem/PostItem'
import Title from '../../entites/Title/Title';
import './PostList.css'

const PostList = ({ posts, title, remove, openModal }) => {
    return (
        <div>
            <Title text={title} />
            {posts.map((post, index) =>
                <PostItem openModal={openModal} remove={remove} number={index + 1} post={post} key={post.id} />
            )}
        </div>
    )
}

export default PostList;