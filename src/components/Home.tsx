import Post from "./Home/post";
import News from "./Home/news";

export default function Home() {
  return (
    <div className="flex w-full px-10 gap-8">
      <div className="w-3/4 ml-10">
        <Post
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu4IjV863T3Twwpku5QvbbVDVZqvMAFT6wow&s"
          title="🐶 ¡Se busca a Max!"
          content="Max se extravió el 29 de abril en la colonia San Benito, Hermosillo. Es un perrito mestizo, color café claro, con una mancha blanca en el pecho. Llevaba un collar rojo al momento de perderse. Es muy dócil y responde a su nombre.
Si lo has visto o sabes algo, por favor comunícate al 📞 662-123-4567.
¡Ayúdanos a que vuelva a casa! 🏡💔"
        />
      </div>

      <div className="w-1/4 flex flex-col space-y-4 ml-64">
        <News
          image="https://www.canuto.com.mx/cdn/shop/articles/como-elegir-perro-en-adopcion.jpg?v=1604432973"
          title="🐶 ¡Adoptar no basta!"
          content="En Sonora, la sobrepoblación de perros callejeros sigue creciendo..."
        />
        <News
          image="https://www.quadratin.com.mx/www/wp-content/uploads/2019/02/FERIA-ADOPCION-FEB-19-1-1160x700.jpg"
          title="🐕 Feria de adopciones en Hermosillo"
          content="70 perritos buscan hogar..."
        />
        <News
          image="https://cdn.milenio.com/uploads/media/2019/07/20/mexico-numero-mascotas-abandonadas-inegi_0_65_1024_638.jpg"
          title="🏡 Nuevo albergue para perritos rescatados"
          content="“Vidas con Causa” y Protección Animal de Hermosillo..."
        />
        <News
          image="https://www.clinicaveterinariazarpa.com/wp-content/uploads/2023/02/zarpa-campana-esterilizacion-515x515-1.jpg"
          title="📢 Campaña permanente: esteriliza y salva vidas"
          content="El Ayuntamiento de Hermosillo ofrece jornadas gratuitas..."
        />
      </div>
    </div>
  );
}
