import PostCreate from "./PostCreate";
import PostList from "./PostList";

function App() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Create Post</h1>
      <PostCreate />
      <br/>
      <hr/>
      <h1 className="text-2xl font-bold"> Posts</h1>
      <PostList />
    </div>
  );
}

export default App;
