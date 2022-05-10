import React, {useEffect} from 'react';
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";

const BlogList = () => {
    const [blogs, setBlogs] = React.useState([]);
    const user = useSelector(state => state.user);

    const dispatch = useDispatch();

    useEffect(() => {
        axios.get("/api/blog").then(res => {
            setBlogs(res.data);
        });
    }, []);
    return (
        <>
            <div id='content' class="mui-container-fluid">
                <h1>Articles</h1>
                <div className="mui-row">
                    <ul>
                        {blogs.map(blog => (
                            <li key={blog.id}>
                                <h2>{blog.title}</h2>
                                <p>
                                    <img src={blog.imagePost}/>
                                </p>
                                <p>{blog.body}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default BlogList;
