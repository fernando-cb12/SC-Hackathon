import Post from "./Home/post";

export default function Dashboard() {
  return (
    // <div className="p-4">
    <div className="grid grid-cols-3 gap-4 bg-white p-4 rounded shadow">
      <div className=" rounded">
        <Post
          image="https://via.placeholder.com/150"
          title="Post Title"
          content="This is the content of the post."
        />
      </div>
      <div className=" rounded">
        <Post
          image="https://via.placeholder.com/150"
          title="Post Title"
          content="This is the content of the post."
        />
      </div>
      <div className=" rounded">
        <Post
          image="https://via.placeholder.com/150"
          title="Post Title"
          content="This is the content of the post."
        />
      </div>
      <div className=" rounded">
        <Post
          image="https://via.placeholder.com/150"
          title="Post Title"
          content="This is the content of the post."
        />
      </div>
      <div className=" rounded">
        <Post
          image="https://via.placeholder.com/150"
          title="Post Title"
          content="This is the content of the post."
        />
      </div>
      <div className=" rounded">
        <Post
          image="https://via.placeholder.com/150"
          title="Post Title"
          content="This is the content of the post."
        />
      </div>
    </div>
    // </div>
  );
}
