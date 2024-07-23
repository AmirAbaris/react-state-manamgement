import { ParentProps } from "../interfaces";
import Child from "./Child";

const Parent = ({ title }: ParentProps) => {
    return (
        <>
            <h1>{title}</h1>
            <Child name="Aba" age={21} />
            <Child name="Reza" age={31} />
        </>
    );
}

export default Parent;
