import React from "react";

function Team() {
  return (
    <>
      <section className="w-full flex flex-col items-center text-center py-12 px-6 md:py-16">
        <div className="flex items-center space-x-2 bg-white border border-gray-300 rounded-full px-4 py-2 shadow-sm">
          <div className="w-6 h-6 flex items-center justify-center rounded-full bg-yellow-400 text-white font-bold">
            i
          </div>
          <span className="text-gray-700 font-medium">About us</span>
        </div>

        <h2 className="mt-4 md:mt-6 text-3xl sm:text-4xl md:text-5xl font-extrabold text-black">
          Who we are
        </h2>

        <p className="mt-2 md:mt-4 max-w-2xl text-md sm:text-lg text-gray-500 px-2 md:px-0">
          We are Enactus York, a student-led club that is part of the global
          Enactus network. Our mission is to empower students to create
          meaningful impact through entrepreneurship. We encourage students to
          share their innovative ideas and provide the support, resources, and
          guidance needed to turn those ideas into reality.
        </p>
      </section>

      <div className="w-full flex items-center justify-center px-4 md:px-8 -mt-8 md:-mt-12">
        <div className="relative w-full max-w-7xl min-h-[50vh] md:min-h-[70vh] bg-[#fdf1c8] rounded-3xl overflow-hidden flex flex-col lg:flex-row">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
      repeating-linear-gradient(to right, rgba(0,0,0,0.15) 0 1px, transparent 1px 45px),
      repeating-linear-gradient(to bottom, rgba(0,0,0,0.15) 0 1px, transparent 1px 45px)
    `,
              maskImage:
                "radial-gradient(circle at center, rgba(0,0,0,0.6), transparent 80%)",
              WebkitMaskImage:
                "radial-gradient(circle at center, rgba(0,0,0,0.6), transparent 80%)",
            }}
          />

          <div className="relative flex-1 flex items-center justify-center px-6 md:px-12 py-10">
            <div className="absolute -left-10 top-1/2 -translate-y-1/2 w-96 h-96 bg-green-200 rounded-full opacity-40 -z-10" />
            <div className="text-black max-w-lg">
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                Our Story
              </h3>
              <br />
              <p className="text-base sm:text-lg leading-relaxed">
                This club was revitalized in 2024 by{" "}
                <span className="font-semibold">Parmeet Singh</span>, who
                envisioned creating a strong platform to promote
                entrepreneurship among students. Through his dedication and
                consistent efforts, he built a passionate team of 15 members.
                Today, the club is driving three active projects and is led by
                Co-Presidents{" "}
                <span className="font-semibold">Parmeet Singh</span> and{" "}
                <span className="font-semibold">Prabhkrit Singh</span> with{" "}
                <span className="font-semibold">Mohammad Areeb</span> serving as
                Vice President to support and strengthen its operations. As a
                team, Enactus has actively participated in several competitions
                and hackathons, achieving multiple victories that highlight the
                dedication and excellence of our club.
              </p>
            </div>
          </div>

          <div className="flex-1 z-10 flex items-center justify-center p-6">
            <img
              src="assets/PHOTO-2025-09-17-01-12-51.jpg"
              alt="Our Story"
              className="rounded-2xl w-full max-w-md object-cover shadow-lg"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Team;
