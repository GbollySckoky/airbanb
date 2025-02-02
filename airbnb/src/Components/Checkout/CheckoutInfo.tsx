import { useState, useEffect } from 'react';
import YouTube from '../Utils/Reusable/Loading';
import Choose from '../Utils/Reusable/Choose';
import Skeleton from '@mui/material/Skeleton';

interface YouTubeProps {
  width?: number;
  height?: number;
}

interface CheckoutInfoProps extends YouTubeProps {
  images: string[];
  title: string;
  space: string[];
  productName: string;
  isLoading: boolean;
}

const CheckoutInfo = ({
  images,
  title,
  space,
  productName,
  isLoading,
}: CheckoutInfoProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const slideInterval = setInterval(() => {
      nextSlide();
    }, 3000); // 3000ms = 3 seconds

    return () => clearInterval(slideInterval); // Cleanup interval on component unmount
  }, [currentSlide]); // Re-run effect when currentSlide changes

  return (
    <div className="bg-white w-full self-start rounded-lg border ml-7 p-4">
      {/* Slider Container */}
      <div>
        {isLoading ? (
          <YouTube  />
        ) : (
          <div>
            <div className="slider-container overflow-hidden w-full relative">
              {/* Slide Wrapper */}
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {images.map((image, index) => (
                  <div key={index} className="min-w-full flex-shrink-0">
                    <img
                      src={image}
                      alt={`image ${index + 1}`}
                      className="h-[400px] w-full object-cover rounded-lg"
                    />
                  </div>
                ))}
              </div>

              {/* Navigation Buttons */}
              {images.length > 1 && (
                <>
                  <button
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-500 p-2 rounded-full text-white"
                    onClick={prevSlide}
                  >
                    ◀
                  </button>
                  <button
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-500 p-2 rounded-full text-white"
                    onClick={nextSlide}
                  >
                    ▶
                  </button>
                </>
              )}
            </div>

            {/* Product Details */}
            <div className="flex items-center justify-between my-2">
              <p className="font-semibold text-[14px] py-2">{title}</p>
              <p className="font-semibold text-[12px]">{productName}</p>
            </div>

            <div className="flex">
              {space?.map((pace, index) => (
                <p className="font-normal text-[14px] mr-3" key={index}>
                  {pace}
                </p>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Price Details Section */}
      <div className="bg-white shadow-md rounded-lg p-4 mt-6 mb-4 border">
        <h1 className="font-semibold text-[14px] my-3">Price Detail</h1>
        <div>
          <Choose text="Nights" value="Jan 7 – 12, 2025" btnText="Edit" />
        </div>
        <div className="flex items-center justify-between mt-6">
          <h1 className="font-semibold text-[12px]">Total</h1>
          {isLoading ? (
            <Skeleton width={80} height={20} />
          ) : (
            <p className="font-semibold text-[12px]">900000</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CheckoutInfo;
