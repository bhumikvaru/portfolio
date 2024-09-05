import React from "react";
import HTML from "../assets/logos/html.png";
import CSS from "../assets/logos/css.png";
import JavaScript from "../assets/logos/javascript.png";
import Reacting from "../assets/logos/react.png";
import Node from "../assets/logos/Node.png";
import MongoDB from "../assets/logos/mongo.png";
import Tailwind from "../assets/logos/tailwind.png";
import GitHub from "../assets/logos/github.png";
import Firebase from "../assets/logos/firebase.png";
import AOS from "aos";
import "aos/dist/aos.css";
const Skills = () => {
  const techs = [
    {
      id: 1,
      src: HTML,
      title: "HTML",
      style: "shadow-orange-500",
      hoverEffect: "orange-500",
    },
    {
      id: 2,
      src: CSS,
      title: "CSS",
      style: "shadow-blue-500",
      hoverEffect: "blue-500",
    },
    {
      id: 3,
      src: JavaScript,
      title: "JavaScript",
      style: "shadow-yellow-500",
      hoverEffect: "yellow-500",
    },
    {
      id: 4,
      src: Reacting,
      title: "React",
      style: "shadow-blue-500",
      hoverEffect: "blue-500",
    },
    {
      id: 5,
      src: Node,
      title: "Node",
      style: "shadow-green-500",
      hoverEffect: "green-500",
    },
    {
      id: 6,
      src: MongoDB,
      title: "MongoDB",
      style: "shadow-green-500",
      hoverEffect: "green-500",
    },
    {
      id: 7,
      src: Tailwind,
      title: "Tailwind",
      style: "shadow-blue-500",
      hoverEffect: "blue-500",
    },
    {
      id: 8,
      src: GitHub,
      title: "GitHub",
      style: "shadow-gray-500",
      hoverEffect: "gray-500",
    },
    {
      id: 8,
      src: Firebase,
      title: "Google Firebase",
      style: "shadow-yellow-500",
      hoverEffect: "yellow-500",
    },
  ];
  return (
    <div id="skillsComponent" name="skills" className="w-full min-h-screen z-0">
      {/* Container */}
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full ">
        <div data-aos="fade-down">
          <p
            id="title"
            className="text-4xl font-bold border-b-4 p-2 inline border-black"
          >
            Skills
          </p>
          <p id="subtitle" className="py-6 text-2xl font-semibold">
            These are the technologies I've worked with
          </p>
        </div>

        <div
          data-aos="fade-up"
          className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0"
          id="skillsCards"
        >
          {techs.map(({ id, src, title, style, hoverEffect }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 py-2 rounded-lg duration-500 ${style} bg-[${hoverEffect}]`}
              id="skillsCard"
            >
              <img className="w-20 mx-auto" src={src} alt={title} />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
