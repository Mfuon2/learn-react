import { useState } from "react";
import { useHistory } from "react-router-dom";
import baseUrl from "../utils/static";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
  const [isPending, setIsPending] = useState(false);
  const refresh = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };
    setIsPending(true);

    fetch(`${baseUrl}/blogs`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(blog),
    }).then((data) => {
      console.log("added" + JSON.stringify(data));
      setIsPending(false);
      //refresh.go(-1);
      refresh.push("/");
    });
  };

  return (
    <div className="create">
      <h2>Add New</h2>
      <form onSubmit={handleSubmit}>
        <label>Title: </label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog Body: </label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Author: </label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="Mario">Mario</option>
          <option value="Leo">Leo</option>
        </select>
        {!isPending && <button>Add Blog</button>}
        {isPending && <button>Saving</button>}
      </form>
    </div>
  );
};

export default Create;
