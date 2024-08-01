import React, { useEffect, useState } from "react";
// import { Table } from "flowbite-react";

const ManageBooks = () => {
  const [allBooks, setAllBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/all-books")
      .then((res) => res.json())
      .then((data) => setAllBooks(data));
  }, []);
  console.log(allBooks);

  return (
    <div className="px-4 my-12 overflow-x-auto">
      <h2 className="mb-8 text-3xl font-bold">Manage Your Books</h2>

      {/* table for book data*/}

      <table className="w-full border-collapse lg-w-[1180px]">
        <thead>
          <tr>
            <th className="border-b">No</th>
            <th className="border-b">Book name</th>
            <th className="border-b">Author Name</th>
            <th className="border-b">Category</th>
            <th className="border-b">Prices</th>
            <th className="border-b">Edit or Manage</th>
          </tr>
        </thead>
        <tbody>
        {allBooks.map((book, index) => (
            <tr key={book._id} className="border-b border-gray-300">
              <td className="border border-gray-300 p-2">{index + 1}</td>
              <td className="border border-gray-300 p-2">{book.bookTitle}</td>
              <td className="border border-gray-300 p-2">{book.authorName}</td>
              <td className="border border-gray-300 p-2">{book.category}</td>
              <td className="border border-gray-300 p-2">$2900</td>
              <td className="border border-gray-300 p-2">
                <a href="#" className="text-cyan-600 hover:underline dark:text-cyan-500">Edit</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageBooks;
