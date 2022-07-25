import React, { useState } from 'react';
import PostList from '../components/PostList';
import '../App.css';
import { PostsContext } from '../context';
import MainModal from '../components/UI/modal/MainModal';
import MainInput from '../components/UI/input/MainInput';
import MainButton from '../components/UI/button/MainButton';
const Posts = () => {

    const [modal, setModal] = useState(true);
    const [posts, setPosts] = useState([
        { id: "1", title: "Title 1", body: "Body 1" },
        { id: "2", title: "Title 2", body: "Body 2" },
        { id: "3", title: "Title 3", body: "Body 3" },
        { id: "4", title: "Title 4", body: "Body 4" },
    ]);

    const removePost = (post) => {
        setPosts(posts.filter((p) => p.id !== post.id));
    }

    const addPost = (post) => {
        setPosts([...posts, post]);
    }

    return (
        <PostsContext.Provider value={{
            removePost
        }}>
            <MainButton onClick={() => { setModal(true); }}>Add new post</MainButton>
            <MainModal isVisiable={modal} setVisiable={setModal}>
                <form onSubmit={() => addPost()}>
                    <MainInput type="text" placeholder="Title" />
                    <MainInput type="text" placeholder="Description" />
                    <MainButton type="submit">Add new post!</MainButton>
                </form>
            </MainModal>
            <PostList posts={posts} />
        </PostsContext.Provider>
    )
}
export default Posts;