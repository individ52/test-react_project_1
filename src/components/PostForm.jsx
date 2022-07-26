import React, { useState } from 'react';
import MainButton from './UI/button/MainButton';
import MainInput from './UI/input/MainInput';
const PostForm = ({ addPost }) => {
    const zeroPost = { title: "", body: "", id: Date.now() };
    const [post, setPost] = useState(zeroPost);
    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            addPost(post);
            setPost(zeroPost);
            console.log(post)
        }}>
            <MainInput
                value={post.title}
                onChange={(e) => setPost({ ...post, title: e.target.value })}
                type="text"
                placeholder="Title"
            />
            <MainInput
                value={post.body}
                onChange={(e) => setPost({ ...post, body: e.target.value })}
                type="text"
                placeholder="Description"
            />
            <MainButton type="submit">Add new post!</MainButton>
        </form>
    )
}
export default PostForm;