import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom"
import axios from "axios";

export const Search = () => {
  const [filled, setFilled] = useState(0);
  const [inputText, setInputText] = useState("");
  const [result, setResult] = useState(null);
  const [probability, setProbability] = useState(null);
  const [reliabilityLabel, setReliabilitylabel] = useState("");

  function loadBar() {
    const roundedProbability = Math.round(probability);
    setFilled(roundedProbability);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://127.0.0.1:8000/predict", {
        text: inputText,
      });
      const reliability = response.data.reliability;
      setResult(response.data.prediction);
      setProbability(reliability);

      // Define thresholds in descending order with corresponding labels
      const thresholds = [
        { range: [91, 100], label: "Very Reliable" },
        { range: [71, 90], label: "Reliable" },
        { range: [51, 70], label: "Moderately Reliable" },
        { range: [31, 50], label: "Unreliable" },
        { range: [0, 30], label: "Very Unreliable" },
      ];

      // Find the appropriate category
      const category = thresholds.find(
        ({ range }) => reliability >= range[0] && reliability <= range[1]
      );
      const reliabilityLabel = category ? category.label : "Unknown";

      setReliabilitylabel(reliabilityLabel);

      setFilled(Math.round(response.data.reliability));
    } catch (error) {
      console.log("Error Occurred: ", error);
    }
  };

  return (
    <>
      {/* Text Section */}
      <div className="flex justify-center relative top-[10vh] dark:text-white">
        <ul className="flex flex-col items-center space-x-4 md:flex-row">
          <li className="text-4xl font-bold sm:text-5xl">Don’t Just Read the News. Verify It.</li>
          <li className="text-4xl font-bold sm:text-5xl"></li>
        </ul>
      </div>

      {/* Text Input */}
      <section className="w-full max-w-xl space-y-8 mx-auto relative top-[20vh]">
        <form
          onSubmit={handleSubmit}
          onClick={loadBar}
          className="flex flex-col justify-between items-center space-y-8"
        >
          <label className="relative flex flex-col justify-between">
            <input
              required
              className="w-[80vw] rounded-2xl text-lg relative min-h-16 dark:text-white pl-5 bg-background cursor-text outline-none border-2 duration-200 peer dark:border-slate-400 focus:border-slate-700 focus:border-accentClr overflow-hidden md:w-[60vw]"
              type="text"
              value={inputText}
              onChange={(e) => {
                if (e.target.value === "") {
                  setResult(null);
                  setProbability(null);
                  setFilled(null);
                }

                setInputText(e.target.value);
              }}
            />

            <span className="text-xl text-gray-500 absolute px-2 top-4 ml-6 peer-focus:text-accentClr pointer-events-none duration-300 bg-background peer-focus:-translate-y-11 peer-focus:text-lg peer-valid:-translate-y-11 peer-valid:text-lg md:peer-focus:-translate-y-11 md:peer-valid:-translate-y-11 md:peer-focus:text-lg md:peer-valid:text-lg">
              Enter your content
            </span>
          </label>
          <Button variant="submit" type="submit">
            {" "}
            Search
          </Button>
        </form>
      </section>

      {/* Result Section */}
      <section className=" relative flex flex-col  space-y-15 justify-center items-center top-[50vh] w-80vw h-20 sm:top-[24vh] ">
        {/* progressbar */}
        <div
          className={`fixed w-[80vw] max-w-screen-md h-6 rounded-full dark:border-slate-400 ${
            filled > 0 ? "border-2 border-accent-1" : ""
          }`}
        >
          <div
            className="rounded-full h-full transition-width duration-700 ease-in-out bg-indigo-800 dark:bg-indigo-500"
            style={{ width: `${filled}%` }}
          ></div>
        </div>
        {/* result */}
        <div className="text-textClr h-2 flex flex-col items-center space-y-2 dark:text-slate-300">
          {result !== null && probability !== null && (
            <>
              <h3 className="text-3xl">
                The News is {result === 0 ? "Likely Real" : "Likely Fake"}
              </h3>
              <h4 className="h-2 text-xl">
                {reliabilityLabel} : {probability.toFixed(2)}%
              </h4>
            </>
          )}
        </div>
      </section>
      <div className="md:block dark:text-slate-300 ">
        <NavLink
          to="/about"
          className="text-md absolute  bottom-4 right-8 hover:text-gray-900 dark:hover:text-white"
        >
          About
        </NavLink>
        <NavLink
          to="/terms&Conditions"
          className="text-textClr text-md absolute  bottom-4 right-28 hover:text-gray-900 dark:hover:text-white"
        >
          Terms And Conditions
        </NavLink>
      </div>
    </>
  );
};
