import React, { useState } from 'react';
import { Input, Button } from '@nextui-org/react';

interface InputNameProps {
    onAdd: (name: string) => void;
}

const InputName: React.FC<InputNameProps> = ({ onAdd }) => {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = () => {
        if (inputValue.trim()) {
            onAdd(inputValue); // Pass the input value up to the parent component
            setInputValue(''); // Clear the input field after submission
        }
    };

    return (
        <div className="flex items-center justify-center w-full flex-wrap md:flex-nowrap gap-4">
            <Input
                type="text"
                label="Name"
                value={inputValue}
                onChange={handleChange}
            />
            <Button onClick={handleSubmit}>Add Name</Button>
        </div>
    );
};

export default InputName;