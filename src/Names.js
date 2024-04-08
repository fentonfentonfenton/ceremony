import React, { useState, useEffect } from "react";

export default function Names() {

    const [count, setCount] = useState(0);

    useEffect(() => {
        //Implementing the setInterval method
        const interval = setInterval(() => {
            setCount(count + 1);
        }, 1000);

        //Clearing the interval
        return () => clearInterval(interval);
    }, [count]);


    const names = ["Moogz & Jack", "Moogz and Jack", "Jack and Moogz", "Jack & Moogz"];
    const random = () => getRandomIntInclusive(0, names.length - 1);
    // this.forceUpdate();

    return (`${names[random()]}`)
}

function getRandomIntInclusive(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
}
