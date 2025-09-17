import React from "react";

const ImpactPrograms = () => {
  const programs = [
    {
      number: "Top 15 teams",
      title: "World Engg. Day",
      desc: "As a team, we developed an AR Home Builder app that leverages augmented reality to help people design and build strong, affordable, and sustainable homes.",
      bg: "bg-[#e8eae2] text-grey-400",
      link: "https://www.youtube.com/watch?v=yvMNwq-HnW4",
      hover: "bg-[#30333C]"
    },
    {
      number: "1st Place",
      title: "ESA Case Comp",
      desc: "We presented effective strategies to address the impact of tariffs imposed on Canada by the USA. We also created a machine learning model that shows trends based on tarrif changes.",
      bg: "bg-[#30333C] text-white",
      link: "https://www.linkedin.com/company/economics-student-association---york-university/posts/?feedView=all",
      hover: "bg-[#e8eae2]"
    },
    {
      number: "3rd Place",
      title: "Rain it in",
      desc: "We pitched bioswales as an innovative solution to mitigate flooding caused by heavy rainfall in the Peterborough region.",
      bg: "bg-yellow-400 text-grey-400",

    },
  ];

  return (
    <section className="py-16 px-6 md:px-12">
  <div className="text-center mb-12">
    <div className="flex items-center justify-center space-x-2 bg-white border border-gray-300 rounded-full px-5 py-2 shadow-sm w-fit mx-auto mb-4">
      <div className="w-6 h-6 flex items-center justify-center rounded-full bg-yellow-400 text-white font-bold">
        ✤
      </div>
      <span className="text-gray-700 font-medium">Participations</span>
    </div>
   <h2 className="mt-6 text-4xl md:text-5xl font-extrabold text-black">
    Events We Excelled In
   </h2>
   <br/>
    <p className="text-black max-w-xl mx-auto text-base md:text-lg">
      As team Enactus York we have participated and excelled in several competitons and Hackethons 
    </p>
  </div>

  {/* Programs Grid */}
  <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
    {programs.map((program, index) => (
      <div
        key={index}
        className={`rounded-2xl p-6 md:p-8 shadow-md hover:shadow-xl hover:-translate-y-1 transition transform flex flex-col justify-between ${program.bg}`}
      >
        <div>
          <h3 className="text-4xl font-extrabold mb-2">{program.number}</h3>
          <p className="text-lg font-semibold mb-3">{program.title}</p>
          <p className={`text-sm md:text-base text-${program.text}`}>{program.desc}</p>
        </div>
        <div className="mt-6">
          <button className="bg-white text-black rounded-full p-2 hover:bg-yellow-400 transition" onClick={() => window.location.href = `${program.link}`}>
            →
          </button>
        </div>
      </div>
    ))}
  </div>
</section>

  );
};

export default ImpactPrograms;
