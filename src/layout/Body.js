import { useState } from "react";
import useFetch from "../customHooks/useFetch";
import BlogList from "../templates/BlogList";

const Home = () => {
  const [title, setTitle] = useState("All Blogs");
  const {data: blogs, error, isPending} = useFetch('http://localhost:8000/blogs')
  return (
    <div className="home">
      {error && <p>{error}</p>}
      {isPending && <p>Loading...</p>}
      {blogs && <BlogList blogs={blogs} title={() => setTitle(title)} />}
    </div>
  );
};

export default Home;
