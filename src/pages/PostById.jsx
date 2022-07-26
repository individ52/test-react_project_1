import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import PostService from '../API/PostService';
import MainLoader from '../components/UI/loader/MainLoader';
import { useFetching } from '../hooks/useFetching';
const PostById = () => {
    const params = useParams();
    const [post, setPost] = useState({ id: null, body: null, title: null });
    const [comments, setComments] = useState([]);
    const [fetchPost, isPostLoading, postError] = useFetching(async (id) => {
        const post = await PostService.getPostById(id);
        setPost(post);
    });

    const [fetchComments, isCommentsLoading, commentsError] = useFetching(async (id) => {
        const comments = await PostService.getPostCommentsById(id);
        setComments(comments);
    });

    useEffect(() => {
        fetchPost(params.id);
        fetchComments(params.id);
    }, [])
    return (
        <div>
            {isPostLoading && <MainLoader />}
            <h1>{post.id}. {post.title}</h1>
            <h3>{post.body}</h3>
            <hr />
            <h2>Comments</h2>
            {isCommentsLoading && <MainLoader />}
            {comments.map(comment => <div key={comment.id}>
                <p>{comment.email}. <strong>{comment.name}</strong></p>
                <p>{comment.body}</p>
            </div>)}
            <Link to="/posts">Back</Link>
        </div>
    )
}
export default PostById;