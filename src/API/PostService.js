import axios from "axios";


export default class PostService {
    static async getAll(_limit = 10, _page = 1) {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts", {
            params: {
                _limit,
                _page
            }
        });
        return response;
    }
    static async getPostById(id) {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
        return response.data;
    }
    static async getPostCommentsById(id) {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
        return response.data;
    }
}
