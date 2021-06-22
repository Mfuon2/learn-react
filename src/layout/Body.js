import { useEffect, useState } from "react";
import BlogList from "../templates/BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(true);
  const [title, setTitle] = useState("All Blogs");

  useEffect(() => {
    // any time affter rendering
    // any code after rerender
    setTimeout(() => {
      fetch("http://localhost:8000/blogsww")
        .then((res) => {
          if (!res.ok) {
            throw Error("Could Not fetch data from the resource");
          }
          return res.json();
        })
        .then((data) => {
          setBlogs(data);
          setError(null);
          setIsPending(false);
        })
        .catch((err) => {
          setIsPending(false);
          setError(err.message);
        });
    }, 1000);
  }, []); //will run only when title changes [] will run only once. the firs render

  return (
    <div className="home">
      {error && <p>{error}</p>}
      {isPending && <p>Loading...</p>}
      {blogs && <BlogList blogs={blogs} title={() => setTitle(title)} />}
    </div>
  );
};

export default Home;
