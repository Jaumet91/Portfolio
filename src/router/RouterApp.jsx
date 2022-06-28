import { Routes, Route, Navigate } from 'react-router-dom';

import { Home, Blog } from '../components/layout';
import { Footer } from '../components';

export const RouterApp = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blog' element={<Blog />} />

        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
      <Footer />
    </>
  );
};
