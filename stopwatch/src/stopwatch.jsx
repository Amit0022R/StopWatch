import React , {useState , useEffect , useRef} from "react"

function Stopwatch() {

    // stopwatch not currently running
    const [ isRunning , setIsRunning ] = useState(false)
    // track how much time has elapsed
    const [ elapsedTime , setElapsedTime ] = useState(0); // 0ms
    // if we start interval we need to clear it if we'are not using it
    const intervalRef = useRef(null);
    const startTimeRef = useRef(0); // start time will be 0ms

    // when we mount our component and isRunning ever changes we'll perform some side code whatever within use effect.
    // this is where we'll start our interval to move time forward

    function start() {

    }

    function stop() {

    }

    function reset() {

    }

    function formatTime() {
        return `00:00:00`;
    }

    useEffect( () => {

    } , [isRunning] )


    return (
        <div className="stopwatch" >
            <div className="display" >{formatTime()}</div>
            <div className="controls" >
                <button onClick={start} className="start-button" >Start</button>
                <button onClick={stop} className="stop-button" >Stop</button>
                <button onClick={reset} className="rest-button" >Reset</button>
            </div>
        </div>
    )
}

export default Stopwatch