import React from "react";
import Heading from "../../HelperComp/Heading.jsx";
import insta1 from "../../../assets/insta1.jpg"
import insta2 from "../../../assets/insta2.jpg"

const Projects = () => {
  return (
    <div className="h-full page-shadow bg-white p-10">
      {/* heading */}
      <Heading
        title="Projects"
        subtitle="Creative projects to showcase my work and skills."
      />

      {/* Placeholder message */}
      <div className="mt-10 text-center text-gray-500">
        <p className="text-xl font-semibold">
          Currently no projects,In Future updates will be added.
        </p>
      </div>

      {/* Editing Showcase */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold text-center">My Edits</h2>
        <p className="text-center text-gray-500 mt-2">
          Check out my creative edits on Instagram.
        </p>

        <div className="flex justify-center space-x-4 mt-6">
          <img
            src={insta1}
            alt="Edit 1"
            className="w-1/3 h-auto rounded-lg shadow-md"
          />
          <img
            src={insta2}
            alt="Edit 2"
            className="w-1/3 h-auto rounded-lg shadow-md"
          />
        </div>

        <div className="text-center mt-6">
          <a
            href="https://www.instagram.com/aura.editz._/"
            target="_blank"
            rel="noopener noreferrer"
            className=""
          >
            Click here to view my edits
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
