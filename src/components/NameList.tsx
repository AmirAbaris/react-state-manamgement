import { useState } from 'react'
import InputName from './InputName';
import { Listbox, ListboxItem } from '@nextui-org/react';

const NameList = () => {
  const [list, setList] = useState(['John', 'Jane', 'Joe']);

  const addName = (name: string) => {
    setList((prevList) => [...prevList, name]);
  }

  return (
    <>
      <InputName onAdd={addName} />
      <Listbox
        aria-label="Actions"
        onAction={(key) => console.log(key)}
      >
        {list.map((name) => (
          <ListboxItem key={name}>{name}</ListboxItem>
        ))}
      </Listbox>
    </>
  );
}

export default NameList;
