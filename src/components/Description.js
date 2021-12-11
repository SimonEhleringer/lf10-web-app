import React from 'react';

const Description = ({ text, fontSize }) => {
  return (
    <div
      style={{
        fontSize: fontSize,
        color: 'white',
      }}
    >
      {text}
    </div>
  );
};

export default Description;
