"use client";
import { useState, useEffect } from "react";
import BodyLayout from "./ui/body-layout";
import Title from "./ui/title";
import Image from "next/image";

export default function Gallery() {
  const images = [
    "https://res.cloudinary.com/dxmhi8ebw/image/upload/v1734323029/01_i5spei.jpg",
    "https://res.cloudinary.com/dxmhi8ebw/image/upload/v1734323147/02_ysvo0j.jpg",
    "https://res.cloudinary.com/dxmhi8ebw/image/upload/v1734323147/03_lk3p4r.jpg",
    "https://res.cloudinary.com/dxmhi8ebw/image/upload/v1734323147/04_ka9s01.jpg",
    "https://res.cloudinary.com/dxmhi8ebw/image/upload/v1734323147/05_xvlqkh.jpg",
    "https://res.cloudinary.com/dxmhi8ebw/image/upload/v1734323148/06_gib5si.jpg",
    "https://res.cloudinary.com/dxmhi8ebw/image/upload/v1734323148/07_jfvbzn.jpg",
    "https://res.cloudinary.com/dxmhi8ebw/image/upload/v1734323148/08_ei59xl.jpg",
    "https://res.cloudinary.com/dxmhi8ebw/image/upload/v1734323148/09_cvyesg.jpg",
    "https://res.cloudinary.com/dxmhi8ebw/image/upload/v1734323148/10_mz4bua.jpg",
    "https://res.cloudinary.com/dxmhi8ebw/image/upload/v1734323148/11_zpizky.jpg",
    "https://res.cloudinary.com/dxmhi8ebw/image/upload/v1734323148/12_hjiyrw.jpg",
  ];

  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean[]>(Array(images.length).fill(true));

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
  const handleImageLoad = (index: number) => {
    setLoading((prevLoading) => {
      const newLoading = [...prevLoading];
      newLoading[index] = false;
      return newLoading;
    });
  };

  return (
    <BodyLayout>
      <Title title="GALLERY" />
      <div className="mt-6 grid gap-2 lg:gap-6 grid-cols-3 py-4">
        {images.map((image, index) => (
          <div key={image} className="group relative">
            <div
              className="relative w-full overflow-hidden rounded-md bg-white aspect-w-1 aspect-h-1 group-hover:opacity-75"
              onClick={() => setSelectedImage(selectedImage === image ? null : image)}
            >
              {loading[index] && (
                <div className="absolute w-full h-full animate-pulse">
                  <div className="flex items-center justify-center w-full h-full bg-gray-300 sm:w-96 dark:bg-gray-700">
                    <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                      <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
                    </svg>
                  </div>
                </div>
              )}
              <Image
                alt={image}
                src={`${image}`}
                width={200}
                height={200}
                className={`h-full w-full object-cover object-center cursor-pointer ${
                  loading[index] ? 'opacity-0' : 'opacity-100'
                }`}
                onLoad={() => handleImageLoad(index)}
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
            <Image
              alt={selectedImage}
              src={`${selectedImage}`}
              width={600}
              height={600}
              className="max-h-screen max-w-screen cursor-pointer object-contain"
            />
          </div>
        </div>
      )}
    </BodyLayout>
  );
}