import { useEffect, useState } from "react";
import img1 from "../assets/imgSlider-1.jpg";
import img2 from "../assets/imgSlider-2.jpg";
import img3 from "../assets/imgSlider-3.jpg";

function ImageSlider() {
  const imgs = [img1, img2, img3];
  const [currentImg, setCurrentImg] = useState(0);

  const handleNextImg = () => {
    setCurrentImg((prev) => (prev === imgs.length - 1 ? 0 : prev + 1));
  };

  const handlePrevImg = () => {
    setCurrentImg((prev) => (prev === 0 ? imgs.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNextImg();
    }, 3000);

    return () => clearInterval(interval);
  }, [handleNextImg]);

  return (
    <div className="max-w-[100vw] overflow-hidden relative">
      <div
        className="flex  w-[300vw] max-h-screen-60 transition-all duration-[0.5s] ease"
        style={{
          transform: `translateX(-${currentImg * 100}vw)`,
        }}
      >
        <img src={img1} className="w-[100vw] object-cover" />
        <img src={img2} className="w-[100vw] object-cover" />
        <img src={img3} className="w-[100vw] object-cover" />
      </div>
      <div className="absolute text-5xl top-[80%] left-[50%] translate-x-[-50%] flex gap-[20px]">
        <i onClick={handlePrevImg} className="bg-white rounded-full bx bx-chevrons-left"></i>
        <i onClick={handleNextImg} className="bg-white rounded-full bx bx-chevrons-right"></i>
      </div>
    </div>
  );
}

export default ImageSlider;
