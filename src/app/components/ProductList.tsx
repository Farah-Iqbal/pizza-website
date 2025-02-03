
import React from 'react';

const products = [
  {
    id: 1,
    title: "Signature Pizzas",
    price: "417.00",
    imageUrl: "https://www.yellowtaxipizzaco.com/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1651864412-pest.jpeg%3Fq%3D10&w=640&q=75",
    bg: "bg-cyan-500",
  },
  {
    id: 2,
    title: "Special Three Layered Pizza",
    price: "1304.00",
    imageUrl: "https://www.yellowtaxipizzaco.com/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1646915726-Untitled-1.jpg%3Fq%3D10&w=640&q=75",
    bg: "bg-teal-500",
  },
  {
    id: 3,
    title: "Classic Pizzas",
    price: "417.00",
    imageUrl: "https://www.yellowtaxipizzaco.com/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1625118498-ch-sup.jpg%3Fq%3D10&w=640&q=75", // Updated image URL
    bg: "bg-amber-500",
  },
];

export default function ProductList() {
  return (
    <div className="p-4 flex flex-wrap items-center justify-center gap-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="relative flex flex-col w-64 h-80 overflow-hidden rounded-lg shadow-lg"
        >
          <div className="relative w-full h-full">
            <img
              src={product.imageUrl}
              alt={product.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white p-4">
            <div className="flex justify-between items-center">
              <span className="block font-semibold text-lg">{product.title}</span>
              <span className="block bg-white rounded-full text-orange-500 text-xs font-bold px-3 py-1">
                {product.price}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

