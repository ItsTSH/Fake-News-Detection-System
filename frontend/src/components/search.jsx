import React, { useState } from 'react'
import { Button } from "@/components/ui/button";
import axios from "axios";

export const Search = () => {
    const [filled, setFilled] = useState(0);
    const [inputText, setInputText] = useState("");
    const [result, setResult] = useState(null);
    const [probability, setProbability] = useState(null);

    function loadBar() {
        const roundedProbability = Math.round(probability);
        setFilled(roundedProbability);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const response = await axios.post("http://127.0.0.1:8000/predict", {
                text: inputText
            });
            setResult(response.data.prediction)
            setProbability(response.data.probability.real)

            setFilled(Math.round(response.data.probability.real));
        }catch(error){
            console.log("Error Occurred: ", error);
        }
    }

  return (
    <>
        {/* Text Section */}
        <div className = "flex justify-center relative top-[10vh] dark:text-white">
            <ul className = "flex flex-col items-center space-x-4 md:flex-row">
                <li className = "text-4xl font-bold sm:text-5xl">
                    Verify your News
                </li>
                <li className = "text-4xl font-bold sm:text-5xl">
                    
                </li>
            </ul>
        </div>

        {/* Text Input */}
        <section className = "w-full max-w-xl space-y-8 mx-auto relative top-[20vh]">
            <form 
                onSubmit={handleSubmit}
                onClick={loadBar}
                className = "flex flex-col justify-between items-center space-y-8"
            >
                <label className="relative flex flex-col justify-between">
                    <input 
                        required
                        className = "w-[80vw] text-lg relative min-h-16 rounded-lg dark:text-white pl-5 bg-background cursor-text outline-none border-2 duration-200 peer dark:border-slate-400 focus:border-slate-700 focus:border-accentClr overflow-hidden md:w-[60vw]"
                        type="text"
                        value={inputText}
                        onChange={(e) => {
                            if (e.target.value === ""){
                                setResult(null);
                                setProbability(null);
                                setFilled(null);
                            }

                            setInputText(e.target.value);
                        }} 
                    />

                    <span className = "text-xl text-gray-500 absolute px-2 top-4 ml-6 peer-focus:text-accentClr pointer-events-none duration-300 bg-background peer-focus:-translate-y-11 peer-focus:text-lg peer-valid:-translate-y-11 peer-valid:text-lg md:peer-focus:-translate-y-11 md:peer-valid:-translate-y-11 md:peer-focus:text-lg md:peer-valid:text-lg">
                        Enter your content
                    </span>
                </label>
                <Button variant="submit" type="submit"> {" "} Search</Button>
            </form>
        </section>

        {/* Result Section */}
			<section className=' relative flex flex-col  space-y-32 justify-center items-center top-[22vh] w-80vw h-20 sm:top-[24vh] '>
				{/* progressbar */}
				<div
					className={`fixed w-[80vw] max-w-screen-md h-6 rounded-xl ${
						filled > 0 ? "border-2 border-accent-1" : ""
					}`}
				>
					<div
						className='rounded-xl h-full transition-width duration-700 ease-in-out bg-filled'
						style={{ width: `${filled}%` }}
					></div>
				</div>
				{/* result */}
				<div className='text-textClr  text-3xl '>
					{result !== null && probability !== null && (
						<h3>
							{result}: {probability.toFixed(2)}%
						</h3>
					)}
				</div>
			</section>
    </>
  )
}
