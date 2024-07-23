import { useEffect, useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('the count is: ', count);

        /**
         * optional return fn:
         * the useEffect hook will destroy itself and it runs this return fn before doing so,
         *  whenever something in the dependency changes
         */
        return () => {
            console.log('i am being cleaned up!');
        }
    }, [count]); // the dependency array!

    const increment = () => {
        setCount(count + 1);
    }
    const decrement = () => {
        setCount(count - 1);
    }

    return (
        <>
            <h1>Count: {count}</h1>
            <div className="flex flex-col gap-y-5">
                <button onClick={increment}>Increment</button>
                <button onClick={decrement}>Decrement</button>
            </div>
        </>
    );
}

export default Counter;
