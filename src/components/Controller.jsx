import React from "react";

const Controller = ({ onButtonClick }) => {
  return (
    <div>
      <button
        onClick={() => {
          onButtonClick(-1);
        }}
      >
        -1
      </button>
      <button
        onClick={() => {
          onButtonClick(-10);
        }}
      >
        -10
      </button>
      <button
        onClick={() => {
          onButtonClick(-100);
        }}
      >
        -100
      </button>
      <button
        onClick={() => {
          onButtonClick(+100);
        }}
      >
        +100
      </button>
      <button
        onClick={() => {
          onButtonClick(+10);
        }}
      >
        +10
      </button>
      <button
        onClick={() => {
          onButtonClick(+1);
        }}
      >
        +1
      </button>
    </div>
  );
};

export default Controller;
