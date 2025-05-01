import Post from "./Home/post";

export default function Dashboard() {
  return (
    <div className="p-4">
      <div className="grid grid-cols-3 gap-4 bg-white p-4 rounded shadow">
        <div className=" rounded">
          <Post
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP41ZQTu33kh-vcHGAWBKbA9TUUESJ7edSnQ&s"
            title="Post Title"
            content="This is the content of the post."
          />
        </div>
        <div className=" rounded">
          <Post
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLFqEZHDEhRBZlbwPH5_ko44UqYbBp0QBS3g&s"
            title="Post Title"
            content="This is the content of the post."
          />
        </div>
        <div className=" rounded">
          <Post
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ455Hmpf2x6EeNRtrZjJyxXgBtoNlJWh26w&s"
            title="Post Title"
            content="This is the content of the post."
          />
        </div>
        <div className=" rounded">
          <Post
            image="https://www.elsoldechilpancingo.mx/wp-content/uploads/2023/01/perro.jpeg"
            title="Post Title"
            content="This is the content of the post."
          />
        </div>
        <div className=" rounded">
          <Post
            image="https://mvsnoticias.com/u/fotografias/m/2023/7/3/f1280x720-547000_678675_5050.jpg"
            title="Post Title"
            content="This is the content of the post."
          />
        </div>
        <div className=" rounded">
          <Post
            image="https://circuitofrontera.com/wp-content/uploads/2021/07/Perros-callejeros.jpg"
            title="Post Title"
            content="This is the content of the post."
          />
        </div>
      </div>
    </div>
  );
}
