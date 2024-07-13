import React, { useState } from "react";
import "../App.css";
import { user } from "../index";

function Projects() {
  const [selectedFilter, setSelectedFilter] = useState("All");

  const filterProjects = (filter) => {
    // Update the selected filter
    setSelectedFilter(filter);
  };

  const sortProjects = () => {
    // Sort the projects based on their number
    user.projects.sort((a, b) => a.number - b.number);
  };

  const getFilteredProjects = () => {
    if (selectedFilter === "All") {
      return user.user.projects;
    }
    return user.user.projects.filter((project) =>
      project.techStack.some((stack) => stack.trim() === selectedFilter)
    );
  };

  return (
    <section
      className="md:p-8 p-4 relative bg-black text-peri-winkle"
      id="projects"
    >
      <h3 className="text-4xl md:text-6xl font-semibold md:px-4 px-2 pb-10 mx-auto md:pl-16">
        <span className="inline-block overflow-hidden text-white/40 opacity-100 transform-none">
          Selected
        </span>
        <br />
        <span className="inline-block overflow-hidden opacity-100 transform-none text-[#bfbfc6]">
          works
        </span>
      </h3>

      {/* Filtering and Sorting Buttons */}
      <div className="flex flex-wrap gap-2 justify-center mb-4">
        <button
          className={`border px-4 py-2 rounded-full text-white ${
            selectedFilter === "All" ? "bg-blue-500" : "bg-gray-800"
          }`}
          onClick={() => filterProjects("All")}
        >
          All
        </button>
        <button
          className={`border px-4 py-2 rounded-full text-white ${
            selectedFilter === "Reactjs" ? "bg-blue-500" : "bg-gray-800"
          }`}
          onClick={() => filterProjects("Reactjs")}
        >
          Reactjs
        </button>
        <button
          className={`border px-4 py-2 rounded-full text-white ${
            selectedFilter === "Nextjs" ? "bg-blue-500" : "bg-gray-800"
          }`}
          onClick={() => filterProjects("Nextjs")}
        >
          Nextjs
        </button>
        <button
          className={`border px-4 py-2 rounded-full text-white ${
            selectedFilter === "Redux" ? "bg-blue-500" : "bg-gray-800"
          }`}
          onClick={() => filterProjects("Redux")}
        >
          Redux
        </button>
        <button
          className={`border px-4 py-2 rounded-full text-white ${
            selectedFilter === "Firebase" ? "bg-blue-500" : "bg-gray-800"
          }`}
          onClick={() => filterProjects("Firebase")}
        >
          Firebase
        </button>
        <button
          className={`border px-4 py-2 rounded-full text-white ${
            selectedFilter === "TailwindCSS" ? "bg-blue-500" : "bg-gray-800"
          }`}
          onClick={() => filterProjects("TailwindCSS")}
        >
          TailwindCSS
        </button>
        {/* Add more buttons for other filters */}
        <button
          className={`border px-4 py-2 rounded-full text-white ${
            selectedFilter === "Sort" ? "bg-blue-500" : "bg-gray-800"
          }`}
          onClick={sortProjects}
        >
          Sort
        </button>
      </div>

      <div className="grid md:grid-cols-3 grid-cols-2 md:gap-6 gap-3 transform-none transform-origin-center">
        {getFilteredProjects().map((project, index) => (
          <div key={index} style={{ opacity: "1" }} className="relative ">
            <div className="group relative rounded-xl md:rounded-3xl overflow-hidden aspect-square bg-secondary/30 md:px-4 transform-none transform-origin-center">
              <div className="absolute top-2 right-2 w-full h-full flex justify-end md:hidden">
                <div className="bg-white size-8 rounded-full text-black grid place-items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-arrow-up-right "
                  >
                    <path d="M7 7h10v10"></path>
                    <path d="M7 17 17 7"></path>
                  </svg>
                </div>
              </div>
              <div className="md:py-8 relative">
                <div
                  className="flex justify-between items-center max-md:hidden"
                  style={{ transform: "none" }}
                >
                  <p className="text-sm md:text-xl font-semibold max-md:opacity-0">
                    {project.title}
                  </p>
                  <button className="flex gap-2 items-center justify-center max-md:px-4">
                    <div className="relative overflow-hidden whitespace-pre max-md:text-sm">
                      <a href={project.liveurl} className="overflow-hidden">
                        <span className="inline-block whitespace- transform-none transform-origin-center">
                          Visit
                        </span>
                      </a>
                      <a
                        href={project.liveurl}
                        className="absolute left-0 top-0"
                      >
                        <span className="inline-block whitespace- transform-none transform-origin-center">
                          Visit
                        </span>
                      </a>
                    </div>
                    <span className="bg-black text-white/80 rounded-full p-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-arrow-up-right size-4 md:size-6"
                      >
                        <path d="M7 7h10v10"></path>
                        <path d="M7 17 17 7"></path>
                      </svg>
                    </span>
                  </button>
                </div>
                <div className="itemContainer">
                  <div className="overflow-hidden max- group-hover:opacity-100 opacity-0 md:hover:opacity-100 transition-all duration-500 ease-in-out h-12 group-hover-translate-y-12">
                    <p
                      className="absolute text-white/50"
                      style={{ opacity: "1", transform: "none" }}
                    >
                      {project.description}
                    </p>
                  </div>
                  <img
                    alt={project.title}
                    src={project.image.url}
                    loading="lazy"
                    width="500"
                    height="500"
                    decoding="async"
                    data-nimg="1"
                    className="object-cover h-full w-full object-center rounded-xl md:rounded-t-3xl group-hover:scale-50 group-hover:translate-y-4 transition-all duration-500 ease-in-out"
                    style={{ color: "transparent" }}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
