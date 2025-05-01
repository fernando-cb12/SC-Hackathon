export default function News({
  image,
  title,
  content,
}: {
  image: string;
  title: string;
  content: string;
}) {
  return (
    <>
      <div className="flex flex-col flex-grow p-4">
        <div className="bg-white shadow-md rounded-lg p-4 w-75">
          <h2 className="text-xl font-bold">{title}</h2>
          <p className="mt-2">{content}</p>
          <img src={image} alt="News" className="mt-2 rounded-lg" />
          <div className="mt-4 flex space-x-4"></div>
        </div>
      </div>
    </>
  );
}
