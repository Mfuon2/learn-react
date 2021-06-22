import { useEffect, useState } from "react";
import BlogList from "../templates/BlogList";

const Home = () => {
    const [title, setTitle] = useState('All Blogs');
    const [blogs, setBlogs] = useState([
        {title:'This Blog', body:'Lorem Ipsum', author:'Mfuon Leonard', id:1},
        {title:'This Blog 2', body:'Lorem Ipsum', author:'Leo', id:2},
        {title:'This Blog 3', body:'Lorem Ipsum', author:'Anto', id:3},
        {title:'This Blog 4', body:'Lorem Ipsum', author:'Barnes', id:4},
        {title:'This Blog 5', body:'Lorem Ipsum', author:'Harry', id:5}
    ]);

    const handleBlogDelete = (id) => {
        const newBlogList = blogs.filter((blog) => blog.id !== id)
        setBlogs(newBlogList);
    };
    //const [name, setName] = useState('All Blogs');

    useEffect(() => {
        // any time affter rendering
        // any code after rerender
        console.log('Use Effect');
    }, [title]); //will run only when title changes [] will run only once. the firs render

    return ( 
        <div className="home">
              <BlogList blogs={blogs} title={title} handleBlogDelete = {handleBlogDelete}/>
              <button onClick={() => setTitle("Leo's Blogs")}>Change Title</button>
        </div>
     );
}
 
export default Home;