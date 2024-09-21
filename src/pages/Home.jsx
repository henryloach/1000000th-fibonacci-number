import { useEffect, useState } from "react"
import fibTripples from "../utils/fib"

function Home() {

    const [input, setInput] = useState(0)
    const [output, setOutput] = useState(0)

    useEffect(() => {
        setOutput(fibTripples(input))
    }, [input])

    return (
        <>
            <div>Home</div>
            <input
                value={input}
                type="number"
                min="0"
                onChange={event => setInput(event.target.value)}
            />
            <p>digits: {output.length}</p>
            <p>f(x) = {output}</p>
        </>
    )
}

export default Home