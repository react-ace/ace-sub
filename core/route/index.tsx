import React from 'react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';

import Home from '@ace/page/home/index';

const AppRoute = () => (
  <MemoryRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Home />} />
    </Routes>
  </MemoryRouter>
);

export default AppRoute;
