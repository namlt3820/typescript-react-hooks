import React, { useMemo, useEffect, useState } from 'react'

export const UseMemo: React.FC = () => {
    const name = useMemo(() => ({ firstName: "name" }), [])

    useEffect(() => {
        console.log('Effect has been running only once, due to useMemo');
    }, [name])

    const [randomNumber, setRandomNumber] = useState(0)

    return <>
        <h1>{randomNumber}</h1>
        <button onClick={() => { setRandomNumber(Math.random()) }}>
            Generate random number
  </button>
    </>

}