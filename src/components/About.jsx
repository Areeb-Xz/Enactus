import React from "react";

export default function EducationSection() {
  return (
    <>
    <div className="flex mt-[3vh] items-center justify-center space-x-2 bg-white border border-gray-300 rounded-full px-5 py-2 shadow-sm w-fit mx-auto mb-4">
      <div className="w-6 h-6 flex items-center justify-center rounded-full bg-yellow-400 text-white font-bold">
        ?
      </div>
      <span className="text-gray-700 font-medium">What is Enactus?</span>
    </div>

    <div className="w-full bg-white py-10 px-6 flex flex-col lg:flex-row items-center gap-10 lg:gap-16 max-w-7xl mx-auto">
      {/* Left Section: Image */}
      <div className="relative w-full lg:w-1/2 flex justify-center">
        <img
          src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGl0Y2h8ZW58MHx8MHx8fDA%3D" // Replace with your image
          alt="Volunteers"
          className="rounded-2xl w-full max-w-md lg:max-w-full object-cover"
        />
      </div>






      {/* Right Section: Text Content */}
      <div className="w-full lg:w-1/2 space-y-5 text-center lg:text-left">
       
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-snug">
          Creating Young leaders everywhere using innovation and business skills
        </h1>
        <p className="text-gray-600 text-sm sm:text-base lg:text-lg max-w-lg mx-auto lg:mx-0">
          A national network of post-secondary student leaders committed to using business as a catalyst for positive social and environmental impact. The organization empowers young people to use innovation and entrepreneurship to tackle some of the world’s biggest problems.
        </p>

        {/* Stats Section */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-6 justify-center lg:justify-start">
          <div className="flex-1 text-center py-4 bg-[#fdf1c8] shadow-md rounded-xl border">
            <p className="text-xs sm:text-sm text-gray-500">Student Members Worldwide</p>
            <p className="text-xl sm:text-2xl font-bold mt-1 sm:mt-2">42,000+</p>
          </div>
          <div className="flex-1 text-center py-4 bg-[#30333C] shadow-md rounded-xl border-1 border-[#fdf1c8] ">
            <p className="text-xs sm:text-sm text-[#fdf1c8] ">Lives Impacted</p>
            <p className="text-xl sm:text-2xl text-[#fdf1c8] font-bold mt-1 sm:mt-2">13.1M</p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
