
import React, { useContext } from 'react';
import { PostsContext } from '../context';
import MainButton from './UI/button/MainButton';

const PostItem = ({ post, number }) => {
    const { removePost } = useContext(PostsContext);
    return (
        <div className='post'>
            <div className='post_text'>
                <div className='post_title'><strong>{number}. </strong>{post.title}</div>
                <div>{post.body}</div>
            </div>
            <div className='post_btns'>
                <MainButton>Info</MainButton>
                <MainButton onClick={() => removePost(post)}>Remove</MainButton>
            </div>
        </div>
    )
}
export default PostItem;