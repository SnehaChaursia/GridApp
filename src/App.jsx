import { useState } from "react"

export default function App() {

  // created  array of 9 boxes with initial value 0
  const [boxes, setBoxes] = useState(new Array(9).fill(0))

  const handleClick = (index) => {

    // created copy of state to modify safely
    const newBoxes = [...boxes]

    // stop if clicked box is locked (value >= 15)
    if (newBoxes[index] >= 15) return

    // update clicked box value by 1
    newBoxes[index] += 1

    // store updated value for checks
    const newValue = newBoxes[index]

    // check if clicked box is in last column (no right neighbor)
    const isLastColumn = index % 3 === 2

    // Rule 1: if divisible by 3 and have column right next to it , decrement right box by 1  
    if (newValue % 3 === 0 && !isLastColumn) {
      const rightIndex = index + 1

      // apply change only if right box is not locked
      if (newBoxes[rightIndex] < 15) {
        newBoxes[rightIndex] -= 1
      }
    }

    // check if clicked box is in bottom row (no below neighbor)
    const isBottomRow = index >= 6

    // Rule B: if divisible by 5, increment below box by 2
    if (newValue % 5 === 0 && !isBottomRow) {
      const belowIndex = index + 3

      // apply change only if below box is not locked
      if (newBoxes[belowIndex] < 15) {
        newBoxes[belowIndex] += 2
      }
    }

    // update state with new values
    setBoxes(newBoxes)
  }

  return (

    <div className="h-screen flex flex-col">

      <h1 className="text-3xl font-bold text-center mt-6">Grid App</h1>

      {/* center grid in remaining space */}
      <div className="flex flex-1 items-center justify-center">

        {/* create 3x3 grid */}
        <div className="grid grid-cols-3 gap-4">

          {/* loop through boxes array to render each box */}
          {boxes.map((value, index) => {

            // check if box is locked
            const isLocked = value >= 15

            // check even or odd value
            const isEven = value % 2 === 0

            // default text color
            let bgColor = ""
            let textColor = "text-black"

            // locked box styling
            if (isLocked) {
              bgColor = "bg-red-500"
              textColor = "text-white"
            }
            // odd number styling
            else if (!isEven) {
              bgColor = "bg-[#1a237e]"
              textColor = "text-white"
            }
            // even number styling
            else {
              bgColor = "bg-[#e0e0e0]"
            }

            return (
              <div
                key={index}

                // handle click only if not locked
                onClick={() => handleClick(index)}

                // apply styles for size, shadow, alignment and colors
                className={`w-24 h-24 rounded-[4px] shadow-[2px_2px_0px_black]
                flex items-center justify-center text-xl font-bold
                ${bgColor} ${textColor}
                ${isLocked ? "cursor-not-allowed" : "cursor-pointer"}`}
              >
                {/* display box value */}
                {value}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
