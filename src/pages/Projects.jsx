import React from "react";

const Projects = () => {
  return (
    <>
      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <a href="#projects">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center items-start p-1">
            <div className="w-1 h-2 bg-gray-400 rounded-full animate-bounce">Projects</div>
          </div>
        </a>
      </div>
    </>
  );
};

export default Projects;
