import { useState } from "react";
import axios from "axios";

const PostCreate = () => {
  const [title, setTitle] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();
    await axios.post("http://localhost:4000/posts", {
      title,
    });
    setTitle('')
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col bg-slate-500 w-[400px] rounded-md ">
          <label className="text-2xl text-white m-1 self-center ">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="m-1 p-1 border-2 border-gray-950 rounded-md"
          />
        <button className="p-1 m-1 bg-gray-700 text-white rounded-md">
          Submit
        </button>
        </div>
      </form>
    </div>
  );
};

export default PostCreate;
