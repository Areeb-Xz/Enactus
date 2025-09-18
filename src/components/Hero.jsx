import React from "react";

const Hero = () => {
  return (
    <>
      <div className="h-screen w-full">
        
        <svg className="w-full h-full hidden lg:block">
          <defs >
            <clipPath id="roundedShape" clipPathUnits="objectBoundingBox">
              <path
                d="M 0.07,0.15
                   A 0.03,0.03 0 0 0 0.04,0.18 
                   L 0.04,0.57
                   A 0.03,0.03 0 0 0 0.07,0.60 
                   L 0.55,0.60 
                   A 0.03,0.03 0 0 1  0.58,0.63 
                   L 0.58,0.73 
                   A 0.03,0.03 0 0 0 0.61,0.76 
                   L 0.73,0.76
                   A 0.03,0.03 0 0 1 0.76,0.79 
                   L 0.76,0.95 
                   A 0.03,0.03 0 0 0 0.79,0.98 
                   L 0.93,0.98 
                   A 0.03,0.03 0 0 0 0.96,0.95 
                   L 0.96,0.18 
                   A 0.03,0.03 0 0 0 0.93,0.15 
                   Z"
              />
            </clipPath>
          </defs>

          
          <image
            href="https://images.unsplash.com/39/lIZrwvbeRuuzqOoWJUEn_Photoaday_CSD%20%281%20of%201%29-5.jpg?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTR8fG1lZXRpbmd8ZW58MHx8MHx8fDA%3D"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            clipPath="url(#roundedShape)"
          />
        </svg>

  
          <div className="w-[93vw] mt-[14vh] h-[50vh] bg-amber-400 mx-auto block lg:hidden rounded-[5vw] overflow-hidden">
  <img
    src="https://images.unsplash.com/39/lIZrwvbeRuuzqOoWJUEn_Photoaday_CSD%20%281%20of%201%29-5.jpg?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTR8fG1lZXRpbmd8ZW58MHx8MHx8fDA%3D"
    className="w-full h-full object-cover"
  />
</div>
        
      </div>



      <section className="w-full bg-white py-16 px-6 md:px-12 flex justify-center">
        <div className="max-w-4xl text-center">
          
          <h1 className="text-[4.5rem]  font-extrabold text-[#30333C] leading-tight absolute top-[65vh] left-[8vw]">
            Enactus York
          </h1>

          
          <p className="-mt-4 text-gray-700 text-left text-lg sm:text-xl max-w-2xl mx-auto absolute top-[80vh] left-[8vw]">
            Enactus is a global organization utilizing entrepreneurship to drive
            positive social change.
          </p>

          <p className="-mt-4 text-gray-600 text-left text-base sm:text-lg max-w-2xl mx-auto absolute top-[88vh] left-[8vw]">
            Here at Enactus York, we create projects, host events and compete in
            competitions to better our local community in Toronto.
          </p>
        </div>
      </section>

      <div className="-mt-60 block lg:hidden w-full bg-amber-400 overflow-hidden py-4">
  <div className="flex whitespace-nowrap animate-marquee">
    <span className="mx-8 text-lg font-semibold">🚀 Welcome to Enactus York</span>
    <span className="mx-8 text-lg font-semibold">📢 Stay tuned for updates!</span>

    {/* Duplicate content for seamless looping */}
    <span className="mx-8 text-lg font-semibold">🚀 Welcome to Enactus York</span>
    <span className="mx-8 text-lg font-semibold">📢 Stay tuned for updates!</span>
  </div>
</div>

    </>
  );
};

export default Hero;
