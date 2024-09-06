import React, { useState, useEffect } from "react";
import setBodyColor from './setBodyColor'

export default function Names({ rave }) {

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
    // const colors = [
    //     "white", "white", "white", "white", "white", "white",
    //     "white", "white", "white", "white", "white", "white",
    //     "grey", "grey", "grey", "grey",
    //     "black", "red", "yellow", "pink"];
    // const randomColor = () => getRandomIntInclusive(0, colors.length - 1);

    function newGradient() {
        var randomColor1 = "#" + Math.floor(Math.random() * 16777215).toString(16),
            randomColor2 = "#" + Math.floor(Math.random() * 16777215).toString(16);
        return 'radial-gradient(at top left, ' + randomColor1 + ', ' + randomColor2 + ')'
    }


    setBodyColor({ color: rave ? newGradient() : "white" })


    return (`${names[random()]}`)
}

function getRandomIntInclusive(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
}
