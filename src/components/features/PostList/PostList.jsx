import PostItem from '../../entites/PostItem/PostItem'
import './PostList.css'

const PostList = ({ posts, title }) => {

    return (
        <div>
            <h1 className='todo-title'>
                {title}
            </h1>
            {posts.map(post =>
                <PostItem post={post} key={post.id} />
            )}
        </div>
    )
}

export default PostList;