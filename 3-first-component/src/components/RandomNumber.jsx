import React from 'react';

function RandomNumber() {
  const number = Math.random();

  return (
    // <> //React Fragment

    // <>...</> ko React Fragment kehte hain. Ye React ka ek shorthand syntax hai jo tumhe multiple JSX elements ko bina kisi extra DOM element (jaise <div>, <span>, etc.) ka use kiye group karne ki suvidha deta hai.
    <>
      <h1>{number}</h1>

    </>
  );
}

export default RandomNumber;
