import React, { useState } from "react";
import { useEffect } from "react";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import "../App.css";
import CustomCursor from "./CustomCursor";
import { user } from "../index.js";

function About() {
  const [openSections, setOpenSections] = useState({});

  // Function to toggle open/close state of a section

  const toggleSection = (sectionId) => {
    setOpenSections((prevState) => {
      const newState = { ...prevState };
      // If the clicked section is currently open, close it
      if (newState[sectionId]) {
        newState[sectionId] = false;
        return newState;
      }
      // If the clicked section is closed and there are other open sections, close them all
      const openSectionsCount = Object.values(newState).filter(
        (val) => val
      ).length;
      if (openSectionsCount > 0) {
        Object.keys(newState).forEach((key) => {
          newState[key] = false;
        });
      }
      // Open the clicked section
      newState[sectionId] = true;
      return newState;
    });
  };

  // Function to open the description of the first profile when the component mounts
  useEffect(() => {
    setOpenSections((prevState) => ({
      ...prevState,
      1: true, // Open the description of the first profile
    }));
  }, []);

  return (
    <>
      <section id="about" className="bg-black text-gray-100 py-20">
        <CustomCursor></CustomCursor>
        <div className="container mx-auto">
          <div className="flex justify-start px-2 text-2xl  text-gray-100 font-semibold uppercase">
            {user.user.about.quote}
          </div>
          <p className="flex justify-center text-wrap text-lg text-peri-winkle tracking-widest px-2 pb-10 ">
            {user.user.about.description}
          </p>
        </div>
        <div className="experience">
          <div className="work-experience border-b border-pastel-brown">
            <div className="position py-10 grid ">
              <div className="flex items-center justify-between gap-4 cursor-pointer">
                <span className="text-gray-50 font-normal">01</span>
                <span className="text-peri-winkle flex-1 font-bold text-xl">
                  {user.user.timeline[0].jobTitle}
                </span>
                <div
                  onClick={() => toggleSection(1)}
                  className="icon flex items-center justify-center w-4"
                  color="white"
                >
                  {openSections[1] ? <FaMinus /> : <FaPlus />}
                </div>
              </div>
            </div>
            {openSections[1] && (
              <div className="details text-peri-winkle transition-all ease-in-out duration-700">
                <div className="company px-2 pb-2 flex justify-between text-sm text-peri-winkle">
                  <p className="organiazation">
                    {user.user.timeline[0].company_name}
                  </p>
                  <p className="duration">05, 2024 - 06, 2024</p>
                </div>

                <ul className="list-disc text-peri-winkle pl-7">
                  {user.user.timeline[0].bulletPoints.map((item, index) => (
                    <li key={index} className="text-peri-winkle">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <div className="work-experience border-b border-pastel-brown">
            <div className="position pb-10 grid">
              <div className="flex items-center justify-between gap-4 cursor-pointer">
                <span className="text-gray-50 font-normal">02</span>
                <span className="text-peri-winkle flex-1 font-bold text-xl">
                  FullStack Developer
                </span>
                <div
                  onClick={() => toggleSection(2)}
                  className="icon flex items-center justify-center w-4"
                  color="white"
                >
                  {openSections[2] ? <FaMinus /> : <FaPlus />}
                </div>
              </div>
            </div>
            {openSections[2] && (
              <div className="details text-peri-winkle">
                <p className="px-2 pb-4">
                  Played a key role in developing a data analytics platform for
                  a diverse range of clients.
                </p>
                <div className="company px-2 pb-2 flex justify-between text-sm text-peri-winkle">
                  <p className="organiazation">XYZ Solutions New York, NY</p>
                  <p className="duration">03, 2024 - 03, 2024</p>
                </div>
                <ul className="list-disc text-peri-winkle pl-7">
                  <li className="text-peri-winkle">
                    Developed RESTful APIs and integrated third-party services
                    to ingest and process large volumes of data.
                  </li>
                  <li>
                    {" "}
                    Designed and implemented responsive user interfaces using
                    React.js and Bootstrap.{" "}
                  </li>
                  <li>
                    Worked closely with data scientists to integrate machine
                    learning models into the platform.
                  </li>
                  <li>
                    {" "}
                    Optimized database queries and improved overall system
                    performance.
                  </li>
                  <li>
                    {" "}
                    Conducted unit tests and participated in peer code reviews
                    to ensure code quality.
                  </li>
                </ul>
              </div>
            )}
          </div>
          <div className="work-experience border-b border-pastel-brown">
            <div className="position pb-10 grid">
              <div className="flex items-center justify-between gap-4 cursor-pointer">
                <span className="text-gray-50 font-normal">03</span>
                <span className="text-peri-winkle flex-1 font-bold text-xl">
                  Backend Developer
                </span>
                <div
                  onClick={() => toggleSection(3)}
                  className="icon flex items-center justify-center w-4"
                  color="white"
                >
                  {openSections[3] ? <FaMinus /> : <FaPlus />}
                </div>
              </div>
            </div>
            {openSections[3] && (
              <div className="details text-peri-winkle">
                <p className="px-2 pb-4">
                  Contributed to the development of a new social networking
                  platform targeting niche communities.
                </p>
                <div className="company px-2 pb-2 flex justify-between text-sm text-peri-winkle">
                  <p className="organiazation">XYZ Startup Los Angeles, CA</p>
                  <p className="duration">11, 2023 - 03, 2024</p>
                </div>
                <ul className="list-disc text-peri-winkle pl-7">
                  <li className="text-peri-winkle">
                    Developed scalable backend services using Python and Django
                    framework.
                  </li>
                  <li>
                    Optimized SiteImplemented user authentication and
                    authorization using OAuth 2.0 and JWT tokens.
                  </li>
                  <li>
                    Designed and optimized database schemas for performance and
                    scalability.
                  </li>
                  <li>
                    Implemented real-time messaging features using WebSockets
                    and Redis.
                  </li>
                  <li>
                    Worked closely with frontend developers to design APIs and
                    ensure smooth integration with the frontend.
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>

        <div className="relative py-10">
          <div className="sticky top-6">
            <img
              src={user.user.about.avatar.url}
              alt="John doe"
              loading="lazy"
              decoding="async"
              data-nimg="1"
              height="400"
              width="400"
              className="rounded-xl max-md:aspect-square object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
