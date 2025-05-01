import Post from "./Home/post";
import News from "./Home/news";

export default function Home() {
  return (
    <>
      <div className="flex flex-container w-1/2 pl-40">
        <Post
          image="https://via.placeholder.com/150"
          title="Post Title"
          content="This is the content of the post."
        />
        <div className="flex flex-col flex-grow absolute top-15 right-0 w-1/4">
          <News
            image="https://via.placeholder.com/150"
            title="Post Title"
            content="This is the content of the post."
          />
          <News
            image="https://via.placeholder.com/150"
            title="Post Title"
            content="This is the content of the post."
          />
          <News
            image="https://via.placeholder.com/150"
            title="Post Title"
            content="This is the content of the post."
          />
          <News
            image="https://via.placeholder.com/150"
            title="Post Title"
            content="This is the content of the post."
          />
        </div>
      </div>
    </>
  );
}
