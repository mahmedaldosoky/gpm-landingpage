import { React, useState } from "react";

const FAQCard = (props) => {
  const [isOpened, setisOpened] = useState(false);

  function toggleIsOpened(){
    setisOpened(!isOpened);
  }
  return (
    <div class=" border-2 rounded-lg border-gray-700">
      <button class="flex items-center justify-between w-full p-8 " onClick={toggleIsOpened}>
        <h1 class="font-semibold text-white">{props.question}</h1>

        {isOpened ? (
          <span class="text-gray-400 bg-gray-200 rounded-full transition duration-1000 ease-in-out">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M18 12H6"
              />
            </svg>
          </span>
        ) : (
          <span class="text-white bg-gradient-to-r from-[#5ED3D0] to-[#89A2FB] rounded-full transition duration-1000 ease-in-out">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
          </span>
        )}
      </button>
      <hr class="border-gray-700" />
      {isOpened && <p class="p-8 text-sm text-gray-300">{props.answer}</p>}{" "}
    </div>
  );
};

export default FAQCard;
