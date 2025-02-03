import  {useState , useEffect , useRef} from "react"

function Stopwatch() {

    // stopwatch not currently running
    const [ isRunning , setIsRunning ] = useState(false)
    // track how much time has elapsed
    const [ elapsedTime , setElapsedTime ] = useState(0); // 0ms
    // if we start interval we need to clear it if we'are not using it
    const intervalIdRef = useRef(null);
    const startTimeRef = useRef(0); // start time will be 0ms

    // when we mount our component and isRunning ever changes we'll perform some side code whatever within use effect.
    // this is where we'll start our interval to move time forward

    useEffect( () => {
        if( isRunning ) {
            // if our stopwatch is running we'll need to create an interval to move time forward
            intervalIdRef.current = setInterval( () => {
                setElapsedTime(Date.now() - startTimeRef.current)
            } , 10);
        }
        return () => {
            clearInterval( intervalIdRef.current );
        }
    } , [isRunning] )

    function start() {
        setIsRunning(true);
        // update a ref doesn't cause our component to rerender
        // if a state changes it does cause component to rerender
        startTimeRef.current = Date.now() - elapsedTime;

    }

    function stop() {
        setIsRunning(false);
    }

    function reset() {
        setElapsedTime(0); // reset everything
        setIsRunning(false);
    }

    function formatTime() {
        // ms to hours , 1000ms in 1sec
        let hours = Math.floor( elapsedTime / ( 1000 * 60 * 60 ) );
        let minutes = Math.floor( elapsedTime / ( 1000 * 60 ) % 60 ); // once minutes unit hit 60 we need to reset back to zero that's why % 60
        let seconds = Math.floor( elapsedTime / ( 1000 ) % 60 );
        let milliseconds = Math.floor( ( elapsedTime % 1000 )/ 10 );
        hours = String(hours).padStart( 2 , "0" );
        minutes = String(minutes).padStart( 2 , "0" );
        seconds = String(seconds).padStart( 2 , "0" );
        milliseconds = String(milliseconds).padStart( 2 , "0" );
        return `${minutes}:${seconds}:${milliseconds}`;
    }

    return (
        <div className="stopwatch" >
            <div className="display" >{formatTime()}</div>
            <div className="controls" >
                <button onClick={start} className="start-button" >Start</button>
                <button onClick={stop} className="stop-button" >Stop</button>
                <button onClick={reset} className="reset-button" >Reset</button>
            </div>
        </div>
    )
}

export default Stopwatch