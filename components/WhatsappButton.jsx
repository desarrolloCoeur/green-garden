import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhastappButton = () => {
  return (
    <div className="relative">
      <a
        className="fixed bottom-10 right-10 z-10 bg-green-500 p-2 rounded-full"
        href="https://wa.me/+526681686000?text=Hola%20me%20gustar%C3%ADa%20cotizar%20sus%20servicios"
        target="_blank"
      >
        <FaWhatsapp className="text-4xl text-white" />
      </a>
    </div>
  );
};

export default WhastappButton;
