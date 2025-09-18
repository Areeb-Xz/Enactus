import React from "react";

const programs = [
  {
    id: 1,

    title: "Spark-Aid",
    description:
      "Our mission is to uplift non-profit organizations by providing them the tools they need to reach more people, share their stories, and make a bigger difference.",
    image:
      "https://images.unsplash.com/photo-1643321611132-15f7b8a63347?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNoYXJpdHl8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 2,
    title: "Project APAC",
    description:
      "Project APAC is a student-led nonprofit that empowers Canadians to recognize, prevent, and report scams, fostering a safer digital community through education and engagement.",
    image:
      "https://images.unsplash.com/photo-1548092372-0d1bd40894a3?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fGNvbXB1dGVyfGVufDB8fDB8fHww",
  },
  {
    id: 3,
    title: "Scale-Aid",
    description:
      "Our mission is to provide effective consultation to impact-driven startups, NGOs, and companies, enabling them to manage their charity and donationrelated activities with greater ease and efficiency",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fGNvbnN1bHRpbmd8ZW58MHx8MHx8fDA%3D",
  },
];

const Projects = () => {
  return (
    <>
      <section className="w-full flex flex-col items-center text-center py-16 px-6">
        <div className="flex items-center space-x-2 bg-white border border-gray-300 rounded-full px-4 py-2 shadow-sm">
          <div className="w-6 h-6 flex items-center justify-center rounded-full bg-yellow-400 text-white font-bold">
            •
          </div>
          <span className="text-gray-700 font-medium">Our Projects</span>
        </div>

        <h2 className="mt-6 text-4xl md:text-5xl font-extrabold text-black">
          Our Imapctful Student Ventures
        </h2>

        <p className="mt-4 max-w-2xl text-lg text-gray-500">
          We are currently leading three impactful projects designed to create
          meaningful change in society.
        </p>
      </section>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 py-12 w-full max-w-[1400px] mx-auto">
        {programs.map((program) => (
          <div
            key={program.id}
            className="bg-white rounded-3xl shadow-md border border-gray-200 overflow-hidden flex flex-col hover:shadow-lg transition"
          >
            <img
              src={program.image}
              alt={program.title}
              className="w-full h-56 object-cover"
            />

            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-lg font-bold mb-2">{program.title}</h3>
              <p className="text-gray-600 text-sm mb-4 flex-grow">
                {program.description}
              </p>
              <button className="w-full py-2 border rounded-full font-medium hover:bg-gray-100 transition">
                Visit Website
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Projects;
