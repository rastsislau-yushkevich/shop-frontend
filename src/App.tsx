import PageHeader from 'components/page-header.comp';
import ProductsPage from 'products';
import React from 'react';
import { BrowserRouter, Router } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <PageHeader />
      <ProductsPage />
    </BrowserRouter>
  );
}

export default App;
