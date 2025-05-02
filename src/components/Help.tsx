import { useState } from "react";

export default function Help() {
  const [searchTerm, setSearchTerm] = useState("");
  const mockData = [
    {
      id: 1,
      title: "How to use the application?",
      content:
        "This section explains how to navigate and use the application effectively.",
    },
    {
      id: 2,
      title: "Frequently Asked Questions",
      content: "Find answers to the most commonly asked questions here.",
    },
    {
      id: 3,
      title: "Contact Support",
      content: "If you need further assistance, reach out to our support team.",
    },
  ];

  const filteredData = mockData.filter(
    (item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col w-full p-4 bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Help & Support</h1>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="p-2 border border-gray-300 rounded mb-4"
      />
      <div className="flex flex-col space-y-4">
        {filteredData.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-md rounded-lg p-4 w-full"
          >
            <h2 className="text-xl font-bold">{item.title}</h2>
            <p className="mt-2">{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
