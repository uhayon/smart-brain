import React, { Suspense } from 'react';
import Spinner from './Spinner/Spinner';

const SuspenseLoading = ({ children }) => (
  <Suspense fallback={<Spinner />}>
    {children}
  </Suspense>
);

export default SuspenseLoading;