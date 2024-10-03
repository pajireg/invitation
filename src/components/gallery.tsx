"use client";
import { useState, useEffect } from "react";
import BodyLayout from "./ui/body-layout";
import Title from "./ui/title";

export default function Gallery() {
  const images = [
    "https://1drv.ms/i/s!Ai8p48X6HRWGozBsg9pHPVtCvplb?embed=1&height=1024",
    "https://1drv.ms/i/s!Ai8p48X6HRWGozicssCXvFpAKfQ9?embed=1&width=1024",
    "https://1drv.ms/i/s!Ai8p48X6HRWGozJtKAaraU52Bjo7?embed=1&width=1024",
    "https://1drv.ms/i/s!Ai8p48X6HRWGoy5beoZ7pKPnqRaV?embed=1&width=1024",
    "https://1drv.ms/i/s!Ai8p48X6HRWGozTdDlqj_oHTzXup?embed=1&height=1024",
    "https://1drv.ms/i/s!Ai8p48X6HRWGozEuZhUHZPpMwnhJ?embed=1&height=1024",
    "https://1drv.ms/i/s!Ai8p48X6HRWGoy1CKt0OOwbo2-VA?embed=1&height=1024",
    "https://1drv.ms/i/s!Ai8p48X6HRWGozUVD7aGruR2qg4I?embed=1&height=1024",
    "https://1drv.ms/i/s!Ai8p48X6HRWGozcZ3MssYptcdrq-?embed=1&height=1024",
    "https://1drv.ms/i/s!Ai8p48X6HRWGoy9lRrCLrU07UbGC?embed=1&height=1024",
    "https://1drv.ms/i/s!Ai8p48X6HRWGozZnGztBdfS1fT0E?embed=1&height=1024",
    "https://1drv.ms/i/s!Ai8p48X6HRWGoyyidGLtObwzhM5p?embed=1&width=1024",
  ];

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [selectedImage]);

  const handleNextImage = () => {
    if (selectedImage) {
      const currentIndex = images.indexOf(selectedImage);
      const nextIndex = (currentIndex + 1) % images.length;
      setSelectedImage(images[nextIndex]);
    }
  };

  const handlePrevImage = () => {
    if (selectedImage) {
      const currentIndex = images.indexOf(selectedImage);
      const prevIndex = (currentIndex - 1 + images.length) % images.length;
      setSelectedImage(images[prevIndex]);
    }
  };

  return (
    <BodyLayout>
      <Title title="GALLERY" />
      <div className="mt-6 grid gap-2 lg:gap-6 grid-cols-3 py-4">
        {images.map((image) => (
          <div key={image} className="group relative">
            <div
              className="relative w-full overflow-hidden rounded-md bg-white aspect-w-1 aspect-h-1 group-hover:opacity-75"
              onClick={() => setSelectedImage(selectedImage === image ? null : image)}
            >
              <img
                alt={image}
                src={`${image}`}
                className="h-full w-full object-cover object-center cursor-pointer"
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
              className="absolute top-3 right-3 text-white bg-black bg-opacity-50 rounded-full p-2"
              onClick={() => setSelectedImage(null)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <button
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 rounded-full p-2"
              onClick={handlePrevImage}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 rounded-full p-2"
              onClick={handleNextImage}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
            <img
              alt={selectedImage}
              src={`${selectedImage}`}
              className="max-h-screen max-w-screen cursor-pointer object-contain"
            />
          </div>
        </div>
      )}
    </BodyLayout>
  );
}