import AppRoutes from 'app.routes';
import PageHeader from 'components/page-header.comp';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <PageHeader />
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
