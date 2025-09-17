import React from "react";

function Card({ title }) {
  return (
    <>
      <div className="max-w-sm bg-white rounded-xl shadow-lg p-5">
        <img
          src="https://images.unsplash.com/photo-1757752462906-62c319c5082d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyN3x8fGVufDB8fHx8fA%3D%3D"
          alt="Card Image"
          className="w-full h-40 object-cover rounded-md"
        />
        <h2 className="mt-4 text-xl font-bold text-gray-800">{title}</h2>
        <p className="mt-2 text-gray-600 text-sm">
          Ye ek simple card hai jo Tailwind CSS se styled hai. Tum isko apne
          project ke hisaab se modify kar sakte ho.
        </p>
        <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
          {title}
        </button>
      </div>
    </>
  );
}

export default Card;
