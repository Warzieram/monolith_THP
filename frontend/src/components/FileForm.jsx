import { useContext } from "react";
import { AppContext } from "../App";

const FileForm = () => {

  const {_latestPost, setLatestPost} = useContext(AppContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();

    data.append("post[title", e.target.title.value);
    data.append("post[image]", e.target.image.files[0]);
    console.log(data);
    submitToApi(data);

  }

  const submitToApi = (data) => {
    fetch("http://localhost:3000/posts", {
      method: "POST",
      body: data
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        setLatestPost(data.image_url);
      })
    .catch((error) => console.error(error))
  }

  return(
  <>
    <h1>FileForm</h1>
    <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="title" >Title </label>
        <input type="text" name="title" id="title"/>

        <label htmlFor="image">Image</label>
        <input type="file" name="image" id="image"/>

        <button type="submit"> Create post </button>
    </form>
  </>
  )
}

export default FileForm
