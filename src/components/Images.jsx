import baivab1 from "../assets/images/mustangImage.jpeg";
import baivab2 from "../assets/images/basantapurImage.jpeg";
import baivab3 from "../assets/images/hackathonImage.jpeg";
import baivab4 from "../assets/images/presentationImage.jpeg";
import baivab5 from "../assets/images/planeImage.jpg";
import baivab6 from "../assets/images/codingImage.jpeg";
import baivab7 from "../assets/images/muktinath.jpeg";

const images = [
  baivab1,
  baivab2,
  baivab3,
  baivab4,
  baivab5,
  baivab6,
  baivab7,
];

const Images = () => {
  return (
    <section className="w-full py-10">
      {/* Same width style as Header */}
      <div className="container mx-auto px-4">
        
        {/* Marquee container */}
        <div className="relative overflow-hidden rounded-xl">
          
          {/* Left fade */}
          <div className="absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-white to-transparent pointer-events-none" />

          {/* Right fade */}
          <div className="absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-white to-transparent pointer-events-none" />

          {/* Moving container */}
          <div className="group overflow-hidden">
            <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
              
              {/* First set */}
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`mx-4 h-64 w-64 shrink-0 overflow-hidden rounded-xl ${
                    index % 2 === 0 ? "rotate-2" : "-rotate-2"
                  }`}
                >
                  <img
                    src={image}
                    alt={`Baivab ${index + 1}`}
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}

              {/* Duplicate set */}
              {images.map((image, index) => (
                <div
                  key={`duplicate-${index}`}
                  className={`mx-4 h-64 w-64 shrink-0 overflow-hidden rounded-xl ${
                    index % 2 === 0 ? "rotate-2" : "-rotate-2"
                  }`}
                >
                  <img
                    src={image}
                    alt={`Baivab ${index + 1}`}
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Images;