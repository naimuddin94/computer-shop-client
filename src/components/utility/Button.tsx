import React from "react";

const Button = ({ text }: { text: string }) => {
  return (
    <button>
      <a className="relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-white transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-theme-yellow">
        <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-theme-yellow via-theme-color-200 to-theme-color-100"></span>
        <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-theme-color-400 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
        <span className="relative text-white">{text}</span>
      </a>
    </button>
  );
};

export default Button;
