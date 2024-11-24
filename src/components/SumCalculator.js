import React, {useState} from 'react'

function SumCalculator() {
    const [number, setNumber] = useState(0)
    const [displayNum, setDisplayNum] = useState(0)

    const handleChange = (e) => {
        setNumber(e.target.value)
        setDisplayNum(Number(e.target.value) + Number(displayNum))
    }

    return (
        <div>
            <h1>Sum Calculator</h1>
            <input
                type='number'
                value={number}
                onChange={handleChange}
            />
            <p>Sum: {displayNum}</p>

        </div>
    )
}

export default SumCalculator