import React from 'react';
import Spinner from '../Spinner';

const WithSpinner = (WrappedComponent) => function ({ isLoading, ...otherProps }) {
  return isLoading ? <Spinner /> : <WrappedComponent {...otherProps} />;
};

export default WithSpinner;
