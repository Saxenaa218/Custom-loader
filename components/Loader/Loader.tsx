import React, { useEffect, useState } from 'react';
import Error from './components/Error';
import Success from './components/Success';
import ProgressBar from './components/ProgressBar';
import { fetchData } from '../../server';
import { ResponseType } from './types';
import './Loader.css';

const Loader = () => {
  const [hasError, setHasError] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    fetchData()
      .then((resp: ResponseType) => {
        if (!resp.error) setProgress(resp.progress);
      })
      .catch((err: ResponseType) => {
        setHasError(err.error);
      });
  }, []);

  useEffect(() => {
    console.log(progress);
    if (progress < 90) {
      const id = setTimeout(() => {
        fetchData()
          .then((resp: ResponseType) => {
            if (!resp.error) setProgress(resp.progress);
          })
          .catch((err: ResponseType) => {
            setHasError(err.error);
          });
      }, 1000);
    }
  }, [progress]);

  return (
    <div className="loader">
      {progress < 100 && !hasError && (
        <div>
          <p>Loading! Please wait...</p>
          <ProgressBar progress={progress} />
          <p>{progress}%</p>
        </div>
      )}
      <p>
        {progress === 100 && <Success />}
        {hasError && <Error />}
      </p>
    </div>
  );
};

export default Loader;
