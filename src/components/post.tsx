import { FaFacebook, FaInstagram, FaTwitter, FaTiktok } from "react-icons/fa";

export default function Post() {
  return (
    <>
      <div className="flex flex-col flex-grow p-4">
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-xl font-bold">Post Title</h2>
          <p className="mt-2">This is the content of the post.</p>
          <div className="mt-4 flex space-x-4">
            <FaFacebook
              className="text-gray-800 hover:text-blue-600"
              size={24}
            />
            <FaInstagram
              className="text-gray-800 hover:text-pink-600"
              size={24}
            />
            <FaTwitter
              className="text-gray-800 hover:text-blue-400"
              size={24}
            />
            <FaTiktok className="text-gray-800 hover:text-black" size={24} />
          </div>
        </div>
      </div>
    </>
  );
}
