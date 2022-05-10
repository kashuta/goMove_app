import React, {useEffect, useState} from 'react';
import axios from "axios";


const BlogList = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
            axios.get("/api/blog").then(res => {
                setPosts(res.data);
            });
        }
        , []);
    return (
        <div>
            <h1>Blog Posts</h1>
            <ul>
                {posts.map(post => <li>({post.title})</li>)}
            </ul>
        </div>
    );
};

export default BlogList;
