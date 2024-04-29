

import React, { useState } from 'react';
import { VscDebugStart } from "react-icons/vsc";
import { FaDivide } from "react-icons/fa";
import { TbSquareRoot } from "react-icons/tb";
const Home = () => {
  const [displayValue, setDisplayValue] = useState('');

  const handleButtonClick = (value) => {
    if(value==="="){
      try{
        const result = eval(displayValue);
        setDisplayValue(result.toString());

      }
      catch(error){
        setDisplayValue("Error");
      }
    }
    else{
      setDisplayValue(prevDisplay=> prevDisplay+value);
    }
  };

  const ResetHandler = () => {
    setDisplayValue(" ");
  };

  return (
    <div className='w-11/12 mt-12 '>
      <div className='bg-black w-[400px] h-[75px] mx-auto relative shadow shadow-black'>
        <div className='bg-blue-300 w-[400px] h-[50px] font-bold  text-2xl absolute mt-5  '>
        {displayValue}
        </div>
        
      </div>

      <div className='grid grid-cols-6 space-y-4 max-w-[400px] mx-auto bg-slate-200 p-8 shadow shadow-black '>
        <button  className =" mt-4 items-center shadow-lg shadow-black  bg-black text-white rounded p-1  mr-2 " onClick={() => handleButtonClick('GT')}>GT</button>
        <button className ="bg-black shadow-lg shadow-black text-white rounded p-1  mr-2 " onClick={() => handleButtonClick('MRC')}>MRC</button>
        <button className ="mt-4 bg-black shadow-lg shadow-black text-white rounded p-1  mr-2 " onClick={() => handleButtonClick('M-')}>M-</button>
        <button className ="mt-4 bg-black shadow-lg shadow-black text-white rounded p-1  mr-2 " onClick={() => handleButtonClick('M+')}>M+</button>
        <button className ="mt-4 bg-black shadow-lg shadow-black text-white rounded p-1  mr-2 " onClick={() => handleButtonClick('MU')}>MU</button>
        <button className ="mt-4 bg-black shadow-lg shadow-black text-white rounded p-1 w-[60px] mr-2 " onClick={() => handleButtonClick('Correct')}>Correct</button>
        <button className ="mt-4 bg-black shadow-lg shadow-black text-white rounded p-1  mr-2 " onClick={() => handleButtonClick('+/-')}>+/-</button>
        <button className ="mt-4 bg-blue-400 shadow-lg shadow-black text-white rounded p-1  mr-2 " onClick={() => handleButtonClick('7')}>7</button>
        <button className ="mt-4 bg-blue-400 shadow-lg shadow-black text-white rounded p-1  mr-2 " onClick={() => handleButtonClick('8')}>8</button>
        <button className ="mt-4 bg-blue-400 shadow-lg shadow-black text-white rounded p-1  mr-2 " onClick={() => handleButtonClick('9')}>9</button>
        <button className ="mt-4 bg-black shadow-lg shadow-black text-white rounded p-1  mr-2 " onClick={() => handleButtonClick('%')}>%</button>
        <button className ="mt-4 bg-black shadow-lg shadow-black text-white rounded p-1  mr-2 " onClick={() => handleButtonClick('')}> <TbSquareRoot /></button>
        <button className ="mt-4 px-3 bg-black shadow-lg shadow-black text-white rounded p-1  mr-2 " onClick={() => handleButtonClick('7')}><VscDebugStart /></button>
        <button className ="mt-4 bg-blue-400 shadow-lg shadow-black text-white rounded p-1  mr-2 "  onClick={() => handleButtonClick('4')}>4</button>
        <button className ="mt-4 bg-blue-400 shadow-lg shadow-black text-white rounded p-1  mr-2 " onClick={() => handleButtonClick('5')}>5</button>
        <button  className ="mt-4 bg-blue-400 shadow-lg shadow-black text-white rounded p-1  mr-2 " onClick={() => handleButtonClick('6')}>6</button>
        <button className ="mt-4 bg-black shadow-lg shadow-black text-white rounded p-1  mr-2 " onClick={() => handleButtonClick('*')}>x</button>
        <button className ="mt-4 bg-black shadow-lg shadow-black text-white rounded p-1 px-3 mr-2 "  onClick={() => handleButtonClick('/')}><FaDivide /></button>
        <button className ="mt-4 bg-pink-500 shadow-lg shadow-black text-white rounded p-1  mr-2 " onClick={ResetHandler}>AC</button>
        <button className ="mt-4 bg-blue-400 shadow-lg shadow-black text-white rounded p-1  mr-2 " onClick={() => handleButtonClick('1')}>1</button>
        <button className ="mt-4 bg-blue-400 shadow-lg shadow-black text-white rounded p-1  mr-2 " onClick={() => handleButtonClick('2')}>2</button>
        <button className ="mt-4 bg-blue-400 shadow-lg shadow-black text-white rounded p-1  mr-2 " onClick={() => handleButtonClick('3')}>3</button>
        <button className ="mt-4  bg-black shadow-lg shadow-black text-white rounded p-1  mr-2 " onClick={() => handleButtonClick('+')}>+</button>
        <button className ="mt-4 bg-black shadow-lg shadow-black text-white rounded p-1  mr-2 " onClick={() => handleButtonClick('-')}>-</button>
        <button className ="mt-4 bg-pink-500 shadow-lg shadow-black text-white rounded p-1  mr-2 " onClick={() => handleButtonClick('CE')}>CE</button>
        <button className ="mt-4 bg-black shadow-lg shadow-black text-white rounded p-1  mr-2 " onClick={() => handleButtonClick('0')}>0</button>
        <button className ="mt-4 bg-black shadow-lg shadow-black text-white rounded p-1  mr-2 " onClick={() => handleButtonClick('00')}>00</button>
        <button className ="mt-4 bg-black shadow-lg shadow-black text-white rounded p-1  mr-2 " onClick={() => handleButtonClick('.')}>.</button>
        <button className ="mt-4 bg-black shadow-lg shadow-black text-white rounded p-1  mr-2 " onClick={() => handleButtonClick('=')}>=</button>
      </div>
    </div>
  );
};

export default Home;

