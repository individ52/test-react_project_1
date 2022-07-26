import React, { useEffect, useRef, useState } from 'react';
import PostList from '../components/PostList';
import '../App.css';
import { PostsContext } from '../context';
import MainModal from '../components/UI/modal/MainModal';
import MainButton from '../components/UI/button/MainButton';
import PostForm from '../components/PostForm';
import PostFilter from '../components/PostFilter';
import { usePosts } from '../hooks/usePosts';
import PostService from '../API/PostService';
import { useFetching } from '../hooks/useFetching';
import MainLoader from '../components/UI/loader/MainLoader';
import MainPagination from '../components/UI/pagination/MainPagination';
import { usePagination } from '../hooks/usePagination';
import MainSelect from '../components/UI/select/MainSelect';
import MainInput from '../components/UI/input/MainInput';
import { useObserver } from '../hooks/useObserver';
const Posts = () => {

    const [modal, setModal] = useState(false);
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);
    const [filter, setFilter] = useState({ sort: "", query: "" });
    const [totalPages, setTotalPages] = useState(0);
    const paginationPages = usePagination(totalPages, limit);
    const [paginationStatus, setPaginationStatus] = useState(true);
    const [posts, setPosts] = useState([]);
    const lastElement = useRef();
    const sortedQueryPosts = usePosts(posts, filter.sort, filter.query);
    const [fetchPosts, isPostLoading, isPostErrors] = useFetching(async () => {
        const response = await PostService.getAll(limit, page);
        if (paginationStatus) setPosts(response.data);
        else setPosts([...posts, ...response.data]);

        setTotalPages(response.headers["x-total-count"]);
    });

    useEffect(() => {
        fetchPosts();
    }, [limit, totalPages, page, paginationStatus]);


    useEffect(() => {
        fetchPosts();
    }, []);






    useObserver(lastElement, (page < totalPages && !paginationStatus), isPostLoading, () => {
        setPage(page + 1);
    });

    const removePost = (post) => {
        setPosts(posts.filter((p) => p.id !== post.id));
    }

    const addPost = (post) => {
        console.log(post);
        setPosts([...posts, post]);
        setModal(false);
    }

    return (
        <PostsContext.Provider value={{
            removePost
        }}>
            <hr></hr>
            <MainButton onClick={() => { setModal(true); }}>Add new post</MainButton>
            <PostFilter filter={filter} setFilter={setFilter} />

            <MainSelect
                defaultValue="Select element count"
                onChange={(e) => setLimit(e.target.value)}
                options={[
                    { value: 5, text: "5" },
                    { value: 10, text: "10" },
                    { value: 25, text: "25" },
                    { value: -1, text: "All" },
                ]}
            />
            <div>
                <p>Is pagination <MainInput type="checkbox" onChange={(e) => setPaginationStatus(e.target.checked)} /></p>
            </div>
            <MainModal isVisiable={modal} setVisiable={setModal}>
                <PostForm addPost={addPost} />
            </MainModal>
            {isPostLoading && <div style={{ display: "flex", justifyContent: "center" }}><MainLoader /> </div>}
            {paginationStatus && <MainPagination currentPage={page} totalPages={paginationPages} setPage={setPage} />}
            <PostList posts={sortedQueryPosts} />
            <div ref={lastElement} style={{ height: 20, background: "red" }}></div>
            {isPostLoading && <div style={{ display: "flex", justifyContent: "center" }}><MainLoader /> </div>}
        </PostsContext.Provider>
    )
}
export default Posts;