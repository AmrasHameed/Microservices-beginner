import axios from "axios";
import { useEffect, useState } from "react";
import CommentCreate from "./CommentCreate";
import CommentList from "./CommentList";

const PostList = () => {
  const [posts, setPosts] = useState({});

 
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("http://localhost:4002/posts");
      setPosts(res.data);
    };
    fetchPosts();
  }, []);
  const renderedPosts = Object.values(posts).map((post) => {
    return (
      <div key={post.id}>
        <div>
          <h3 className="text-lg p-1">{post.title}</h3>
          <CommentList comments={post.comments}/>
          <CommentCreate postId={post.id}/>
        </div>
      </div>
    );
  });
  return <div
  className="flex flex-row flex-wrap justify-around">{renderedPosts}</div>;
};

export default PostList;
