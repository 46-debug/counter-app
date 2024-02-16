import React, { useState } from "react";

const Counter = () => {
    const [num, setNum] = useState(0)
    const [undo, setUndo] = useState(0)

    const incNum = () => {
        setNum(num + 1)
        setUndo(undo +1)
    };

    const decNum = () => {
        if (num > 0) {
            setNum(num - 1)
            setUndo(undo -1)
        } else {
            alert("Lower limit reached;")
            setNum(0)
        }
    };

    const reset =()=>{
        setNum(0)
    }

    const unDo = ()=>{
        setNum(undo)
    }

    return (
        <>
            <div className="main_div">
                    <h1> {num} </h1>
                    <h1>-COUNTER-</h1>
                    <div className="btns">
                        <button className="btn" onClick={incNum}>+</button>
                        <button className="btn" onClick={decNum}>-</button>
                        <button className="btn" onClick={reset}>0</button>
                        <button className="btn" onClick={unDo}>undo</button>
                    </div>
                </div>

        </>
    );
};

export default Counter;