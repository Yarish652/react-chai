import { use, useState, useCallback, useEffect, useRef} from 'react'



function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass2 = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*(){}[]";

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass2 += str.charAt(char);
    }

    setPassword(pass2);
    console.log("Generated password:", pass2);
  }, [length, numberAllowed, charAllowed]);


  const copytoClipBoard = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0, 101)
    window.navigator.clipboard.writeText(password)
  },
[password])


  useEffect(() => {
    passwordGenerator(); // ✅ ACTUALLY CALL IT
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  return (
    <>
   <div className="w-full max-w-lg mx-auto px-4 my-8">
  {/* Outer Box */}
  <div className="bg-gray-800 text-orange-500 rounded-lg shadow-md p-6 text-center">
    <h1 className="text-white text-xl mb-4">Password Generator</h1>

    {/* Inner Box */}
    <div className="bg-white p-4 rounded-lg shadow-inner space-y-4">
      {/* Password + Copy */}
      <div className="flex items-center gap-2">
        <input 
          type="text"
          value={password}
          className="flex-grow outline-none py-2 px-3 text-black border border-gray-300 rounded-md"
          placeholder="Generated Password"
          readOnly 
          ref = {passwordRef}
        />
        <button 
          onClick={copytoClipBoard}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors duration-200 whitespace-nowrap"
        >
          Copy
        </button>
      </div>

      
      </div>
      {/* Controls */}
      <div className="flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center text-sm">
        {/* Length Range */}
        <div className="flex items-center gap-1">
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            className="cursor-pointer"
            onChange={(e) => setLength(e.target.value)}
          />
          <label className="whitespace-nowrap">Length: {length}</label>
        </div>

        {/* Numbers Toggle */}
        <div className="flex items-center gap-1">
          <input
            type="checkbox"
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange={() => setNumberAllowed(prev => !prev)}
          />
          <label htmlFor="numberInput">Numbers {numberAllowed}</label>
        </div>

        {/* Characters Toggle */}
        <div className="flex items-center gap-1">
          <input
            type="checkbox"
            defaultChecked={charAllowed}
            id="charInput"
            onChange={() => setCharAllowed(prev => !prev)}
          />
          <label htmlFor="charInput">Characters {charAllowed}</label>
        </div>
    </div>
  </div>
</div>




    </>
  )
}

export default App
