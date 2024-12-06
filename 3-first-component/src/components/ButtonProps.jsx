import React from 'react';

const ButtonComponent = (props) => {
  if (props.type === 'success') {
    return (
      <button className="green-button" onClick={props.handler}>
        {props.btxText}
      </button>
    );
  } else if (props.type === 'danger') {
    return (
      <button className="red-button" onClick={props.handler}>
        {props.btxText}
      </button>
    );
  } else {
    return (
      <button className="blue-button" onClick={props.handler}>
        {props.btxText}
      </button>
    );
  }
};

export default ButtonComponent;
