import { useHistory, useParams } from "react-router-dom";
import useFetch from "../customHooks/useFetch";
import baseUrl from "../utils/static";

const Details = () => {
  const { id } = useParams();
  const { data, error, isPending } = useFetch(`${baseUrl}/blogs/${id}`);
  const refresh = useHistory();
  const handleClick = () => {
    fetch(`${baseUrl}/blogs/${id}`, {
      method: "DELETE",
    }).then(() => {
      refresh.push("/");
    });
  };

  return (
    <div className="blog-details">
      {isPending && <div>Loading...</div>}
      {error && <div>{error.message}</div>}
      {data && (
        <article>
          <h2>{data.title}</h2>
          <p>Writtern By {data.author}</p>
          <div>{data.body}</div>
          <button onClick={handleClick}>Delete Article</button>
        </article>
      )}
    </div>
  );
};

export default Details;
