import React from 'react';

function Fruit() {
  const fruits = ['Apple', 'Apple', 'Banana', 'Orange', 'Grapes'];
  return (
    <ol>
      {fruits.map((i, index) => (
        <li key={index}>{i}</li>
      ))}
    </ol>
  );
}

export default Fruit;
