import { useEffect, useState } from "react";
import BlogList from "../templates/BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const handleBlogDelete = (id) => {
        const newBlogList = blogs.filter((blog) => blog.id !== id)
        setBlogs(newBlogList);
    };
    const [title, setTitle] = useState('All Blogs');

    useEffect(() => {
        // any time affter rendering
        // any code after rerender
        fetch('http://localhost:8000/blogs')
        .then(res => {
            return res.json();
        })
        .then(data => {
            setBlogs(data);
        })
    }, [title]); //will run only when title changes [] will run only once. the firs render

    return ( 
        <div className="home">
            {
                blogs && <BlogList blogs={blogs} title={() => setTitle(title)} handleBlogDelete = {handleBlogDelete}/>
            }
              
        </div>
     );
}
 
export default Home;