import React from 'react';
import './Button.css';

const Button = (props) => {
  const { children, ...moreProps } = props;
  return <button {...{ ...moreProps }}>{children}</button>;
};

export default Button;
