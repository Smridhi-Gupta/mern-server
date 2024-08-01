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

      <table className="w-full border-collapse lg-w-[1180px]">
        <thead>
          <tr>
            <th>NO.</th>
            <th>BOOK NAME</th>
            <th>AUTHOR NAME</th>
            <th>CATEGORY</th>
            <th>PRICES</th>
            <th>EDIT OR MANAGE</th>
          </tr>
        </thead>
        {allBooks.map((book, index) => (
          <tbody>
            <tr key={book._id} className="border-b border-gray-300">
              <td className="whitespece-nowrap font-medium text-gray-900 dark:text-white">{index + 1}</td>
              <td className="whitespece-nowrap font-medium text-gray-900 dark:text-white">{book.bookTitle}</td>
              <td>{book.authorName}</td>
              <td>{book.category}</td>
              <td>$10.00</td>
              <td>
                <Link
                  to={`/admin/dashboard/edit-books/${book._id}`}
                  className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                >
                  Edit
                </Link>
                <button className="">Delete</button>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default ManageBooks;
