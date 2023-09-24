import React from "react";
import ReactDOM from "react-dom";
export default function Modal({ eventHandling }) {
  const closeTheModal = () => {
    eventHandling();
  };
  return ReactDOM.createPortal(
    <div className=" absolute inset-0 bg-gray-300 opacity-80 ">
      <div
        onClick={() => {
          eventHandling();
        }}
        className=" absolute inset-40 p-10 bg-white"
      >
        this is your modal
      </div>
    </div>,
    document.getElementById("model-container")
  );
}

/**
 * <div className=" absolute inset-0 bg-gray-300 opacity-80 ">
      <div
        onClick={() => {
          eventHandling();
        }}
        className=" absolute inset-40 p-10 bg-white"
      >
        this is your modal
      </div>
    </div>,
    document.getElementById("model-container")
 */
