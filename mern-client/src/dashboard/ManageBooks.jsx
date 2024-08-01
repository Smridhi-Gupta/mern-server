import React, { useEffect, useState } from "react";
// import { Table } from "flowbite-react";
import { Link } from "react-router-dom";

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

      <table className="w-full border-collapse lg-w-[1180px] text-left text-gray-500 dark:text-gray-400 shadow-xl rounded-sm">
        <thead className="text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th className="px-6 py-3">No.</th>
            <th className="px-6 py-3">Book Name</th>
            <th className="px-6 py-3">Author Name</th>
            <th className="px-6 py-3">Category</th>
            <th className="px-6 py-3">Prices</th>
            <th className="px-6 py-3">Edit Or Manage</th>
          </tr>
        </thead>
        {allBooks.map((book, index) => (
          <tbody>
            <tr
              key={book._id}
              className="bg-white border-b dark:bg-gray-800 drak:border-gray-700"
            >
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {index + 1}
              </td>
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {book.bookTitle}
              </td>
              <td className="px-6 py-4">{book.authorName}</td>
              <td className="px-6 py-4">{book.category}</td>
              <td className="px-6 py-4">$10.00</td>
              <td className="px-6 py-4">
                <Link
                  to={`/admin/dashboard/edit-books/${book._id}`}
                  className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                >
                  Edit
                </Link>
                <button className="bg-red-600 px-4 py-1 font-semibold text-white rounded-sm">
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default ManageBooks;
