import { Routes, Route, Navigate } from 'react-router-dom';

import { Home } from '../components/layout';
import { Footer } from '../components/sections';

export const RouterApp = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
      <Footer />
    </>
  );
};
