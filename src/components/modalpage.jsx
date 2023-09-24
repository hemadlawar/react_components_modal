import React, { useState } from "react";
import Modal from "./modal";
import { ReactDOM } from "react";
export default function Modalpage() {
  // this state is responsible for present and hide the portal element
  const [showModal, setshowModal] = useState(true);

  // the event handler to show and hide the portal elemnt
  const eventHandling = () => {
    setshowModal(!showModal);
  };
  return (
    <div>
      <div>
        <h3></h3>
      </div>
      <div className="flex justify-center ">
        <div className="bg-slate-100 w-72 h-16 text-center mt-3.5 ">
          Open The Modal
          <button
            type="button"
            class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2  mt-3 ml-8 "
            onClick={eventHandling}
          >
            Open
          </button>
        </div>
      </div>
      {/**  */}
      {showModal && <Modal eventHandling={eventHandling} />}
    </div>
  );
}
