"use client";
import { useState } from "react";
import BodyLayout from "./ui/body-layout";
import Image from "next/image";

export default function Gallery() {
  const images = [
    "gallery1.jpg",
    "gallery2.jpg",
    "gallery3.jpg",
    "gallery4.jpg",
    "gallery5.jpg",
    "gallery6.jpg",
    "gallery7.jpg",
    "gallery8.jpg",
    "gallery9.jpg",
    "gallery10.jpg",
    "gallery11.jpg",
    "gallery12.jpg",
  ];

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <BodyLayout>
      <h2 className="text-2xl font-bold text-center">사진첩</h2>
      <div className="mt-6 grid gap-2 lg:gap-6 grid-cols-3">
            {images.map((image) => (
              <div key={image} className="group relative">
                <div
                  className="relative w-full overflow-hidden rounded-md bg-white aspect-w-1 aspect-h-1 group-hover:opacity-75"
                  onClick={() => setSelectedImage(selectedImage === image ? null : image)}
                >
                  <Image
                    alt={image}
                    src={`/image/${image}`}
                    className="h-full w-full object-cover object-center cursor-pointer"
                    width={800}
                    height={800}
                  />
                </div>
              </div>
            ))}
          </div> 
          {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-0 right-0 m-4 text-white"
              onClick={() => setSelectedImage(null)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <Image
              alt={selectedImage}
              src={`/image/${selectedImage}`}
              width={800}
              height={800}
              className="max-h-screen max-w-screen cursor-pointer"
              onClick={() => setSelectedImage(null)}
            />
          </div>
        </div>
      )}
    </BodyLayout>
  );
}