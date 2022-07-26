
import React, { useContext } from 'react';
import { PostsContext } from '../context';
import MainButton from './UI/button/MainButton';
import { Link } from 'react-router-dom';

const PostItem = ({ post, number }) => {
    const { removePost } = useContext(PostsContext);
    return (
        <div className='post'>
            <div className='post_text'>
                <div className='post_title'><strong>{number}. {post.title}</strong></div>
                <div>{post.body}</div>
            </div>
            <div className='post_btns'>
                <MainButton>
                    <Link to={"/posts/" + post.id}>Info</Link>
                </MainButton>
                <MainButton onClick={() => removePost(post)}>Remove</MainButton>
            </div>
        </div>
    )
}
export default PostItem;