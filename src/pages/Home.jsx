import { useEffect, useState } from "react"
import { fibExponential, fibLinear, fibLogarithmic } from "../utils/fibFunctions"

const functionNameMap = {
    'Logarithmic': fibLogarithmic,
    'Linear': fibLinear,
    'Exponential': fibExponential
}

function Home() {

    const [input, setInput] = useState(1)
    const [output, setOutput] = useState(1)
    const [activeFunction, setActiveFunction] = useState(() => fibLogarithmic)

    useEffect(() => {
        setOutput(String(activeFunction(Number(input))))
    }, [input])

    return (
        <>
            <div>Home</div>
            <select
                onChange={e => {
                    setInput(1)
                    setActiveFunction(() => functionNameMap[e.target.value])
                }}
            >
                {Object.keys(functionNameMap).map(functionName => (
                    <option key={functionName} value={functionName}>{functionName}</option>
                ))}
            </select>
            <hr />
            <input
                value={input}
                type="number"
                min="0"
                onChange={e => {
                    if (e.target.value < 0) e.target.value = 0
                    setInput(e.target.value)
                }}
            />
            <p>digits: {output.length}</p>
            <p>f({input}) = {output}</p>
        </>
    )
}

export default Home