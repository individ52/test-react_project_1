import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import PostItem from './PostItem';
const PostList = ({ posts }) => {
    return (
        <div className='post_list'>
            <TransitionGroup>
                {posts.map((post, i) => <CSSTransition
                    timeout={500}
                    classNames="post"
                    key={post.id}
                ><PostItem number={i + 1} post={post} /></CSSTransition>)}
            </TransitionGroup>
        </div>
    )
}
export default PostList;