import { Carousel } from "flowbite-react";


export default function Caroseul() {
  return (
    <div className="h-94 sm:h-72 xl:h-80 2xl:h-96 custom-scrollbar">
      <Carousel>
        {/* Slide 1 */}
        <div className="flex h-full items-center justify-center bg-green-400 p-6">
          <div style={{ width: '220px', height: '220px' }}>
            <img
              src="./Images/review4.jpg"
              className="rounded-[50%]" // Slightly increased border radius
              width="100%"
              height="100%"
              alt="Review 1"
            />
          </div>
          <div className="ml-8 text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white font-bold">
              Julie Martel
            </h1>
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white mt-2">
              Lost 71 lb (35%) and maintained after 492 days.
            </h2>
            <h4 className="text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-white mt-4">
              “My life changed. My life is beautiful! I am beautiful!!!”
            </h4>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="flex h-full items-center justify-center bg-green-400 p-6">
          <div style={{ width: '220px', height: '220px' }}>
            <img
              src="./Images/Review2.jpg"
              className="rounded-[50%]" // Slightly increased border radius
              width="100%"
              height="100%"
              alt="Review 2"
            />
          </div>
          <div className="ml-8 text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white font-bold">
              John Doe
            </h1>
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white mt-2">
              Achieved a healthier lifestyle and sustained it for 365 days.
            </h2>
            <h4 className="text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-white mt-4">
              “I feel more energetic and confident. This journey was worth it!”
            </h4>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="flex h-full items-center justify-center bg-green-400 p-6">
          <div style={{ width: '220px', height: '220px' }}>
            <img
              src="./Images/Review3.jpg"
              className="rounded-[50%]" // Slightly increased border radius
              width="100%"
              height="100%"
              alt="Review 3"
            />
          </div>
          <div className="ml-8 text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white font-bold">
              Alice Smith
            </h1>
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white mt-2">
              Transformed her fitness and well-being over 1 year.
            </h2>
            <h4 className="text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-white mt-4">
              “The journey was challenging but so rewarding. I feel great!”
            </h4>
          </div>
        </div>
      </Carousel>
    </div>
  );
}
