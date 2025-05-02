import Post from "./Home/post";

export default function Dashboard() {
  return (
    <div className="p-4">
      <div className="grid grid-cols-3 gap-4 bg-white p-4 rounded shadow">
        <div className=" rounded">
          <Post
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP41ZQTu33kh-vcHGAWBKbA9TUUESJ7edSnQ&s"
            title="🐶 Buscamos a Max    "
            content="Perdido en San Benito, Hermosillo. Mestizo color café claro, collar rojo. 📞 662-123-4567"
          />
        </div>
        <div className=" rounded">
          <Post
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLFqEZHDEhRBZlbwPH5_ko44UqYbBp0QBS3g&s"
            title=" ¿Has visto a Luna?"
            content="Desapareció en Villa Satélite. Husky gris con ojos azules. Sin collar. 📞 662-555-9090"
          />
        </div>
        <div className=" rounded">
          <Post
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ455Hmpf2x6EeNRtrZjJyxXgBtoNlJWh26w&s"
            title="🐾 Se perdió Rocky"
            content="Zona Centro, Hermosillo. Criollo negro, orejas caídas. Muy amigable. 📞 662-888-1122"
          />
        </div>
        <div className=" rounded">
          <Post
            image="https://www.elsoldechilpancingo.mx/wp-content/uploads/2023/01/perro.jpeg"
            title="🐶 Perdido: Toby"
            content="Se fue en el fraccionamiento Los Arcos. Poodle blanco, lleva suéter azul. 📞 662-300-7766"
          />
        </div>
        <div className=" rounded">
          <Post
            image="https://mvsnoticias.com/u/fotografias/m/2023/7/3/f1280x720-547000_678675_5050.jpg"
            title=" Visto: Canela"
            content="Labradora dorada vista cerca de Colonia Pitic el 30 de abril. Tiene chip, parece perdida. 📞 662-999-3344"
          />
        </div>
        <div className=" rounded">
          <Post
            image="https://circuitofrontera.com/wp-content/uploads/2021/07/Perros-callejeros.jpg"
            title="Avistado Bruno"
            content="Perro joven sin collar visto en Revolución 2da sección. Tiene cicatriz en la pata trasera. 📞 662-777-2221"
          />
        </div>
      </div>
    </div>
  );
}
