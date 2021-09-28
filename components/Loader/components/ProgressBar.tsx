import React from 'react';
import './ProgressBar.css';

interface ProgressBarTypes {
  progress: number;
}

const ProgressBar: React.FC<ProgressBarTypes> = ({ progress }) => {
  return (
    <div className="progress-bar">
      <div className={`progress-bar--tracker width-${progress}`}></div>
    </div>
  );
};

export default ProgressBar;
