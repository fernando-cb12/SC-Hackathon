export default function News() {
  return (
    <>
      <div className="flex flex-col flex-grow p-4">
        <div className="bg-white shadow-md rounded-lg p-4 w-75">
          <h2 className="text-xl font-bold">News Title</h2>
          <p className="mt-2">This is the content of the new.</p>
          <img
            src="https://via.placeholder.com/150"
            alt="News"
            className="mt-2 rounded-lg"
          />
          <div className="mt-4 flex space-x-4"></div>
        </div>
      </div>
    </>
  );
}
