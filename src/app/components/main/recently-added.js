import React from "react";

export const Recentlyadded = () => {
  return (
    <div className="h-auto flex-col casta">
      {/** First Section **/}
      <div className="bg-[#B72C17] text-white font-bold text-xl md:text-2xl lg:text-3xl flex flex-col md:flex-row h-auto md:h-[30rem]">
        <div className="w-full md:w-[60%] h-[20rem] md:h-full">
          <img
            className="h-full w-full object-cover"
            src="https://media.newyorker.com/photos/67d45085ecea9001aad8323d/16:9/w_1920,c_limit/RADIO_HOUR_Musk_FINAL_03_14_2025.jpg"
            alt=""
          />
        </div>
        <div className="p-6 flex flex-col justify-between text-center md:text-left">
          <div className="w-full md:w-[70%] m-auto text-2xl md:text-[2.5rem]">
            A Poet’s Contemporary Twist on the Bildungsroman
          </div>
          <div className="pb-2">By Mitchell Beaupre</div>
        </div>
      </div>

      {/** Second Section **/}
      <div className="bg-[#B79F17] text-white font-bold text-xl md:text-2xl lg:text-3xl flex flex-col md:flex-row-reverse h-auto md:h-[30rem]">
        <div className="w-full md:w-[60%] h-[20rem] md:h-full">
          <img
            className="h-full w-full object-cover"
            src="https://media.newyorker.com/photos/67d09607ee6ce6d4bd222b12/master/w_1920,c_limit/r45748.jpg"
            alt=""
          />
        </div>
        <div className="p-6 flex flex-col justify-between text-center md:text-left">
          <div className="w-full md:w-[70%] m-auto text-2xl md:text-[2.5rem]">
            “Airless Spaces” Captures the Nadir of the Second Wave
          </div>
          <div className="text-right pb-2">By S. C. Cornell</div>
        </div>
      </div>

      {/** Third Section **/}
      <div className="bg-[#6A17B7] text-white font-bold text-xl md:text-2xl lg:text-3xl flex flex-col md:flex-row h-auto md:h-[30rem]">
        <div className="w-full md:w-[60%] h-[20rem] md:h-full">
          <img
            className="h-full w-full object-cover"
            src="https://media.newyorker.com/photos/67b6034db76fad4c63783287/2:2/w_1920,c_limit/Mochkofsky-Lemebel.jpg"
            alt=""
          />
        </div>
        <div className="p-6 flex flex-col justify-between text-center md:text-left">
          <div className="w-full md:w-[70%] m-auto text-2xl md:text-[2.5rem]">
            Pedro Lemebel, a Radical Voice for Calamitous Times
          </div>
          <div className="pb-2">By Drew Burnett Gregory</div>
        </div>
      </div>
    </div>
  );
};
