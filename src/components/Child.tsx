import { ChildProps } from "../interfaces";

const Child = ({ name, age }: ChildProps) => {
    return (
        <>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
        </>
    );
}

export default Child;
