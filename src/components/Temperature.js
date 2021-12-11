import React from 'react';

const Temperature = ({ temp, text, fontSize }) => {
  return (
    <div
      style={{
        fontSize: fontSize,
        color: 'white',
      }}
    >
      {text ? text + ' ' : ''}
      {temp}&deg;
    </div>
  );
};

export default Temperature;
