import React from "react";

export default function Modal({ eventHandling }) {
  return (
    <div className=" absolute inset-0 bg-gray-300 opacity-80 ">
      <div
        onClick={() => {
          eventHandling();
        }}
        className=" absolute inset-40 p-10 bg-white"
      >
        this is your modal
      </div>
    </div>
  );
}
