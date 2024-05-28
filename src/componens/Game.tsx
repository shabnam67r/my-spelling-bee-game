
import React from 'react'
import { useState , useEffect } from 'react';
interface GameProps {
    language :'en'| 'tr';
}

const Game:React.FC<GameProps> = ({language})=>{
    const [letters , setLetters] = useState<string[]>([]);
    const [word , setWord] = useState('');
    const [timeLeft, setTmeLeft] = useState(60);
    const [score , setScore]= useState(0);

    useEffect(()=>{
        // read words by chance
        fetch(`/data/${language}.json`)
        .then((response)=>response.json())
        .then((data)=>{
            const randomLetters = data.letters.sort(()=>0.5 - Math.random()).slice(0,7);
            setLetters(randomLetters);
        })
    },[language]);

    useEffect(()=>{
        if(timeLeft>0){
            const timer = setTimeout(()=>setTmeLeft(timeLeft-1),1000);
            return ()=> clearTimeout(timer);
        }
    },[timeLeft]);

    const handleInputChange = (e :React.ChangeEvent<HTMLInputElement>)=>{
        setWord(e.target.value);
    };

    const handleWordSubmit = () =>{
        fetch(`/data/${language}.json`)
        .then((response)=>response.json())
        .then((data)=>{
            if(data.words.includes(word)){
                setScore(score + word.length);
                setTmeLeft(timeLeft +15);
            }
            setWord('');
        });
    };


    return (
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl p-4">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Spelling Bee Game</h1>
            <div className="flex justify-center space-x-2 mb-4">
              {letters.map((letter, index) => (
                <span key={index} className="text-lg font-mono">{letter}</span>
              ))}
            </div>
            <input 
              type="text" 
              value={word} 
              onChange={handleInputChange} 
              className="border p-2 rounded w-full mb-4 text-black"
             
            />
            <button 
              onClick={handleWordSubmit} 
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 black"
            >
              Submit
            </button>
            <div className="mt-4">
              <div>Time Left: <span className="font-bold">{timeLeft}</span> seconds</div>
              <div>Score: <span className="font-bold">{score}</span></div>
            </div>
          </div>
        </div>
      );
    
}

export default Game