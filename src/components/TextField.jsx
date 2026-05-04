import React from 'react'
import './TextField.css'
import { useState } from 'react';
import Buttons from './Buttons';
import { AiOutlineClear } from "react-icons/ai";
import { FaRegCopy } from "react-icons/fa";
import { IoIosRemoveCircleOutline } from "react-icons/io";
import { LuCaseUpper } from "react-icons/lu";
import { LuCaseLower } from "react-icons/lu";
const TextField = () => {
    let [text, setText] = useState("");
    let [wordCount, setWordCount] = useState(0);
    let [charCount, setCharCount] = useState(0);
    let [readingTime, setReadingTime] = useState(0);
    const analyzeText = (event) => {
        text = event.target.value;
        wordCount = text.split(" ").length;
        charCount = text.length;
        readingTime = (wordCount / 200).toFixed(2); 
        setText(text);
        setWordCount(wordCount);
        setCharCount(charCount);
        setReadingTime(readingTime);
        // Assuming an average reading speed of 200 words per minute
        console.log("Word Count:", wordCount);
        console.log("Character Count:", charCount);
        console.log("Reading Time (minutes):", readingTime);
        console.log("Text:", text);
    }
  return (
    <>
      <div className="main">
        <h1 className='heading'>Text Utils </h1>
       <div className="container">
         <div className="leftpanal">
            <label htmlFor="Text">Enter Your Text Here:</label>
            <br />
            <br />
            <textarea name="textarea" id="textarea" onChange={analyzeText} cols="90" rows="20"></textarea>
        </div>
        <div className="rightpanal">
            <h2 className='summary_heading'>Text Summary</h2>
            <hr />
            <p className='s_text'>{text}</p>
            <p className='word_count'>Word Count: {wordCount}</p>
            <p className='char_count'>Character Count: {charCount}</p>
            <p className='reading_time'>Reading Time: {readingTime} minutes</p>
            <div className="controls">
            <Buttons text="Clear Text" handleClick={() => {
                setText("");
                setWordCount(0);
                setCharCount(0);
                setReadingTime(0);
            }} icon={<AiOutlineClear />}/>
            <Buttons text="Copy Text" handleClick={() => {
                navigator.clipboard.writeText(text);
            }} icon={<FaRegCopy />}/>
            <Buttons text="Remove Extra Spaces" handleClick={() => {
                const newText = text.replace(/\s+/g, ' ').trim();
                setText(newText);
                setWordCount(newText.split(" ").length);
                setCharCount(newText.length);
                setReadingTime((newText.split(" ").length / 200).toFixed(2));
            }} icon={<IoIosRemoveCircleOutline />}/>
            <Buttons text="Convert to Uppercase" handleClick={() => {
                const newText = text.toUpperCase();
                setText(newText);
                
            }} icon={<LuCaseUpper />}/>
             <Buttons text="Convert to Lowercase" handleClick={() => {
                const newText = text.toLowerCase();
                setText(newText);
                
            }} icon={<LuCaseLower />}/>
            </div>
        </div>
       </div>
      </div>
    </>
  )
}

export default TextField
