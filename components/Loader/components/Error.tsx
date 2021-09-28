import React from 'react';
import Button from './Button';

const Error = () => {
  return (
    <div>
      <h2>Sorry! You are not eligible to apply</h2>
      <p>
        We are currently unable to process your application as per the our
        policies. We regret the inconvenience.
      </p>
      <Button>Go to Homepage</Button>
    </div>
  );
};

export default Error;
